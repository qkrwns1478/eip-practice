## 파일 기반 RAG 해설과 유사 기출문제

기출문제 해설은 미리 생성한 임베딩 파일에서 관련 문제를 찾아 Groq에 참고 자료로 제공합니다. 추천 문제 최대 3개를 모달에서 연습할 수 있으며, 정답은 답안을 입력하고 확인한 뒤 표시됩니다. 연습 결과는 기존 퀴즈 순서·점수·북마크·오답·학습 진행률을 변경하지 않습니다.

DB 서버와 Docker는 필요하지 않습니다. 준비 단계에서 임베딩 파일을 생성하고, 실행 중에는 Node 서버가 그 파일을 읽어 현재 문제와 다른 문제의 코사인 유사도를 계산합니다. 검색 중에는 파일 쓰기와 임베딩 API 호출이 없습니다. AI 해설은 기존 Groq API를 사용합니다.

### 임베딩 파일 생성

Python 3.10 이상을 사용합니다. 프로젝트 루트에서 의존성을 설치합니다.

```powershell
python -m venv .venv
source .venv/Scripts/activate
pip install -r scripts/requirements-rag.txt
```

`.env`에 생성용 설정을 입력합니다. 아래 값은 기본 OpenAI 서버를 사용하는 예시이며, 다른 서버를 사용하면 주소·모델·차원을 해당 제공자에 맞게 변경합니다.

```dotenv
OPENAI_API_KEY=사용할_API_키
OPENAI_BASE_URL=https://api.openai.com/v1
EMBEDDING_MODEL=text-embedding-3-small
EMBEDDING_DIMENSIONS=1536
```

Python의 모델 생성은 다음 설정에 대응합니다. `OPENAI_BASE_URL`에는 `/v1` 등 제공자가 안내하는 API 기본 경로를 지정하며, 해당 서버는 `/embeddings`를 지원해야 합니다.

```python
model = OpenAIEmbeddings(
    model=MODEL_NAME,     # EMBEDDING_MODEL
    api_key=key,          # OPENAI_API_KEY
    base_url=BASE_URL,    # OPENAI_BASE_URL
    # 타임아웃, 배치 크기 등의 설정은 index_rag.py 참고
)
```

임베딩 생성 명령은 다음과 같습니다.

```powershell
python scripts/index_rag.py
```

최초 실행은 전체 문제를 생성하고 재실행은 변경된 문제만 임베딩합니다. 변경 없는 벡터를 재사용하고 삭제된 문제는 결과 파일에서 제거합니다. 생성 실패 시 이전 파일은 유지됩니다. 모델·차원·서버 주소를 바꾸려면 기존 JSON을 별도 보관하거나 제거한 뒤 다시 생성하세요.

결과는 `server/rag/data/questions.json`에 저장됩니다. 파일에는 ID·내용 해시·벡터·모델 설정을 저장하며 API 키는 포함하지 않습니다. API 키가 없으면 새 임베딩을 생성할 수 없습니다.

원본 데이터는 기존 `pstData`입니다. 검색 시 ID·내용 해시를 대조하여 수정되거나 삭제된 문제의 오래된 벡터를 제외합니다. 코드/개념 유형과 언어를 맞추고 자기 자신·동일 문서·낮은 유사도 결과를 제외합니다. 이미지 URL은 임베딩하지 않으며 현재 문제의 기존 이미지 해설은 유지합니다.

### 환경변수

| 환경변수 | 용도 / 기본값 |
| --- | --- |
| `RAG_ENABLED` | 기본 `true`, `false`이면 파일 검색 비활성화 |
| `RAG_MIN_SCORE` | 최소 코사인 유사도, 기본 0.45. 실제 문제로 조정 필요 |
| `RAG_TIMEOUT_MS` | 파일 읽기 제한 시간, 기본 5000ms |
| `EMBEDDING_MODEL` | 기본 `text-embedding-3-small`, 생성·실행 시 일치 필요 |
| `EMBEDDING_DIMENSIONS` | 기본 1536 (`text-embedding-3-large`는 생략 시 3072), 생성·실행 시 일치 필요 |
| `OPENAI_API_KEY` | **파일 생성 시에만 필요**, 실행 서버에는 불필요 |
| `OPENAI_BASE_URL` | 생성용 OpenAI 호환 API 기본 주소. 기본 `https://api.openai.com/v1`, 실행 서버에는 불필요 |
| `RAG_BATCH_SIZE` | 생성 배치 크기, 기본 32, 최대 64 |
| `RAG_INDEX_TIMEOUT_MS` | 생성 시 임베딩 API 제한 시간, 기본 60000ms |

외부 임베딩 모델을 사용할 때는 `EMBEDDING_MODEL`과 `EMBEDDING_DIMENSIONS`를 실제 모델에 맞춥니다. `dimensions` API 인자는 `text-embedding-3` 모델에만 전달하고, 다른 모델은 반환된 벡터의 차원을 검증합니다. 원문을 서버에 보내며 클라이언트가 코드를 분할하거나 자동으로 잘라내지 않습니다.

키에는 `VITE_` 접두사를 붙이지 마세요. JSON은 서버 전용 경로에 유지하며 `public`이나 `src/assets`에 넣지 않습니다.

### 검색 동작

검색은 생성된 JSON을 메모리에 읽어 재사용합니다. JSON을 다시 생성한 후에는 검색 프로세스를 재시작해야 합니다. 읽기 실패 시 30초 후 재시도하며, 파일이 없거나 잘못되면 기존 Groq 해설을 제공합니다.

`server/rag/search.js`의 `searchSimilarQuestions(query, options)`는 원본 문제 객체 또는 기존 문제 본문과 일치하는 문자열을 받습니다. 옵션은 `k`(기본 5), `year`, `round`, `excludeId`, `excludeQuestionId`, `signal`을 지원합니다. 임의의 새로운 자연어 질문은 저장된 벡터가 없어 검색하지 않습니다.

### 원본 데이터 연동

현재 Python 생성기는 기존 JS 데이터와 동일한 문서·해시를 얻기 위해 `scripts/export-rag.js`를 내부 호출합니다. 이 데이터 추출 단계에서는 프로젝트 환경의 `node` 명령을 사용합니다. 임베딩 API 호출과 결과 파일 저장은 Python에서 수행합니다.
