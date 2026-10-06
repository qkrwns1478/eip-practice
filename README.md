# 정보처리기사 실기 퀴즈 앱 (EIP Practice)

[Vue 3](https://vuejs.org/)와 [Vite](https://vitejs.dev/)를 사용하여 구축한 정보처리기사 실기 대비용 퀴즈 애플리케이션입니다.

## 자료 출처
- [[2026년 대비] 핵심 키워드만 암기하면 쉽게 기억되는 키워드 찾기 130문제](https://www.sinagong.co.kr/pds/001001002/past-exams)
- [정보처리기사 실기 족보 1탄](https://chobopark.tistory.com/193)
- [정보처리기사 실기 족보 2탄](https://chobopark.tistory.com/197)
- [정보처리기사 실기 기출문제 2022년 1회](https://chobopark.tistory.com/271)
- [정보처리기사 실기 기출문제 2022년 2회](https://chobopark.tistory.com/423)
- [정보처리기사 실기 기출문제 2022년 3회](https://chobopark.tistory.com/424)
- [정보처리기사 실기 기출문제 2023년 1회](https://chobopark.tistory.com/372)
- [정보처리기사 실기 기출문제 2023년 2회](https://chobopark.tistory.com/420)
- [정보처리기사 실기 기출문제 2023년 3회](https://chobopark.tistory.com/453)
- [정보처리기사 실기 기출문제 2024년 1회](https://chobopark.tistory.com/476)
- [정보처리기사 실기 기출문제 2024년 2회](https://chobopark.tistory.com/483)
- [정보처리기사 실기 기출문제 2024년 3회](https://chobopark.tistory.com/495)
- [정보처리기사 실기 기출문제 2025년 1회](https://chobopark.tistory.com/540)
- [정보처리기사 실기 기출문제 2025년 2회](https://chobopark.tistory.com/554)
- [정보처리기사 실기 기출문제 2025년 3회](https://chobopark.tistory.com/558)
- [정보처리기사 실기 기출문제 2026년 1회](https://chobopark.tistory.com/561)
- [정보처리기사 실기 기출문제 2026년 2회](https://chobopark.tistory.com/562)

## 주요 기능

- **키워드 퀴즈**
  - 정보처리기사 실기 핵심 개념을 단답형 문제로 학습할 수 있습니다.
  - 문제를 풀기 전에 내용을 확인할 수 있는 공부 모드를 제공합니다.

- **족보 퀴즈**
  - 자주 출제되는 개념을 중심으로 반복 학습할 수 있습니다.

- **기출문제**
  - 2022년부터 2026년까지의 정보처리기사 실기 기출문제를 회차별로 풀 수 있습니다.
  - 전체 문제를 무작위로 풀거나 원하는 시험 회차를 선택하여 모의고사 형태로 풀 수 있습니다.

- **코드 문제**
  - C, Java, Python, SQL 관련 기출문제만 따로 모아서 학습할 수 있습니다.
  - 언어와 시험 회차를 선택할 수 있으며, 무작위 또는 기출 순서로 문제를 풀 수 있습니다.
  - 일부 C, Java, Python 문제는 정답 확인 후 코드의 실행 과정을 단계별로 확인할 수 있습니다.

- **오답 및 북마크**
  - 틀린 문제를 따로 모아 다시 풀 수 있습니다.
  - 다시 확인하고 싶은 문제를 북마크할 수 있습니다.

- **학습 통계**
  - 풀이 진행률과 정답률을 확인할 수 있습니다.

- **학습 기록 저장**
  - 브라우저에 학습 진행 상황이 저장되어 새로고침 후에도 이어서 학습할 수 있습니다.

- **다크 모드**
  - 라이트 모드와 다크 모드를 전환할 수 있으며 선택한 설정이 유지됩니다.

## 스크린샷

| 족보퀴즈 | 기출문제 | 다크모드 |
|:---:|:---:|:---:|
| <img src="./public/images/screenshot_1.jpg"> | <img src="./public/images/screenshot_2.jpg"> | <img src="./public/images/screenshot_3.jpg"> |

## 기술 스택

[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/ko/docs/Web/JavaScript)

## 실행 방법

```bash
npm install
npm run dev
```

- 검증은 `npm test`, 배포용 빌드는 `npm run build`로 실행합니다.
- Windows PowerShell 실행 정책으로 `npm`을 실행할 수 없는 경우 `npm.cmd`를 사용합니다.
