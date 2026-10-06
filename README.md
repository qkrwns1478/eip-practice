# 정보처리기사 실기 퀴즈 앱 (EIP Practice)

[Vue 3](https://vuejs.org/)와 [Vite](https://vitejs.dev/)를 사용하여 구축한 정보처리기사 실기 대비용 퀴즈 애플리케이션입니다.

## 자료 출처
* [정보처리기사 실기 족보 1탄](https://chobopark.tistory.com/193)
* [정보처리기사 실기 족보 2탄](https://chobopark.tistory.com/197)
* [정보처리기사 실기 기출문제 2022년 1회](https://chobopark.tistory.com/271)
* [정보처리기사 실기 기출문제 2022년 2회](https://chobopark.tistory.com/423)
* [정보처리기사 실기 기출문제 2022년 3회](https://chobopark.tistory.com/424)
* [정보처리기사 실기 기출문제 2023년 1회](https://chobopark.tistory.com/372)
* [정보처리기사 실기 기출문제 2023년 2회](https://chobopark.tistory.com/420)
* [정보처리기사 실기 기출문제 2023년 3회](https://chobopark.tistory.com/453)
* [정보처리기사 실기 기출문제 2024년 1회](https://chobopark.tistory.com/476)
* [정보처리기사 실기 기출문제 2024년 2회](https://chobopark.tistory.com/483)
* [정보처리기사 실기 기출문제 2024년 3회](https://chobopark.tistory.com/495)
* [정보처리기사 실기 기출문제 2025년 1회](https://chobopark.tistory.com/540)
* [정보처리기사 실기 기출문제 2025년 2회](https://chobopark.tistory.com/554)
* [정보처리기사 실기 기출문제 2025년 3회](https://chobopark.tistory.com/558)
* [정보처리기사 실기 기출문제 2026년 1회](https://chobopark.tistory.com/561)
* [정보처리기사 실기 기출문제 2026년 2회](https://chobopark.tistory.com/562)

## 주요 기능

* **듀얼 퀴즈 모드**: 사이드바 내비게이션을 통해 **족보퀴즈**와 **기출문제** 두 가지 모드를 선택할 수 있습니다.
* **랜덤 퀴즈**: 각 모드(`geoData.js`, `pstData.js`)에 정의된 문제 은행에서 랜덤으로 문제를 출제합니다.
* **다양한 학습 모드**
  * **퀴즈**: 새로운 문제를 풉니다.
  * **코드 문제**: 상단 `</>` 버튼에서 프로그래밍 및 SQL 언어와 기출 회차를 선택해 코드 문제만 순서대로 또는 무작위로 풉니다.
  * **북마크**: 중요하다고 표시한 문제들만 모아서 봅니다.
  * **틀린 문제**: 이전에 틀렸던 문제들만 다시 풀어볼 수 있습니다.
  * **통계**: 전체 진행률, 정답률, 북마크 및 틀린 문제 개수를 시각적으로 확인합니다.
* **진행 상황 저장**: 모든 학습 진행 상황(점수, 푼 문제, 북마크, 틀린 문제)이 퀴즈 모드별로 브라우저의 Local Storage에 자동으로 저장됩니다.
* **초기화**: 모든 학습 기록을 초기화할 수 있습니다.

### 코드 문제 실행 해설

정답을 제출하면 실행 해설을 볼 수 있습니다. 제출 전에도 **실행 해설 보기** 버튼으로 열 수 있습니다. **다음 단계**, **이전**, **처음**, 단계 슬라이더와 속도 조절이 가능한 **자동 재생**으로 코드 줄, 변수 변화, 배열·2차원 배열, 포인터 연결과 호출 흐름을 확인합니다. 코드 문제의 채점·북마크·오답은 기존 학습 기록에 함께 저장되며, 새로고침 후 같은 문제 순서로 이어서 풀 수 있습니다.

시각화는 기출별로 작성한 해설 시뮬레이션입니다. C·Java·Python의 임의 코드를 실행하는 컴파일러나 인터프리터는 포함하지 않습니다. 반복문은 설명 단위로 묶어 표시할 수 있고, 빈칸은 정답을 채운 상태로 설명합니다. 의사 코드, 출력 표기 차이와 원본 코드·저장된 정답의 불일치는 해당 해설 하단에 표시합니다.

새 문제의 해설은 `src/assets/codeTraces.js`에 문제 ID별 `add(id, steps, note)`로 추가합니다. `step`의 첫 인수는 강조할 원본 코드 문자열이며, 변수 상태와 출력은 해당 동작 후의 값입니다. 같은 문자열이 여러 줄에 있다면 마지막 `occurrence` 인수로 0부터 시작하는 일치 순서를 지정합니다. 코드 문제 분류는 `src/utils/codeQuestions.js`에서 처리합니다.

## 스크린샷

| 족보퀴즈 | 기출문제 | 다크모드 |
|:---:|:---:|:---:|
| <img src="./public/images/screenshot_1.jpg"> | <img src="./public/images/screenshot_2.jpg"> | <img src="./public/images/screenshot_3.jpg"> |

## 기술 스택

[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/ko/docs/Web/JavaScript)

## 프로젝트 구조

* `index.html`: 애플리케이션의 진입점 HTML 파일
* `src/main.js`: Vue 앱 인스턴스를 생성하고 마운트하는 메인 스크립트
* `src/App.vue`: 사이드바 내비게이션을 관리하며, `GeoQuiz`와 `PstQuiz` 컴포넌트를 동적으로 렌더링하는 루트 컴포넌트
* `src/components/GeoQuiz.vue`: **족보퀴즈**의 로직과 UI를 포함하는 컴포넌트
* `src/assets/geoData.js`: **족보퀴즈** 문제와 답을 정의한 데이터 파일
* `src/components/PstQuiz.vue`: **기출문제**의 로직과 UI를 포함하는 컴포넌트
* `src/components/CodeVisualizer.vue`: 코드 줄·변수·출력과 단계 재생을 표시하는 컴포넌트
* `src/assets/codeTraces.js`: 기출 코드 문제별 실행 해설 데이터
* `src/assets/pstData.js`: **기출문제** 문제 데이터셋 목록을 정의한 인덱스 파일
* `src/assets/pstData/*.js`: **기출문제** 문제와 답을 정의한 데이터 파일
* `src/assets/style/style.css`: 퀴즈 컴포넌트에서 공통으로 사용하는 메인 스타일시트
* `src/assets/style/GeoQuiz.css`: `GeoQuiz` 컴포넌트에서 사용하는 스타일시트
* `src/assets/style/PstQuiz.css`: `PstQuiz` 컴포넌트에서 사용하는 스타일시트

## 실행 방법

```bash
npm install
npm run dev
```

검증은 `npm test`, 배포용 빌드는 `npm run build`로 실행합니다. Windows PowerShell 실행 정책으로 `npm`을 실행할 수 없는 경우 `npm.cmd`를 사용합니다.
