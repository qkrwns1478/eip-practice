// 2021년 3회
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
    answer: "Authentication Authorization Accounting",
    question: "AAA 요소를 영문으로 순서대로 쓰시오.",
    passageOrCode: `① 신원 확인 ② 권한 부여 ③ 자원 사용 기록`,
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
    answer: "ARP",
    question: "LAN에서 주소 대응 메시지를 위조하는 스푸핑의 프로토콜은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 325,
    answer: "control",
    alt: "control coupling",
    question: "처리 방향을 지시하는 신호를 전달하는 결합도는? (영문)",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 326,
    answer: "데이터링크 네트워크 표현",
    alts: ["데이터링크 계층 네트워크 계층 표현 계층", "Data Link Layer Network Layer Presentation Layer"],
    question: "OSI 계층을 순서대로 쓰시오.",
    passageOrCode: `① 인접 구간 오류·흐름 제어 ② 경로 선택 ③ 압축·인코딩`,
    options: null,
    imageUrl: null
  },
  {
    id: 327,
    answer: "Aggregation Generalization",
    question: "UML 관계를 영문으로 순서대로 쓰시오.",
    passageOrCode: `① 전체와 부분의 집약 관계 ② IS-A 상속 관계`,
    options: null,
    imageUrl: null
  },
  {
    id: 328,
    answer: "테스트 조건 테스트 데이터 예상 결과",
    alts: ["테스트 조건 테스트 데이터 기대 결과", "Test Condition Test Data Expected Result"],
    question: "테스트 케이스 구성요소를 순서대로 쓰시오.",
    passageOrCode: `① 로그인 전 화면 상태 ② 아이디·비밀번호 입력 ③ 로그인 성공·실패`,
    options: null,
    imageUrl: null
  },
  {
    id: 329,
    answer: "cause effect graph",
    alts: ["cause-effect graph", "Cause Effect Graph Testing", "Cause-Effect Graph Testing", "Cause-Effect Graph Analysis"],
    question: "입력·출력의 논리 관계로 테스트를 설계하는 그래프는? (영문)",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 330,
    answer: "DES",
    alts: ["Data Encryption Standard", "데이터 암호화 표준"],
    question: "블록 64비트, 유효 키 56비트인 대칭키 암호는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 331,
    answer: "7",
    question: "Java 출력값을 쓰시오.",
    passageOrCode: `class Main {
    public static void main(String[] args) {
        int a = 3, b = 4, c = 3, d = 5;
        if ((a == 2 | a == c) & !(c > d) & (1 == b ^ c != d)) {
            a = b + c;
            System.out.println((7 == b ^ c != a) ? a : b);
        } else {
            a = c + d;
            System.out.println((7 == c ^ d != a) ? a : d);
        }
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 332,
    answer: "37",
    question: "C언어 출력값을 쓰시오.",
    passageOrCode: `#include <stdio.h>
int main(void) {
    int x = 12, y = 24, z = 36;
    int *pointers[] = {&x, &y, &z};
    printf("%d\\n", *pointers[1] + **pointers + 1);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 333,
    answer: "4",
    question: "SQL 결과를 쓰시오.",
    passageOrCode: `T1(CODE, NAME): (3258, 'smith'), (4324, 'allen'), (5432, 'scott')
T2(NO, RULE): (12, 's%'), (32, '%t%')
SELECT COUNT(*) CNT FROM T1 A CROSS JOIN T2 B WHERE A.NAME LIKE B.RULE;`,
    options: null,
    imageUrl: null
  },
  {
    id: 334,
    answer: "False",
    question: "Python 출력값을 쓰시오.",
    passageOrCode: `left, right = 100, 200
print(left == right)`,
    options: null,
    imageUrl: null
  },
  {
    id: 335,
    answer: "클래스",
    alts: ["클래스 다이어그램", "class diagram", "Class"],
    question: "이름·속성·메서드와 정적인 관계를 표현하는 UML 다이어그램은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 336,
    answer: "Factory Method",
    alts: ["Factory Method Pattern", "Factory-Method"],
    question: "생성할 구체 클래스를 하위 클래스가 결정하는 패턴은? (영문)",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 337,
    answer: "501",
    question: "C언어 출력값을 쓰시오.",
    passageOrCode: `#include <stdio.h>
struct Score { int os, db, sum, total; };
int main(void) {
    struct Score scores[] = {{95,88,0,0}, {84,91,0,0}, {86,75,0,0}};
    struct Score *p = scores;
    (p+1)->sum = (p+1)->os + (p+2)->db;
    (p+1)->total = (p+1)->sum + p->os + p->db;
    printf("%d\\n", (p+1)->sum + (p+1)->total);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 338,
    answer: "인덱스",
    alts: ["색인", "index"],
    question: "키와 레코드 주소를 모아 직접 접근에 사용하는 것은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 339,
    answer: "GUI",
    alts: ["Graphical User Interface", "그래픽 사용자 인터페이스", "그래픽 유저 인터페이스"],
    question: "아이콘·메뉴를 마우스로 조작하는 사용자 인터페이스의 약어는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 340,
    answer: "상향식 테스트 드라이버",
    alts: ["상향식 드라이버", "상향식 통합 테스트 테스트 드라이버", "Bottom-Up Test Driver"],
    question: "통합 테스트 방식과 대체 모듈을 쓰시오.",
    passageOrCode: `하위 모듈부터 통합하며, 미구현 상위 모듈을 대체한다.`,
    options: null,
    imageUrl: null
  }
];
