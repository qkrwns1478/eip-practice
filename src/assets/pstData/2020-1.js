// 2020년 1회
export const pstData_2020_1 = [
  {
    id: 341,
    answer: "살충제 패러독스",
    alts: ["살충제 역설", "Pesticide Paradox"],
    question: "같은 테스트만 반복하면 새 결함을 발견하기 어려워지는 테스트 원리는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 342,
    answer: "데이터 마이닝",
    alts: ["Data Mining", "데이터마이닝 기법"],
    question: "대량의 데이터에서 유용한 규칙과 패턴을 추출하는 기술은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 343,
    answer: "구문 의미 타이밍",
    alts: ["구문 의미 순서", "구문 타이밍 의미", "의미 구문 타이밍", "의미 타이밍 구문", "타이밍 구문 의미", "타이밍 의미 구문", "Syntax Semantics Timing"],
    question: "프로토콜의 3요소를 쓰시오. (순서 무관)",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 344,
    answer: "XML",
    alts: ["Extensible Markup Language", "확장 마크업 언어", "확장성 마크업 언어"],
    question: "SGML을 단순화한 W3C의 확장 마크업 언어는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 345,
    answer: "JSON",
    alts: ["JavaScript Object Notation", "자바스크립트 객체 표기법"],
    question: "속성·값으로 객체를 표현하는 언어 독립적인 데이터 포맷은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 346,
    answer: "200 3 1",
    question: "SQL 결과의 행 수·행 수·집계값을 순서대로 쓰시오.",
    passageOrCode: `STUDENT: 컴퓨터과 50명, 인터넷과 100명, 사무자동화과 50명
① SELECT DEPT FROM STUDENT;
② SELECT DISTINCT DEPT FROM STUDENT;
③ SELECT COUNT(DISTINCT DEPT) FROM STUDENT WHERE DEPT = '컴퓨터과';`,
    options: null,
    imageUrl: null
  },
  {
    id: 347,
    answer: "(대기시간+서비스시간)/서비스시간",
    alts: ["(대기시간+실행시간)/실행시간", "(대기시간+처리시간)/처리시간", "1+대기시간/서비스시간", "1+대기시간/실행시간"],
    question: "HRN 우선순위 계산식을 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 348,
    answer: "원자성 독립성",
    alts: ["독립성 원자성", "원자성 격리성", "격리성 원자성", "Atomicity Isolation", "Isolation Atomicity"],
    question: "ACID에서 일관성·지속성을 제외한 두 특성은? (순서 무관)",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 349,
    answer: "랜드 어택",
    alts: ["LAND Attack", "LAND", "랜드 공격"],
    question: "패킷의 출발지·목적지를 동일하게 위조하는 DoS 공격은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 350,
    answer: "MD5",
    alts: ["Message Digest 5", "Message-Digest 5"],
    question: "MD4의 후속으로 개발된 128비트 해시 함수는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 351,
    answer: "결합도 응집도",
    alt: "Coupling Cohesion",
    question: "모듈 독립성을 위해 낮출 것·높일 것을 순서대로 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 352,
    answer: "50758595100",
    question: "C언어 출력값을 쓰시오.",
    passageOrCode: `#include <stdio.h>
int main(void) {
    int values[] = {75,95,85,100,50};
    for (int end = 4; end > 0; end--) {
        for (int pos = 0; pos < end; pos++) {
            if (values[pos] > values[pos+1]) {
                int saved = values[pos];
                values[pos] = values[pos+1];
                values[pos+1] = saved;
            }
        }
    }
    for (int pos = 0; pos < 5; pos++) printf("%d", values[pos]);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 353,
    answer: "0 1 2 3",
    question: "Java 출력값을 쓰시오.",
    passageOrCode: `class Main {
    public static void main(String[] args) {
        int[] values = {0,1,2,3};
        for (int n = 0; n < values.length; n++) System.out.print(values[n] + " ");
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 354,
    answer: "-8",
    question: "Java 출력값을 쓰시오.",
    passageOrCode: `class Main {
    public static void main(String[] args) {
        int selector = 3, result = 1;
        switch (selector) {
            case 0:
            case 1:
            case 2:
            case 3: result = 0;
            case 4: result += 3;
            case 5: result -= 10;
            default: result--;
        }
        System.out.print(result);
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 355,
    answer: "헤더",
    alts: ["header", "해더", "헤더 정보"],
    question: "릴리스 노트의 제품명·버전·날짜를 담는 작성 항목은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 356,
    answer: "20",
    alt: "20개월",
    question: "30,000 LOC, 5명, 1인 월 300 LOC일 때 개발 기간은? (개월 단위 숫자)",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 357,
    answer: "반정규화",
    alts: ["비정규화", "역정규화", "Denormalization", "De-normalization"],
    question: "성능 개선을 위해 정규화된 모델에 중복·통합·분리를 적용하는 기법은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 358,
    answer: "물리 계층",
    alts: ["물리", "Physical", "Physical Layer"],
    question: "OSI에서 비트 신호를 전송하는 계층은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 359,
    answer: "처리량 응답시간 경과시간",
    alts: ["처리량 응답시간 반환시간", "Throughput Response Time Turnaround Time"],
    question: "성능 지표를 순서대로 쓰시오.",
    passageOrCode: `① 시간당 처리 건수 ② 입력 종료부터 출력 시작 ③ 요청부터 출력 완료`,
    options: null,
    imageUrl: null
  },
  {
    id: 360,
    answer: "F H",
    alt: "H F",
    question: "Fan-in이 2 이상인 모듈은? (순서 무관)",
    passageOrCode: `호출: A→B,C,D / B→E,F / C→F,G / D→J / E→H / F→H / G→I`,
    options: null,
    imageUrl: null
  }
];
