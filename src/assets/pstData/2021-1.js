// 2021년 1회
export const pstData_2021_1 = [
  {
    id: 281,
    answer: "RARP",
    question: "MAC 주소로 IP 주소를 찾는 프로토콜의 약어는?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["Reverse Address Resolution Protocol","역순 주소 결정 프로토콜","역주소 결정 프로토콜"]
  },
  {
    id: 282,
    answer: "물리적 설계 개념적 설계 논리적 설계",
    question: "DB 설계 단계를 순서대로 쓰시오.",
    passageOrCode: `① 저장 구조·테이블 정의 ② E-R 모델 ③ 스키마·정규화`,
    options: null,
    imageUrl: null,
    alts: [],
    answerParts: [["물리적 설계","물리 설계","물리적","Physical Design"],["개념적 설계","개념 설계","개념적","Conceptual Design"],["논리적 설계","논리 설계","논리적","Logical Design"]],
    answerOrder: "ordered"
  },
  {
    id: 283,
    answer: "기능적 비기능적",
    question: "요구사항 유형을 순서대로 쓰시오.",
    passageOrCode: `① 제공할 기능 ② 성능·구축 제약`,
    options: null,
    imageUrl: null,
    alts: [],
    answerParts: [["기능적","기능","기능적 요구사항","Functional","Functional Requirement"],["비기능적","비기능","비기능적 요구사항","Nonfunctional","Non-functional Requirement"]],
    answerOrder: "ordered"
  },
  {
    id: 284,
    answer: "WSDL",
    question: "XML로 웹 서비스의 위치·메시지·프로토콜을 기술하는 언어는?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["Web Services Description Language","웹 서비스 기술 언어","웹 서비스 명세 언어"]
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
    imageUrl: null,
    alts: []
  },
  {
    id: 286,
    answer: "1",
    question: "SQL 조회 결과를 쓰시오.",
    passageOrCode: `급여(EMPNO, SAL): (100, 1000), (200, 3000), (300, 1500)
SELECT COUNT(*) FROM 급여
WHERE EMPNO > 100 AND SAL >= 3000 OR EMPNO = 200;`,
    options: null,
    imageUrl: null,
    alts: []
  },
  {
    id: 287,
    answer: "3\n1\n45\n50\n89",
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
    imageUrl: null,
    alts: []
  },
  {
    id: 288,
    answer: "반정규화",
    question: "성능을 위해 정규화된 모델을 통합·중복하는 기법은?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["비정규화","역정규화","Denormalization","De-normalization"]
  },
  {
    id: 289,
    answer: "경계값 분석 동등분할 테스트",
    question: "블랙박스 테스트 기법을 순서대로 쓰시오.",
    passageOrCode: `① 0≤x≤10에서 -1, 0, 10, 11 검사 ② 유효·무효 입력을 그룹화`,
    options: null,
    imageUrl: null,
    alts: ["경곗값 분석 동등분할 테스트","경계값 분석 동치분할 검사"],
    answerParts: [["경계값 분석","경곗값 분석","경계값 분석 검사","Boundary Value Analysis"],["동등분할 테스트","동치분할 검사","동등분할","동치분할","동치분할 테스트","Equivalence Partitioning"]],
    answerOrder: "ordered"
  },
  {
    id: 290,
    answer: "단위 테스트 통합 테스트",
    question: "테스트 종류를 순서대로 쓰시오.",
    passageOrCode: `① 개별 모듈 검사 ② 모듈 간 인터페이스 검사`,
    options: null,
    imageUrl: null,
    alts: [],
    answerParts: [["단위 테스트","단위 검사","단위","Unit Test","Unit Testing"],["통합 테스트","통합 검사","통합","Integration Test","Integration Testing"]],
    answerOrder: "ordered"
  },
  {
    id: 291,
    answer: "128 8",
    question: "IPv6 주소 길이와 IPv4 옥텟 길이는?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: [],
    answerParts: [["128","128비트","128bit","128bits"],["8","8비트","8bit","8bits"]],
    answerOrder: "ordered"
  },
  {
    id: 292,
    answer: "IPC",
    question: "공유 메모리·소켓 등 프로세스 간 통신 기술의 약어는?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["Inter Process Communication","Inter-Process Communication","프로세스 간 통신"]
  },
  {
    id: 293,
    answer: "EAI",
    question: "Point-to-Point·Hub & Spoke 등으로 기업 애플리케이션을 연계하는 솔루션은?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["Enterprise Application Integration","기업 애플리케이션 통합","전사적 애플리케이션 통합"]
  },
  {
    id: 294,
    answer: "5 4",
    question: "행 5개, 속성 4개인 릴레이션의 Cardinality·Degree는?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: [],
    answerParts: [["5"],["4"]],
    answerOrder: "ordered"
  },
  {
    id: 295,
    answer: "Lee\n38",
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
    imageUrl: null,
    alts: []
  },
  {
    id: 296,
    answer: "연산 구조 제약조건",
    question: "데이터 모델 요소를 순서대로 쓰시오.",
    passageOrCode: `① 데이터 처리 명세 ② 데이터 표현 형태 ③ 무결성 규칙`,
    options: null,
    imageUrl: null,
    alts: [],
    answerParts: [["연산","Operation","Operations"],["구조","Structure"],["제약조건","제약","Constraint","Constraints"]],
    answerOrder: "ordered"
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
    imageUrl: null,
    alts: []
  },
  {
    id: 298,
    answer: "DAC",
    question: "소유자 판단으로 다른 사용자에게 권한을 주는 접근 통제는?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["임의적 접근 통제","임의적 접근 제어","Discretionary Access Control","임의 접근 통제"]
  },
  {
    id: 299,
    answer: "내용 결합도 스탬프 결합도 공통 결합도",
    question: "결합도를 순서대로 쓰시오.",
    passageOrCode: `① 다른 모듈 내부 참조 ② 구조체 전달 ③ 전역 변수 공유`,
    options: null,
    imageUrl: null,
    alts: [],
    answerParts: [["내용 결합도","내용","Content","Content Coupling"],["스탬프 결합도","스탬프","Stamp","Stamp Coupling"],["공통 결합도","공통","Common","Common Coupling"]],
    answerOrder: "ordered"
  },
  {
    id: 300,
    answer: "세션 하이재킹",
    question: "RST로 연결을 끊고 세션을 가로채는 공격은?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["Session Hijacking","세션 하이재킹 공격"]
  }
];
