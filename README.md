# 정보처리기사 실기 퀴즈 앱 (EIP Practice)

이 프로젝트는 [Vue 3](https://vuejs.org/)와 [Vite](https://vitejs.dev/)를 사용하여 구축한 정보처리기사 실기 대비 랜덤 퀴즈 애플리케이션입니다.

## 자료 출처
* [정보처리기사 실기 족보 1탄](https://chobopark.tistory.com/193)
* [정보처리기사 실기 족보 2탄](https://chobopark.tistory.com/197)
* [정보처리기사 실기 기출문제 2022년 1회](https://chobopark.tistory.com/241)
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

## 주요 기능

* **듀얼 퀴즈 모드:** 사이드바 내비게이션을 통해 **족보퀴즈**와 **기출문제** 두 가지 모드를 선택할 수 있습니다.
* **랜덤 퀴즈:** 각 모드(`geoData.js`, `pstData.js`)에 정의된 문제 은행에서 랜덤으로 문제를 출제합니다.
* **다양한 학습 모드:**
    * **퀴즈:** 새로운 문제를 풉니다.
    * **북마크:** 중요하다고 표시한 문제들만 모아서 봅니다.
    * **틀린 문제:** 이전에 틀렸던 문제들만 다시 풀어볼 수 있습니다.
    * **통계:** 전체 진행률, 정답률, 북마크 및 틀린 문제 개수를 시각적으로 확인합니다.
* **진행 상황 저장:** 모든 학습 진행 상황(점수, 푼 문제, 북마크, 틀린 문제)이 퀴즈 모드별로 브라우저의 Local Storage에 자동으로 저장됩니다.
* **초기화:** 원할 때 모든 학습 기록을 초기화할 수 있습니다.

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
* `src/assets/pstData.js`: **기출문제** 문제와 답을 정의한 데이터 파일
* `src/assets/style/GeoQuiz.css`: 퀴즈 컴포넌트에서 공통으로 사용하는 메인 스타일시트

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
