// 2021년 1회
export const pstData_2021_1 = [
  {
    id: 281,
    answer: "RARP",
    alts: ["Reverse Address Resolution Protocol", "역순 주소 결정 프로토콜", "역주소 결정 프로토콜"],
    question: "MAC 주소로 IP 주소를 찾는 프로토콜의 약어는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 282,
    answer: "물리적 설계 개념적 설계 논리적 설계",
    alts: ["물리 설계 개념 설계 논리 설계", "물리적 개념적 논리적", "Physical Design Conceptual Design Logical Design"],
    question: "DB 설계 단계를 순서대로 쓰시오.",
    passageOrCode: `① 저장 구조·테이블 정의 ② E-R 모델 ③ 스키마·정규화`,
    options: null,
    imageUrl: null
  },
  {
    id: 283,
    answer: "기능적 비기능적",
    alts: ["기능 비기능", "기능적 요구사항 비기능적 요구사항", "Functional Nonfunctional"],
    question: "요구사항 유형을 순서대로 쓰시오.",
    passageOrCode: `① 제공할 기능 ② 성능·구축 제약`,
    options: null,
    imageUrl: null
  },
  {
    id: 284,
    answer: "WSDL",
    alts: ["Web Services Description Language", "웹 서비스 기술 언어", "웹 서비스 명세 언어"],
    question: "XML로 웹 서비스의 위치·메시지·프로토콜을 기술하는 언어는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 285,
    answer: "skiddp",
    question: "Python 출력값을 쓰시오.",
    passageOrCode: `class Cities:
    names = ['seoul', 'kyeonggi', 'inchon', 'daejeon', 'daegu', 'pusan']

result = ''
for city in Cities().names:
    result += city[0]
print(result)`,
    options: null,
    imageUrl: null
  },
  {
    id: 286,
    answer: "1",
    question: "SQL 조회 결과를 쓰시오.",
    passageOrCode: `급여(EMPNO, SAL): (100, 1000), (200, 3000), (300, 1500)
SELECT COUNT(*) FROM 급여
WHERE EMPNO > 100 AND SAL >= 3000 OR EMPNO = 200;`,
    options: null,
    imageUrl: null
  },
  {
    id: 287,
    answer: `3
1
45
50
89`,
    question: "Java 출력값을 쓰시오.",
    passageOrCode: `class Main {
    public static void main(String[] args) {
        int[][] values = {{45, 50, 75}, {89}};
        System.out.println(values[0].length);
        System.out.println(values[1].length);
        System.out.println(values[0][0]);
        System.out.println(values[0][1]);
        System.out.println(values[1][0]);
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 288,
    answer: "반정규화",
    alts: ["비정규화", "역정규화", "Denormalization", "De-normalization"],
    question: "성능을 위해 정규화된 모델을 통합·중복하는 기법은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 289,
    answer: "경계값 분석 동등분할 테스트",
    alts: ["경곗값 분석 동등분할 테스트", "경계값 분석 동치분할 검사", "Boundary Value Analysis Equivalence Partitioning"],
    question: "블랙박스 테스트 기법을 순서대로 쓰시오.",
    passageOrCode: `① 0≤x≤10에서 -1, 0, 10, 11 검사 ② 유효·무효 입력을 그룹화`,
    options: null,
    imageUrl: null
  },
  {
    id: 290,
    answer: "단위 테스트 통합 테스트",
    alts: ["단위 통합", "단위 검사 통합 검사", "Unit Test Integration Test"],
    question: "테스트 종류를 순서대로 쓰시오.",
    passageOrCode: `① 개별 모듈 검사 ② 모듈 간 인터페이스 검사`,
    options: null,
    imageUrl: null
  },
  {
    id: 291,
    answer: "128 8",
    alt: "128비트 8비트",
    question: "IPv6 주소 길이와 IPv4 옥텟 길이는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 292,
    answer: "IPC",
    alts: ["Inter Process Communication", "Inter-Process Communication", "프로세스 간 통신"],
    question: "공유 메모리·소켓 등 프로세스 간 통신 기술의 약어는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 293,
    answer: "EAI",
    alts: ["Enterprise Application Integration", "기업 애플리케이션 통합", "전사적 애플리케이션 통합"],
    question: "Point-to-Point·Hub & Spoke 등으로 기업 애플리케이션을 연계하는 솔루션은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 294,
    answer: "5 4",
    question: "행 5개, 속성 4개인 릴레이션의 Cardinality·Degree는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 295,
    answer: `Lee
38`,
    question: "C언어 출력값을 쓰시오.",
    passageOrCode: `#include <stdio.h>
struct Person { char name[10]; int age; };
int main(void) {
    struct Person people[] = {{"Kim",28}, {"Lee",38}, {"Seo",50}, {"Park",35}};
    struct Person *cursor = people;
    ++cursor;
    printf("%s\\n%d\\n", cursor->name, cursor->age);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 296,
    answer: "연산 구조 제약조건",
    alts: ["연산 구조 제약", "Operation Structure Constraint"],
    question: "데이터 모델 요소를 순서대로 쓰시오.",
    passageOrCode: `① 데이터 처리 명세 ② 데이터 표현 형태 ③ 무결성 규칙`,
    options: null,
    imageUrl: null
  },
  {
    id: 297,
    answer: "0+1+2+3+4+5=15",
    question: "Java 출력값을 쓰시오.",
    passageOrCode: `class Main {
    public static void main(String[] args) {
        int total = 0;
        for (int n = 0; n <= 5; n++) {
            total += n;
            System.out.print(n);
            if (n < 5) System.out.print("+");
            else System.out.print("=" + total);
        }
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 298,
    answer: "DAC",
    alts: ["임의적 접근 통제", "임의적 접근 제어", "Discretionary Access Control", "임의 접근 통제"],
    question: "소유자 판단으로 다른 사용자에게 권한을 주는 접근 통제는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 299,
    answer: "내용 결합도 스탬프 결합도 공통 결합도",
    alts: ["내용 스탬프 공통", "Content Coupling Stamp Coupling Common Coupling"],
    question: "결합도를 순서대로 쓰시오.",
    passageOrCode: `① 다른 모듈 내부 참조 ② 구조체 전달 ③ 전역 변수 공유`,
    options: null,
    imageUrl: null
  },
  {
    id: 300,
    answer: "세션 하이재킹",
    alts: ["Session Hijacking", "세션 하이재킹 공격"],
    question: "RST로 연결을 끊고 세션을 가로채는 공격은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  }
];
