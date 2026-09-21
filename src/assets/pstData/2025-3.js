// 2025년 3회
export const pstData_2025_3 = [
{
    id: 221,
    answer: "패키지",
    question: "다음은 UML (    ) 다이어그램이다. 아래 내용을 보고 다이어그램의 관계를 확인하여 명칭을 작성하시오.",
    passageOrCode: `(   ) 다이어그램이란
시스템을 폴더 모양의 (   ) 단위로 구분하여 구성 요소 간의 관계를 표현하는 UML 구조 다이어그램이다.
하나의 (   ) 안에는 여러 클래스나 하위 (   ) 가 포함될 수 있으며,
(   ) 간에는 «import», «access», «merge» 등의 관계를 통해 의존성(Dependency) 을 표현한다.
 
이 다이어그램은 코드의 실제 구조(폴더 구조)와 비슷하게 표현되기 때문에
소프트웨어의 모듈화, 재사용성, 의존 관계를 시각적으로 설계할 때 자주 사용된다`,
    options: null,
    imageUrl: null
  },
  {
    id: 222,
    answer: "ㅇ",
    alt: "조건",
    question: "다음은 소프트웨어 테스트 기법 중 하나에 대한 설명이다.",
    passageOrCode: `소프트웨어 테스트의 구조 기반(화이트박스) 기법 중 하나로,
결정 포인트(Decision Point) 내에 존재하는 모든 개별 조건식(Atomic Condition) 을 대상으로 하는 커버리지 기준이 있다.
 
하나의 결정문(예: if (A && B) 또는 if (X > 10 || Y == 0)) 안에는
여러 개의 조건식이 포함될 수 있는데 이 커버리지는
각각의 조건식이 True와 False 두 가지 경우를 모두 한 번 이상 만족하도록
테스트 케이스를 설계해야 한다.
 
즉, 모든 개별 조건이 두 방향의 결과를 거쳐야 “커버되었다”고 판단하지만
그렇다고 해서 전체 결정식(Decision Expression) 의 결과(True/False)가
모두 수행된다고 보장하지는 않는다.`,
    options: [
      "ㄱ. 경로(Path)",
      "ㄴ. 결정(Decision)",
      "ㄷ. 조건/결정(Condition/Decision)",
      "ㄹ. 변경 조건/결정(Modified Condition/Decision, MC/DC)",
      "ㅁ. 다중 조건(Multiple Condition)",
      "ㅂ. 문장(Statement)",
      "ㅅ. 분기(Branch)",
      "ㅇ. 조건(Condition)",
      "ㅈ. 루프(Loop)"
    ],
    imageUrl: null
  },
  {
    id: 223,
    answer: "pwd ls cd cp",
    question: "다음은 유닉스(Unix) 또는 리눅스(Linux) 환경에서 자주 사용하는 기본 명령어에 대한 설명이다. 각 설명에 맞는 명령어를 보기에서 골라 연결하시오.",
    passageOrCode: `1. 현재 작업 중인 디렉터리의 경로를 출력한다. (   )
2. 디렉터리의 내용(파일 및 하위 디렉터리)을 목록으로 표시한다. (   )
3. 다른 디렉터리로 이동한다. (   )
4. 파일을 복사한다. (   )`,
    options: ["ls, cd, cp, pwd"],
    imageUrl: null
  },
  {
    id: 224,
    answer: "ㅇ ㄴ ㄷ ㅁ ㄱ",
    alt: "Hamming FEC BEC Parity CRC",
    question: "다음은 오류검출 방식을 설명하는 내용이다. 설명의 빈칸 (①)~(⑤) 에 들어갈 알맞은 용어를 <보기>에서 고르시오.",
    passageOrCode: `(①) 코드는 전송 데이터에 여러 개의 검사 비트를 추가하여 오류를 검출하고 수정까지 가능한 방법이다.
이 코드는 재전송 없이 수신 측에서 자체 수정하는 (②) 방식에 속한다.
 
이에 반해 오류 발생 시 송신 측에 재전송을 요구하는 방식은 (③)이라 하며, 여기에 포함되는 대표적 검출 기법으로 (④) 검사와 (⑤) 검사가 있다.
 
(④) 검사는 데이터 블록 끝에 1비트 검사 비트를 추가하여 오류를 검출한다.
(⑤) 검사는 송신측과 수신측이 동일한 특정 다항식을 사용하여 오류를 검출한다.`,
    options: ["ㄱ. CRC", "ㄴ. FEC", "ㄷ. BEC", "ㄹ. NAK", "ㅁ. Parity", "ㅂ. MD5", "ㅅ. BCD", "ㅇ. Hamming"],
    imageUrl: null
  },
  {
    id: 225,
    answer: "C",
    question: "다음은 C코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
 
struct Test {
    int i;
    const char *g;
};
 
int main() {
    struct Test test[] = {{1, "AB"}, {2, "DC"}, {3, "EB"}}; 
    struct Test *p = &test[1]; 
    printf("%s", p->g + (p->i - 1));
    return 0;
}`,
    options: null,
    imageUrl: null,
  },
  {
    id: 226,
    answer: "E",
    question: "다음은 C코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
 
int main(void) {
    char str[] = "REPUBLICOFKOREA";
    int a = 0;
 
    while (str[a] != '\0')
        ++a;
 
    putchar(str[a - 2]);
    return 0;
}`,
    options: null,
    imageUrl: null,
  },
  {
    id: 227,
    answer: "187",
    question: "다음은 C코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
 
struct Node {
    struct Node* next;
    unsigned int x;
};
 
int main() {
    struct Node t1 = { 0, 5u };
    struct Node t2 = { 0, 7u };
    struct Node t3 = { 0, 11u };
 
    t3.next = &t2;
    t2.next = &t1;
 
    struct Node* curr = &t3;
    int sum = 0;
 
    while (curr) {
        sum = sum * 3 + curr->x;
        curr = curr->next;
    }
 
    sum = (sum ^ 42u) + 100u;
 
    printf("%u", sum);
}`,
    options: null,
    imageUrl: null,
  },
  {
    id: 228,
    answer: "implements",
    question: "아래 코드는 Machine 이라는 인터페이스를 정의하고 WashingMachine 클래스에서 해당 인터페이스를 사용하고자 한다. 빈칸에 들어갈 올바른 키워드를 작성하시오.",
    passageOrCode: `interface Machine {
    void run();
}
 
class WashingMachine (____빈칸____) Machine {  
    private String name;
 
    public WashingMachine() {
        this.name = "LG Washer";
    }
 
    public void run() {
        System.out.println("Washing machine running");
    }
}
 
public class Main {
    public static void main(String[] args) {
        WashingMachine wm = new WashingMachine();
        wm.run();
    }
}`,
    options: null,
    imageUrl: null,
  },
  {
    id: 229,
    answer: "15 5 10 3 18 5 9 2",
    question: "다음은 파이썬에 대한 문제이다. 아래 코드를 확인하여 출력값에 알맞는 값을 작성하시오.",
    passageOrCode: `data = [
    [3, 5, 2, 4, 1],
    [4, 5, 1],
    [4, 4, 1, 5, 4],
    [4, 5]
]
 
result = {}
 
for index, lis in enumerate(data):
    list_sum = sum(lis)
    list_len = len(lis)
 
    result[index] = (list_sum, list_len)
 
print(result)`,
    options: ["출력 값: {0: (①, ②), 1: (③, ④), 2: (⑤, ⑥), 3: (⑦, ⑧)}"],
    imageUrl: null,
  },
  {
    id: 234,
    answer: "15 5 10 3 18 5 9 2",
    question: "다음은 파이썬에 대한 문제이다. 아래 코드를 확인하여 출력값에 알맞는 값을 작성하시오.",
    passageOrCode: `data = [
    [3, 5, 2, 4, 1],
    [4, 5, 1],
    [4, 4, 1, 5, 4],
    [4, 5]
]
 
result = {}
 
for index, lis in enumerate(data):
    list_sum = sum(lis)
    list_len = len(lis)
 
    result[index] = (list_sum, list_len)
 
print(result)`,
    options: ["출력 값: {0: (①, ②), 1: (③, ④), 2: (⑤, ⑥), 3: (⑦, ⑧)}"],
    imageUrl: null,
  },
  {
    id: 230,
    answer: "4",
    question: "다음은 테이블에서 조건값을 실행한 화면이다. 이에 대한 알맞는 결과값을 작성하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F3xNUN%2FdJMcahvY69C%2FAAAAAAAAAAAAAAAAAAAAADw45hfOG4ELvqVn1Ydu87lx5vaNXH94n0GSMrwIQCOA%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1767193199%26allow_ip%3D%26allow_referer%3D%26signature%3Df5pmMC%252B%252FwXH9V7s9pqPXQSxhoHo%253D",
  },
  {
    id: 231,
    answer: "OTP",
    question: "다음 설명에 해당하는 인증 기술을 쓰시오.",
    passageOrCode: `한 번 사용하면 즉시 폐기되어 재사용이 불가능하다.
 
서버와 토큰(또는 앱)은 시간 동기화나 카운터 기반 방식으로 매번 새로운 값을 생성하고, 내부 검증은 해시 함수를 이용한 방식으로 서버에 평문을 저장하지 않고도 유효성을 확인할 수 있다.
 
이 특성 때문에 은행 인증 등 고보안 영역에서 널리 사용되며 재전송 공격 방지와 사용자 편의성을 동시에 만족한다.`,
    options: null,
    imageUrl: null,
  },
  {
    id: 232,
    answer: "super",
    question: "다음은 Java의 상속과 생성자 호출에 관한 코드이다. 밑줄에 알맞은 단어를 작성하시오.",
    passageOrCode: `class Rectangle {
 
    int width, height;
 
    Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }
}
 
class Square extends Rectangle {
 
    Square(int a) {
        ____(a,a);
    }
 
    int getSquareArea() {
        return width * height;
    }
}
 
public class Main {
    public static void main(String[] args) {
        Square sq = new Square(10);
        System.out.println(sq.getSquareArea());
    }
}`,
    options: null,
    imageUrl: null,
  },
  {
    id: 233,
    answer: "OAuth",
    question: "다음은 인증 및 자원 접근 방식에 대한 설명이다. 알맞은 단어를 작성하시오.",
    passageOrCode: `사용자가 새로운 사이트에 가입하지 않고 평소에 이용하던 서비스의 계정으로 로그인할 수 있게 해주는 기술이다.
사용자의 비밀번호는 절대 전달되지 않으며 사용자가 승인한 범위에 대해서만 접근 권한이 위임된다.
이 방식은 직접 인증(Authentication)을 수행하지 않고 "인가(Authorization)" 절차를 통해 접근 권한을 제3자에게 부여한다.
인증 완료 후, 서비스 제공자는 Access Token을 발급하며 애플리케이션은 이 토큰을 이용해 API를 호출하여 필요한 정보에 접근한다.
대표적인 예는 소셜 로그인이며 SSO(Single Sign-On)과 달리 동일 시스템 내 인증이 아니라 서로 다른 서비스 간의 권한 위임에 초점이 맞춰져 있다.`,
    options: null,
    imageUrl: null,
  },
  {
    id: 235,
    answer: `A
a1`,
    question: "다음 아래의 테이블을 확인하여 R%S의 결과를 테이블 형태로 기재하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FnQ3eR%2FdJMcai2Jn1f%2FAAAAAAAAAAAAAAAAAAAAAELHm-w1OFo4fvfDFdSFQJ2TgYLyEdMLMu72VQKV9sEE%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1767193199%26allow_ip%3D%26allow_referer%3D%26signature%3DhdN2xAo48b7uDJ3qfMeDa8%252Bd95w%253D",
  },
  {
    id: 236,
    answer: "튜플 인스턴스 카디널리티",
    question: "관계형 데이터베이스 개념에 대한 설명이다. 빈칸에 들어갈 용어를 <보기>에서 골라 순서대로 쓰시오.",
    passageOrCode: `ㄱ. 테이블에서 한 행(Row)을 의미하며, 하나의 레코드를 구성하는 요소
ㄴ. 실제 데이터가 저장되어 있는 테이블의 내용 전체를 의미하며, 데이터의 상태를 나타낸다.
ㄷ. 테이블에 저장된 행(Row)의 총 개수를 의미한다.`,
    options: ["스키마(Structure)", "속성(Attribute)", "튜플(Tuple)", "차수(Degree)", "인스턴스(Instance)", "카디널리티(Cardinality)"],
    imageUrl: null,
  },
  {
    id: 237,
    answer: "AB",
    question: "다음은 Java에 대한 코드이다. 알맞는 출력값을 작성하시오.",
    passageOrCode: `enum Tri {
    A("A"), B("AB"), C("ABC");
 
    private String code;
 
    Tri(String code) {
        this.code = code;
    }
 
    public String code() {
        return code;
    }
}
 
public class Main {
    public static void main(String[] args) {
        Tri t = Tri.values()[Tri.A.name().length()];
        System.out.print(t.code());
    }
}`,
    options: null,
    imageUrl: null,
  },
  {
    id: 238,
    answer: "MAC RBAC DAC",
    question: "다음은 정보보안에서 사용하는 접근통제(Access Control) 방식에 대한 설명이다. 설명에 해당하는 접근통제 모델을 <보기>에서 골라 빈칸에 작성하시오.",
    passageOrCode: `ㄱ. 중앙에서 보안 정책을 일괄적으로 설정하며, 주체(사용자)가 임의로 수정하거나 변경할 수 없다. 주로 군사 기밀, 국가 보안과 같은 높은 보안 수준이 요구되는 환경에서 사용된다. 보안 등급(Top Secret / Secret / Confidential 등)에 따라 접근 여부가 결정된다.
ㄴ. 조직 내에서 부여된 직무나 역할(Role)에 따라 접근 권한을 부여하는 방식이다. 개별 사용자에게 직접 권한을 설정하지 않고, 역할에 권한을 묶어 부여하기 때문에 관리가 용이하며 직무 변경 시 역할만 변경하면 된다.
ㄷ. 자원의 소유자(Owner)가 해당 자원에 대한 접근 권한을 자유롭게 부여하거나 회수할 수 있는 방식이다. 파일이나 폴더의 소유자가 읽기/쓰기/실행 권한을 설정하는 것이 대표적인 예로 사용자의 임의 설정이 가능해 보안성이 상대적으로 낮다.`,
    options: ["DAC", "MAC", "RBAC"],
    imageUrl: null,
  },
  {
    id: 239,
    answer: "MAC RBAC DAC",
    alt: "테스트 조건 테스트 데이터 예상 결과",
    question: "다음은 테스트케이스의 구성요소에 대한 설명이다. 괄호 ( ) 안에 들어갈 알맞는 보기를 고르시오.",
    passageOrCode: null,
    options: [
      "ㄱ. 테스트 조건",
      "ㄴ. 테스트 환경",
      "ㄷ. 테스트 유형",
      "ㄹ. 테스트 데이터",
      "ㅁ. 예상 결과",
      "ㅂ. 수행 단계",
      "ㅅ. 성공/실패 기준"
    ],
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FceJ8aE%2FdJMcaacyBpw%2FAAAAAAAAAAAAAAAAAAAAAADJIY3nqTo1a7xE3SURgAb3TNV6FPn10AsS2T_M2YUI%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1767193199%26allow_ip%3D%26allow_referer%3D%26signature%3DvdDapA11DC%252BE0bvC0Ul3%252F9kiqTI%253D",
  },
  {
    id: 240,
    answer: "4",
    question: "다음은 SQL에 관한 문제이다. 아래 A테이블을 참고하여 쿼리의 결과를 작성하시오.",
    passageOrCode: `SELECT count(col2) FROM A WHERE col1 IN (2, 3) OR col2 IN (3, 5)`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FrZWcv%2FdJMcagjxAYd%2FAAAAAAAAAAAAAAAAAAAAAORRhi_VXk_jvqfTMe3nWuUAB7JHDQh2F2QSrSsAhHrM%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1767193199%26allow_ip%3D%26allow_referer%3D%26signature%3D0%252F%252FqEQKBKBlqf0MPLySTkiR7ygM%253D",
  }
];
