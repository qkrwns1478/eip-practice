export const pstData_2021_3 = [
  {
    id: 321,
    answer: "3",
    question: "Java 출력값을 쓰시오.",
    passageOrCode: `class Connection {
    private static Connection instance;
    private int count;
    static Connection get() {
        if (instance == null) instance = new Connection();
        return instance;
    }
    void increment() { count++; }
    int getCount() { return count; }
}
class Main {
    public static void main(String[] args) {
        Connection first = Connection.get(); first.increment();
        Connection second = Connection.get(); second.increment();
        Connection third = Connection.get(); third.increment();
        System.out.print(first.getCount());
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 322,
    answer: "ARP",
    question: "보안 위협에 관한 다음 설명에서 괄호에 공통으로 들어갈 알맞은 답을 쓰시오.",
    passageOrCode: `(    ) 스푸핑은 로컬 네트워크(LAN)에서 사용하는 (    ) 프로토콜의 취약점을 이용한 공격 기법으로, 자신의 물리적 주소(MAC)를 변조하여 다른 PC에게 도달해야 하는 데이터 패킷을 가로채거나 방해한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 323,
    answer: "GRANT",
    question: "사용자에게 데이터베이스 접근·객체 사용 권한을 부여하는 SQL 명령은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 324,
    answer: "Authentication Authorization Accounting",
    question: "AAA 서버에 관한 다음 설명에서 각 번호(①~③)에 들어갈 알맞는 용어를 보기에서 찾아 쓰시오.",
    passageOrCode: `AAA 서버는 사용자의 컴퓨터  자원 접근 처리와 서비스 제공에 있어서의 다음 3가지 기능을 제공하는 서버이다.
- (  1  ): 접근하는 사용자의 신원을 검증하는 기능
- (  2  ): 신원이 검증된 사용자에게 특정된 권한과 서비스를 허용하는 기능
- (  3  ): 사용자가 어떤 종류의 서비스를 이용했고, 얼마만큼의 자원을 사용했는지 기록 및 보관하는 기능`,
    options: ["Application", "Authentication", "Avalanche", "Authorization", "Accounting", "Ascii"],
    imageUrl: null
  },
  {
    id: 325,
    answer: "Factory Method",
    question: "디자인 패턴에 관한 다음 설명에서 괄호에 들어갈 알맞은 답을 보기에서 찾아 쓰시오.",
    passageOrCode: "(    ) 패턴은 객체 생성을 서브 클래스에서 처리하도록 분리하여 캡슐화한 패턴으로, 상위 클래스에서 인터페이스만 정의하고 실제 생성은 서브 클래스가 담당한다. 다른 이름으로 가상 생성자(Virtual Constructor) 패턴이라고도 불린다.",
    options: [
      "Singleton",
      "Abstract Factory",
      "Factory Method",
      "Prototype", 
      "Facade",
      "Composite",
      "Template Method",
      "Builder"
    ],
    imageUrl: null
  },
  {
    id: 326,
    answer: "Control",
    alt: "Control Coupling",
    question: "결합도(Coupling)의 종류 중 단순 처리 대상인 데이터만 전달되는 것이 아니라 어떻게 처리해야 하는지를 결정하는 제어 요소가 전달되는 경우의 결합도를 영문으로 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 327,
    answer: "501",
    question: "다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오.",
    passageOrCode: `#include <stdio.h>
struct jsu {
	char nae[12];
	int os, db, hab, hhab;
};

int main(){
	struct jsu st[3] = {{"데이터1", 95, 88}, {"데이터2", 84, 91}, {"데이터3", 86, 75}};
	struct jsu* p;
	p = &st[0];
	(p + 1)->hab = (p + 1)->os + (p + 2)->db;
	(p + 1)->hhab = (p+1)->hab + p->os + p->db;
	printf("%dn", (p+1)->hab + (p+1)->hhab);
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 328,
    answer: "상향식 드라이버",
    alt: "상향식 테스트 드라이버",
    question: "애플리케이션 테스트에 관한 다음 설명에서 괄호에 들어갈 알맞은 답을 쓰시오.",
    passageOrCode: `- (  1  ) 통합 테스트는 소프트웨어의 하위 모듈에서 상위 모듈 방향으로 통합하면서 테스트하는 기법이다.
- 하나의 주요 제어 모듈과 관련된 종속 모듈의 그룹인 클러스터(Cluster)가 필요하다.
- 데이터의 입·출력을 확인하기 위해 더미 모듈인 (  2  )를 생성한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 329,
    answer: "False",
    question: "다음 Python으로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오.",
    passageOrCode: `x, y = 100, 200
print(x==y)`,
    options: null,
    imageUrl: null
  },
  {
    id: 330,
    answer: "4",
    question: "<A> 테이블과 <B> 테이블을 참고하여 SQL문의 실행 결과를 쓰시오.",
    passageOrCode: "SELECT COUNT(*) CNT FROM A CROSS JOIN B WHERE A.NAME LIKE B.RULE;",
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fub9t1%2FbtrLh96dLvL%2FAAAAAAAAAAAAAAAAAAAAAJgsCzBoT7Q93lmnyB6E6js8LP5XUbv7qndzOs4AdzYQ%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1793458799%26allow_ip%3D%26allow_referer%3D%26signature%3DnvOgSWTDbMU%252FHmIQ9dr%252FpDvRXrI%253D"
  },
  {
    id: 331,
    answer: "색인",
    alt: "인덱스",
    question: "다음 설명에서 괄호에 공통으로 들어갈 알맞은 답을 쓰시오.",
    passageOrCode: `파일의 구조는 파일을 구성하는 레코드들이 보조기억장치에 편성되는 방식을 의미하는 것으로, 크게 순차, (    ), 해싱으로 구분한다.
(    ) 파일 구조는 <값, 주소> 쌍으로 구성되는 데이터 구조를 활용하여 데이터에 접근하는 방식으로, 자기 디스크에서 주로 활용된다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 332,
    answer: "테스트 조건 테스트 데이터 예상 결과",
    question: "다음 테스트 케이스를 참조하여 괄호에 들어갈 테스트 케이스의 구성 요소를 <보기>에서 찾아 쓰시오.",
    passageOrCode: null,
    options: ["요구 절차", "의존성 여부", "테스트 데이터", "테스트 조건", "하드웨어 환경", "예상 결과", "소프트웨어 환경", "성공/실패 기준"],
    imageUrl: "/images/pstData/332.png"
  },
  {
    id: 333,
    answer: "클래스",
    alt: "Class",
    question: "UML(Unified Modeling Language)에 관한 다음 설명에서 괄호에 공통으로 들어갈 알맞은 답을 쓰시오.",
    passageOrCode: `(    ) 다이어그램은 UML 다이어그램 중 객체들을 (    )로 추상화하여 표현하는 다이어그램으로 대표적인 구조적 다이어그램이다.
(    )는 각각의 객체들이 갖는 속성과 메소드를 표현한 것으로 3개의 구획으로 나눠 이름, 속성, 메소드를 표기한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 334,
    answer: "데이터 링크 네트워크 표현",
    alts: ["데이터 링크 계층 네트워크 계층 표현 계층", "데이터 링크 망 표현", "데이터 링크 계층 망 계층 표현 계층"],
    question: "OSI 7 Layer에 대한 다음 설명에서 각 번호에 들어갈 알맞은 계층을 쓰시오.",
    passageOrCode: `OSI 7 Layer는 다른 시스템 간의 원활한 통신을 위해 ISO(국제표준화기구)에서 제안한 통신 규약(Protocol)이다.
- (  1  ): 물리적으로 연결된 두 개의 인접한 개방 시스템들 간에 신뢰성 있고 효율적인 정보 전송을 할  수 있도록 연결 설정, 데이터 전송, 오류 제어 등의 기능을 수행한다.
- (  2  ): 개방 시스템들 간의 네트워크 연결을 관리하며, 경로 제어, 패킷 교환, 트래픽 제어 등의 기능을 수행한다.
- (  3  ): 서로 다른 데이터 표현 형태를 갖는 시스템 간의 상호 접속을 위해 필요한 계층으로, 코드 변환, 데이터 암호화, 데이터 압축, 구문 검색 등의 기능을 수행한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 335,
    answer: "DES",
    question: "다음 지문에서 설명하는 용어를 쓰시오.",
    passageOrCode: `1974년 IBM이 개발하고 1975년 NBS에 의해 미국의 국가 표준으로 발표된 암호화 알고리즘으로, 블록 크기는 64비트, 키 길이는 56비트이며, 16회의 라운드를 수행한다. 컴퓨터 기술이 발달함에 따라 해독이 쉬워지면서 미국의 국가 표준이 2001년 AES로 대체되었다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 336,
    answer: "37",
    question: "다음 C언어로 프로그램을 분석하여 그 실행 결과를 쓰시오.",
    passageOrCode: `#include <stdio.h>
int main() {
    int* array[3];
    int a = 12, b = 24, c = 36;
    array[0] = &a;
    array[1] = &b;
    array[2] = &c; 
    printf("%d", *array[1] + **array + 1);
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 337,
    answer: "7",
    question: "다음 Java로 프로그램을 분석하여 그 실행 결과를 쓰시오.",
    passageOrCode: `public class Test {
	public static void main(String[] args) {
      int w = 3, x = 4, y = 3, z = 5;
        if((w == 2 | w == y) & !(y>z) & (1 == x ^ y != z)) {
          w = x + y;
            if(7 == x ^ y != w)
              System.out.println(w);
            else
              System.out.println(x);
        }
        else {
          w = y + z;
            if(7 == y ^ z != w)
              System.out.println(w);
            else
              System.out.println(z);
        }
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 338,
    answer: "Cause-Effect Graph",
    question: "테스트 기법 중 그래프를 활용하여 입력 데이터 간의 관계와 출력에 영향을 미치는 상황을 체계적으로 분석한 다음 효용성이 높은 테스트 케이스를 선정하여 검사하는 기법을 보기에서 찾아 쓰시오.",
    passageOrCode: null,
    options: [
      "Equivalence", "Partition", "Boundary Value Analysis", "Condition Test", 
      "Cause-Effect Graph", "Error Guess", "Comparison Test", 
      "Base Path Test", "Loop Test", " Data Flow Test"
    ],
    imageUrl: null
  },
  {
    id: 339,
    answer: "GUI",
    alts: ["Graphical User Interface", "그래픽 사용자 인터페이스", "그래픽 유저 인터페이스"],
    question: "다음 지문에서 설명하는 용어를 쓰시오.",
    passageOrCode: `Windows, MacOS 등에서 사용하는 인터페이스로, 사용자가 명령어를 직접 입력하지 않고 키보드와 마우스 등을 이용하여 아이콘이나 메뉴를 선택하여 모든 작업을 수행하는 사용자 인터페이스를 뜻한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 340,
    answer: "Aggregation Generalization",
    question: "통합 테스트 방식과 대체 모듈을 쓰시오.",
    passageOrCode: `관계(Relationships)는 사물과 사물 사이의 연관성을 표현하는 것이다.
- (  1  ): 하나의 사물이 다른 사물에 포함되어 있는 관계로, 전체와 부분으로 구분되어지며 서로 독립적이다.
- (  2  ): 상위 모듈이 하위 모듈보다 더 일반적인 개념을 가지고 있으며, 하위 모듈이 상위 모듈보다 더 구체적인 개념을 가진다.`,
    options: ["Association", "Aggregation", "Composition", "Generalization", "Dependency", "Realization"],
    imageUrl: null
  }
];
