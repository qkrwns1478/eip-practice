# 정보처리기사 실기 퀴즈 앱 (GeoQuiz)

이 프로젝트는 [Vue 3](https://vuejs.org/)와 [Vite](https://vitejs.dev/)를 사용하여 구축한 정보처리기사 실기 대비 랜덤 퀴즈 애플리케이션입니다.

## 키워드 소스
https://chobopark.tistory.com/193

## 주요 기능

`GeoQuiz.vue` 컴포넌트를 기반으로 한 주요 기능들은 다음과 같습니다:

* **랜덤 퀴즈:** `geoData.js` 에 정의된 문제 은행에서 랜덤으로 문제를 출제합니다.
* **다양한 학습 모드:**
    * **퀴즈:** 새로운 문제를 풉니다.
    * **북마크:** 중요하다고 표시한 문제들만 모아서 봅니다.
    * **틀린 문제:** 이전에 틀렸던 문제들만 다시 풀어볼 수 있습니다.
    * **통계:** 전체 진행률, 정답률, 북마크 및 틀린 문제 개수를 시각적으로 확인합니다.
* **진행 상황 저장:** 모든 학습 진행 상황(점수, 푼 문제, 북마크, 틀린 문제)이 브라우저의 **Local Storage**에 자동으로 저장됩니다.
* **스코어 보드:** 정답, 오답, 총 문제 수, 북마크 개수를 실시간으로 추적합니다.
* **진행도 표시줄:** 전체 문제 대비 현재까지 푼 문제의 비율을 시각적으로 보여줍니다.
* **초기화:** 원할 때 모든 학습 기록을 초기화할 수 있습니다.

## 기술 스택

[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/ko/docs/Web/JavaScript)

## 프로젝트 구조

* `index.html`: 애플리케이션의 진입점 HTML 파일
* `src/main.js`: Vue 앱 인스턴스를 생성하고 마운트하는 메인 스크립트
* `src/App.vue`: `GeoQuiz` 컴포넌트를 불러오는 루트 컴포넌트
* `src/components/GeoQuiz.vue`: 퀴즈 애플리케이션의 모든 로직과 UI를 포함하는 핵심 컴포넌트
* `src/assets/geoData.js`: 정보처리기사 실기 문제와 답을 정의한 데이터 파일
* `src/assets/style/GeoQuiz.css`: `GeoQuiz` 컴포넌트 전용 스타일시트

## 실행 방법

### 1. 의존성 설치

```bash
npm install
```
### 2. 개발 서버 실행
개발 모드로 애플리케이션을 실행합니다.

```bash
npm run dev
```

### 3. 프로덕션 빌드
배포용으로 프로젝트를 빌드합니다.

```bash
npm run build
```

### 4. 빌드 미리보기
프로덕션 빌드된 결과물을 로컬에서 실행합니다.

```bash
npm run preview
```