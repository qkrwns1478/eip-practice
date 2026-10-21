// 2021년 1회
export const pstData_2021_1 = [
  {
    id: 281,
    answer: "RARP",
    question: "물리 네트워크(MAC) 주소에 해당하는 IP 주소를 알려주는 프로토콜로 역순 주소 결정 프로토콜을 무엇이라고 하는지 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 282,
    answer: "물리적 설계 개념적 설계 논리적 설계",
    question: "다음은 DB 설계 절차에 관한 설명이다. 다음 빈칸에 들어갈 알맞은 용어를 보기에서 찾아 쓰시오.",
    passageOrCode: `- (  1  )은/는 특정 DBMS의 특성 및 성능을 고려하여 데이터베이스 저장 구조로 변환하는 과정으로 결과로 나오는 명세서는 테이블 정의서 등이 있다.
- (  2  )은/는 현실 세계에 대한 인식을 추상적, 개념적으로 표현하여 개념적 구조를 도출하는 과정으로 주요 산출물에는 E-R 다이어그램이 있다.
- (  3  )은/는 목표 DBMS에 맞는 스키마 설계, 트랜잭션 인터페이스를 설계하는 정규화 과정을 수행한다.`,
    options: ["구현", "개념적 설계", "논리적 설계", "요구사항 분석", "물리적 설계"],
    imageUrl: null
  },
  {
    id: 283,
    answer: "기능적 비기능적",
    question: "다음은 요구사항의 분류에 대한 설명이다. 괄호 (   ) 안에 들어갈 요구사항의 유형에 대해서 쓰시오.",
    passageOrCode: `- (  1  ) 요구사항은 시스템이 제공하는 기능, 서비스에 대한 요구사항이다.
- (  2  ) 요구사항은 시스템이 수행하는 기능 이외의 사항, 시스템 구축에 대한 제약사항에 관한 요구사항이다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 284,
    answer: "WSDL",
    alts: ["Web Services Description Language", "웹 서비스 기술 언어", "웹 서비스 명세 언어"],
    question: "웹 서비스명, 제공 위치, 메세지 포맷, 프로토콜 정보 등 웹 서비스에 대한 상세 정보가 기술된 XML 형식으로 구성된 언어를 무엇이라고 하는지 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 285,
    answer: "skiddp",
    question: "다음은 파이썬 코드이다. 출력 결과를 쓰시오.",
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
    question: "다음 SQL 실행 결과를 숫자만 쓰시오.",
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
    question: "다음 Java 프로그램 결과를 쓰시오.",
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
    question: "정규화된 엔티티, 속성, 관계에 대해 성능 향상과 개발 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링의 기법을 무엇이라고 하는지 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 289,
    answer: "경계값 분석 동등분할 테스트",
    alts: ["경곗값 분석 동등분할 테스트", "경계값 분석 동치분할 검사", "Boundary Value Analysis Equivalence Partitioning"],
    question: "다음은 블랙박스 기법에 대한 예제이다. 블랙박스 기법 두 가지를 쓰시오.",
    passageOrCode: `- (  1  ): 0 <= x <= 10이면 -1 0 10 11 검사
- (  2  ): 입력 데이터의 영역을 유사한 도메인별로 유횻값 / 무횻값을 그룹핑하여 나누어서 검사`,
    options: null,
    imageUrl: null
  },
  {
    id: 290,
    answer: "단위 테스트 통합 테스트",
    question: "다음은 테스트 종류에 대한 설명이다. 빈칸에 들어갈 알맞은 용어를 보기에서 찾아 쓰시오.",
    passageOrCode: `- (  1  ) 은/는 개별 모듈, 서브루틴이 정상적으로 실행되는지 확인
- (  2  ) 은/는 인터페이스 간 시스템이 정상적으로 실행되는지 확인`,
    options: ["시스템 테스트", "인수 테스트", "알파 테스트", "단위 테스트", "통합 테스트", "회귀 테스트"],
    imageUrl: null
  },
  {
    id: 291,
    answer: "128 8",
    question: "다음은 빈칸에 들어갈 알맞은 용어를 쓰시오.",
    passageOrCode: `- IPv6는 (  1  ) 비트 길이를 가진다.
- IPv4는 길이 32bit이며, (  2  ) 비트씩 네 부분으로 나눈다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 292,
    answer: "IPC",
    alts: ["Inter Process Communication", "Inter-Process Communication"],
    question: "공유메모리, 소켓, 세마포어, 메세지 큐 등 프로세스 간 통신하는 기술을 무엇이라고 하는지 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 293,
    answer: "EAI",
    alt: "Enterprise Application Integration",
    question: "다음을 설명하는 용어를 쓰시오.",
    passageOrCode: `- 시스템 통합에 사용되는 솔루션으로 구축 유형에는 Point to Point, Hub & Spoke, Message Bus가 있다.
- 기업에서 운영되는 서로 다른 플랫폼 및 애플리케이션 간의 정보를 전달, 연계, 통합이 가능하도록 해주는 솔루션이다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 294,
    answer: "5 4",
    question: "주어진 테이블의 Cardinality와 Degree를 구하시오. (공백으로 구분)",
    passageOrCode: null,
    options: null,
    imageUrl: "https://blog.kakaocdn.net/dna/cyXlZr/btrMdERJhRg/AAAAAAAAAAAAAAAAAAAAAHSr9Oou63L4k8OTixXGrI1VkhWQLld6sGTPfsFwb10I/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1793458799&allow_ip=&allow_referer=&signature=7Qlzc95GjPCyfYrpNf7meg03OtI%3D"
  },
  {
    id: 295,
    answer: `Lee
38`,
    question: "다음은 C언어 프로그램이다. 실행 결과를 쓰시오.",
    passageOrCode: `#include <stdio.h>

struct good {
	char name[10];
  int age;
};

void main() {
  struct good s[] = {"Kim",28,"Lee",38,"Seo",50,"Park",35};
  struct good *p;
  p = s;
  p++;
  printf("%s\\n", p-> name);
  printf("%d\\n", p-> age);
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 296,
    answer: "연산 구조 제약조건",
    alts: ["연산 구조 제약"],
    question: "데이터 모델 구성요소 3가지를 쓰시오.",
    passageOrCode: `- 데이터베이스에 저장된 실제 데이터를 처리하는 작업에 대한 명세로서 데이터베이스를 조작하는 기본 도구이다.
- 개체 데이터 모델에서는 (  1  ) 을/를 이용하여 실제 데이터를 처리하는 작업에 대한 명세를 나타내는데 논리 데이터 모델에서는 (  2  ) 을/를 어떻게 나타낼 것인지 표현한다.
- (  3  ) 은/는 데이터 무결성 유지를 위한 db의 보편적 방법으로 릴레이션의 특정 칼럼에 설정하는 제약을 의미하며, 개체무결성과 참조 무결성 등이 있다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 297,
    answer: "0+1+2+3+4+5=15",
    question: "다음은 Java 프로그램이다. 실행 결과를 쓰시오.",
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
    question: "시스템 객체의 접근을 개인 또는 그룹의 식별자에 기반을 둔 방법, 어떤 종류의 접근 권한을 가진 사용자가 다른 사용자에 자신의 판단에 따라 권한을 허용하는 접근제어 방식은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 299,
    answer: "내용 결합도 스탬프 결합도 공통 결합도",
    question: "다음은 결합도에 대한 설명이다. 빈칸에 들어갈 알맞은 용어를 보기에서 찾아 기호로 쓰시오.",
    passageOrCode: `- (  1  ) 은/는 다른 모듈 내부에 있는 변수나 기능을 다른 모듈에서 사용하는 경우의 결합도
- (  2  ) 은/는 모듈 간의 인터페이스로 배열이나 객체, 구조 등이 전달되는 경우의 결합도
- (  3  ) 은/는 파라미터가 아닌 모듈 밖에 선언된 전역 변수를 참조하고 전역 변수를 갱신하는 식으로 상호작용하는 경우의 결합도`,
    options: ["자료 결합도", "스탬프 결합도", "제어 결합도", "공통 결합도", "내용 결합도", "외부 결합도"],
    imageUrl: null
  },
  {
    id: 300,
    answer: "세션 하이재킹",
    alts: ["Session Hijacking", "세션 하이재킹 공격"],
    question: "괄호 안에 공통으로 들어갈 공격 기법을 적으시오.",
    passageOrCode: `- (    ) 은/는 '세션을 가로채다' 라는 의미로 정상적 연결을 RST 패킷을 통해 종료시킨 후 재연결 시 희생자가 아닌 공격자에게 연결한다.
- (    ) 은/는 세션 관리 취약점을 이용한 공격 기법이다.`,
    options: null,
    imageUrl: null
  }
];
