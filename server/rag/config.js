import { fileURLToPath } from "node:url";
export const INDEX_PATH = fileURLToPath(new URL("./data/questions.json", import.meta.url));

function setting(env, name, fallback, min, max, integer = true) {
  const value = env[name] ? Number(env[name]) : fallback;
  if (!Number.isFinite(value) || (integer && !Number.isInteger(value)) || value < min || value > max)
    throw new Error(name + " 설정을 확인해주세요.");
  return value;
}
export function readRagConfig(env = process.env) {
  const model = env.EMBEDDING_MODEL || "text-embedding-3-small";
  return {
    enabled: env.RAG_ENABLED !== "false",
    model,
    dimensions: setting(
      env,
      "EMBEDDING_DIMENSIONS",
      model === "text-embedding-3-large" ? 3072 : 1536,
      1,
      3072,
    ),
    timeoutMs: setting(env, "RAG_TIMEOUT_MS", 5000, 100, 30000),
    minScore: setting(env, "RAG_MIN_SCORE", 0.45, 0, 1, false),
  };
}
export function indexMetadata(config) {
  return {
    provider: "openai",
    model: config.model,
    dimensions: config.dimensions,
    documentVersion: 1,
    distance: "cosine",
  };
}
export function assertCompatibleIndex(index, config) {
  if (
    index?.version !== 1 ||
    !Array.isArray(index.records) ||
    Object.entries(indexMetadata(config)).some(
      ([key, value]) => index.metadata?.[key] !== value,
    )
  ) {
    throw new Error(
      "임베딩 파일 형식 또는 모델 설정이 다릅니다. 동일한 설정으로 npm run rag:index를 실행해주세요.",
    );
  }
}
