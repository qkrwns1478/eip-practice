import argparse
import json
import math
import os

from pathlib import Path
import subprocess
import sys
import tempfile

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_OUTPUT = ROOT / "server/rag/data/questions.json"


def integer_setting(env, name, default, minimum, maximum):
    raw = env.get(name) or str(default)
    try:
        value = int(raw)
    except (TypeError, ValueError):
        raise ValueError(f"Invalid {name}") from None
    if not minimum <= value <= maximum:
        raise ValueError(f"Invalid {name}")
    return value


def settings(env):
    model = env.get("EMBEDDING_MODEL") or "text-embedding-3-small"
    return {
        "model": model,
        "base_url": (env.get("OPENAI_BASE_URL") or "https://api.openai.com/v1").rstrip("/"),
        "dimensions": integer_setting(env, "EMBEDDING_DIMENSIONS", 3072 if model == "text-embedding-3-large" else 1536, 1, 3072),
        "batch_size": integer_setting(env, "RAG_BATCH_SIZE", 32, 1, 64),
        "timeout": integer_setting(env, "RAG_INDEX_TIMEOUT_MS", 60000, 1000, 300000) / 1000,
    }


def export_catalog():
    # JS only reads pstExams, constructs documents and computes the same hashes as runtime.
    result = subprocess.run(
        ["node", str(ROOT / "scripts/export-rag.js")], cwd=ROOT,
        capture_output=True, encoding="utf-8", check=True, timeout=30,
    )
    return json.loads(result.stdout)


def valid_vector(vector, dimensions):
    return (isinstance(vector, list) and len(vector) == dimensions
            and all(type(value) in (int, float) and math.isfinite(value) for value in vector)
            and any(value != 0 for value in vector))


def create_embedder(config, env):
    MODEL_NAME = config["model"]
    BASE_URL = config["base_url"]
    key = env.get("OPENAI_API_KEY")
    if not key:
        raise ValueError("OPENAI_API_KEY is required only when generating new embeddings")
    try:
        from langchain_openai import OpenAIEmbeddings
    except ImportError:
        raise ValueError("Install dependencies: python -m pip install -r scripts/requirements-rag.txt") from None
    # ChatOpenAI is for chat completions; embeddings use the matching LangChain integration.
    model = OpenAIEmbeddings(
        model=MODEL_NAME,
        api_key=key,
        base_url=BASE_URL,
        request_timeout=config["timeout"],
        max_retries=2,
        chunk_size=config["batch_size"],
        check_embedding_ctx_length=False,
        model_kwargs={"encoding_format": "float"},
        **({"dimensions": config["dimensions"]} if MODEL_NAME.startswith("text-embedding-3") else {}),
    )
    return model.embed_documents


def index_questions(catalog, output_path=DEFAULT_OUTPUT, env=None, embed=None, log=print):
    env = os.environ if env is None else env
    config = settings(env)
    metadata = {"provider": "openai", "model": config["model"], "dimensions": config["dimensions"],
                "documentVersion": catalog["documentVersion"], "distance": "cosine"}
    if config["base_url"] != "https://api.openai.com/v1":
        metadata["baseUrl"] = config["base_url"]
    output_path = Path(output_path)
    previous = {}
    if output_path.exists():
        previous = json.loads(output_path.read_text(encoding="utf-8"))
        if previous.get("version") != 1 or previous.get("metadata") != metadata or not isinstance(previous.get("records"), list):
            raise ValueError("Index settings differ. Restore previous settings or move the old JSON before rebuilding")
    existing = {row["id"]: row for row in previous.get("records", []) if isinstance(row, dict) and isinstance(row.get("id"), str)}
    records = []
    indexed = unchanged = 0
    for stat in catalog["stats"]:
        rows = [row for row in catalog["records"] if row["examKey"] == stat["examKey"]]
        updated = 0
        for start in range(0, len(rows), config["batch_size"]):
            batch = rows[start:start + config["batch_size"]]
            changed = [row for row in batch if existing.get(row["id"], {}).get("contentHash") != row["contentHash"]
                       or not valid_vector(existing.get(row["id"], {}).get("embedding"), config["dimensions"])]
            if changed and embed is None:
                embed = create_embedder(config, env)
            vectors = embed([row["document"] for row in changed]) if changed else []
            if len(vectors) != len(changed) or any(not valid_vector(vector, config["dimensions"]) for vector in vectors):
                raise ValueError("Invalid embedding vector dimensions or values")
            updates = {row["id"]: vector for row, vector in zip(changed, vectors)}
            records.extend({"id": row["id"], "contentHash": row["contentHash"],
                            "embedding": updates[row["id"]] if row["id"] in updates else existing[row["id"]]["embedding"]}
                           for row in batch)
            indexed += len(changed)
            updated += len(changed)
            unchanged += len(batch) - len(changed)
        log(f"[RAG] {stat['examKey']}: total={len(rows)}, embedded={updated}, reused={len(rows) - updated}, skipped={stat['skipped']}")
    output_path.parent.mkdir(parents=True, exist_ok=True)
    temporary = None
    try:
        with tempfile.NamedTemporaryFile(mode="w", encoding="utf-8", dir=output_path.parent, suffix=".tmp", delete=False) as stream:
            temporary = Path(stream.name)
            json.dump({"version": 1, "metadata": metadata, "records": records}, stream, ensure_ascii=False, allow_nan=False, separators=(",", ":"))
            stream.write("\n")
        os.replace(temporary, output_path)
    finally:
        if temporary is not None:
            temporary.unlink(missing_ok=True)
    skipped = sum(stat["skipped"] for stat in catalog["stats"])
    result = {"total": len(records), "indexed": indexed, "unchanged": unchanged, "skipped": skipped}
    log(f"[RAG] Complete: {result}")
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT, help="Output JSON path")
    args = parser.parse_args()
    try:
        from dotenv import load_dotenv
        load_dotenv(ROOT / ".env", override=False)
        index_questions(export_catalog(), output_path=args.output)
    except ImportError:
        print("[RAG] Install dependencies: python -m pip install -r scripts/requirements-rag.txt", file=sys.stderr)
        return 1
    except (ValueError, OSError, subprocess.SubprocessError):
        print("[RAG] Generation failed. Check settings, source export, existing JSON and output permissions. Previous index is preserved.", file=sys.stderr)
        return 1
    except Exception:
        # API exceptions can contain document payloads; do not print them.
        print("[RAG] Embedding request failed. Check API credentials, limits and connectivity. Previous index is preserved.", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
