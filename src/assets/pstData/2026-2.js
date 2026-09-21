export const pstData_2026_2 = [
  {
    id: 261,
    answer: "ㄱ. 동치분할 (Equivalence Partitioning)",
    alts: ["동치분할 (Equivalence Partitioning)", "동치분할", "Equivalence Partitioning"],
    question: "다음은 블랙박스 테스트 기법에 대한 설명이다. 괄호 (   ) 안에 들어갈 말을 보기에서 골라 쓰시오.",
    passageOrCode: `(   )은 프로그램의 입력 조건을 유효한 값과 유효하지 않은 값의 영역으로 나누고, 각 영역을 대표할 수 있는 값을 선정하여 테스트 케이스를 설계하는 명세 기반(블랙박스) 테스트 기법이다.
 
위 표에서 테스트 값으로 60을 입력하였을 때, 예상 결과와 실제 결과가 모두 등급 D로 일치하였다. 이는 (   ) 기법을 적용하여 각 등급 구간의 대표값을 테스트한 사례이다.`,
    options: [
      "ㄱ. 동치분할 (Equivalence Partitioning)",
      "ㄴ. 경계값분석 (Boundary Value Analysis)",
      "ㄷ. 결정테이블 테스트 (Decision Table Testing)",
      "ㄹ. 상태전이 테스트 (State Transition Testing)",
    ],
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fcs8zYV%2FdJMcag7j8qX%2FAAAAAAAAAAAAAAAAAAAAAM1CaaVDMUc3j9v1W9_UIS5HyLYdBwSPYCSTOevXvrmT%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1790780399%26allow_ip%3D%26allow_referer%3D%26signature%3DzHtIX6FScl3llCWkyvWr8pg7pQ4%253D"
  },
  {
    id: 262,
    answer: "10a20b",
    question: "다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `class A {
    private int a;
 
    public A(int a) {
        this.a = a;
    }
 
    void print() {
        System.out.print(a + "a");
    }
}
 
class B extends A {
    private int b;
 
    B(int a, int b) {
        super(a);
        this.b = b;
    }
 
    void print() {
        super.print();
        System.out.print(b + "b");
    }
}
 
public class Main {
    public static void main(String[] args) {
        B obj = new B(10, 20);
        obj.print();
    }
}
`,
    options: null,
    imageUrl: null
  },
  {
    id: 263,
    answer: "ㅁ. 내용결합도 (Content Coupling)",
    alts: ["내용결합도 (Content Coupling)", "내용결합도", "Content Coupling"],
    question: "다음은 소프트웨어 모듈 간의 결합도(Coupling)에 대한 설명이다. 괄호 안에 들어갈 말을 보기에서 골라 기호로 쓰시오.",
    passageOrCode: `( )는 한 모듈이 다른 모듈 내부에 있는 변수나 기능을 직접 참조하거나 사용하는 경우에 발생하는 결합도로, 결합도 종류 중 결합 강도가 가장 높은 형태이다.`,
    options: [
      "ㄱ. 자료결합도 (Data Coupling)",
      "ㄴ. 스탬프결합도 (Stamp Coupling)",
      "ㄷ. 제어결합도 (Control Coupling)",
      "ㄹ. 외부결합도 (External Coupling)",
      "ㅁ. 내용결합도 (Content Coupling)",
      "ㅂ. 공통결합도 (Common Coupling)",
    ],
    imageUrl: null
  },
  {
    id: 264,
    answer: "OSPF",
    alt: "Open Shortest Path First",
    question: "다음은 라우팅 프로토콜에 대한 설명이다. 괄호 안에 들어갈 알맞은 용어를 쓰시오.",
    passageOrCode: `( )는 링크 상태(Link State) 알고리즘을 사용하는 대표적인 내부 라우팅 프로토콜(IGP)이다. 다익스트라(Dijkstra) 알고리즘을 이용하여 최단 경로를 탐색하며, 대규모 네트워크에 적합하고 멀티캐스트를 지원한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 265,
    answer: "CNNLRPYT",
    question: "다음은 파이썬 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `class LocationDict:
    locations = {
        "NYC": "New York",
        "LON": "London",
        "PAR": "Paris",
        "TKY": "Tokyo"
    }
 
tmpdict = LocationDict()
str01 = ""
for key, location in tmpdict.locations.items():
    keyk = key[-1]
    locationk = location[0]
    str01 += keyk + locationk
 
print(str01, end="")
`,
    options: null,
    imageUrl: null
  },
  {
    id: 266,
    answer: "_THIISING",
    question: "다음은 파이썬 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `a = "_THIS_IS_KIM_SPEAKING"
b = a[:4]      
c = a[6:8]     
d = a[18:]     
e = b + c + d  
print(e)
`,
    options: null,
    imageUrl: null
  },
  {
    id: 267,
    answer: "12",
    question: "다음은 C언어 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
 
typedef struct N {
    int v;
    struct N* a;
    struct N* b;
} N;
 
int c = 0;
int ans = 0;
 
void pst(N *n) {
    if (!n) return;
    pst(n->a);
    pst(n->b);
    if (++c == 3) ans = n->v;
}
 
int main() {
    N ne = {35, 0, 0};
    N nd = {64, 0, 0};
    N nc = {53, 0, 0};
    N nb = {12, &ne, &nc};
    N na = {21, &nb, &nd};
 
    pst(&na);
    printf("%d\n", ans);
    return 0;
}
`,
    options: null,
    imageUrl: null
  },
  {
    id: 268,
    answer: "6.5ms",
    alt: "6.5",
    question: "다음 프로세스들을 SRT(Shortest Remaining Time) 스케줄링 기법으로 처리할 때, 평균 대기시간을 구하시오. (단위: ms)",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fbg1SJ4%2FdJMcabZlvUE%2FAAAAAAAAAAAAAAAAAAAAAMOykm5WvUEmLnQnGZkjPwZWIQDzJ1id3L6tIA4EvfCz%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1790780399%26allow_ip%3D%26allow_referer%3D%26signature%3DGIt%252Fu2WeoQajVzVXEfCh2WKSCf0%253D"
  },
  {
    id: 269,
    answer: "50 50 2 8",
    alt: "1. 50 2. 50 3. 2 4. 8",
    question: "다음은 C언어 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
 
void fn1(int* i) { *i = 50; }
void fn2(int i) { i = 60; }
 
void fn34(int* p) {
    printf("3. %d\n", *p);
    printf("4. %d\n", *(p + 3));
}
 
int main() {
    int i = 30;
    int list[] = {2, 4, 6, 8, 10};
 
    fn1(&i);
    printf("1. %d\n", i);
 
    fn2(i);
    printf("2. %d\n", i);
 
    fn34(list);
 
    return 0;
}
`,
    options: null,
    imageUrl: null
  },
  {
    id: 270,
    answer: "192.168.35.72 129.200.8.249 192.168.36.249",
    alt: "2. 192.168.35.72 4. 129.200.8.249 5. 192.168.36.249",
    question: "다음은 네트워크 A, B, C에 속한 호스트의 IP 주소 목록이다. 괄호 안에 들어갈 수 있는 IP 주소를 각각 하나씩 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcBrkGy%2FdJMcabZlxM4%2FAAAAAAAAAAAAAAAAAAAAAK25-IeVuinOb3t586IVwhdnyju1Rx1u0i649P00UC17%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1790780399%26allow_ip%3D%26allow_referer%3D%26signature%3D5isveSOxZ%252Fpwz0CAZudsH1Efvz8%253D"
  },
  {
    id: 271,
    answer: "추상 팩토리",
    alt: "Abstract Factory",
    question: "다음은 GoF(Gang of Four) 디자인 패턴에 대한 설명이다. 괄호 안에 들어갈 알맞은 용어를 쓰시오.",
    passageOrCode: `( )는 서로 관련 있는 여러 객체(제품군)를 생성하기 위한 인터페이스를 제공하는 생성 패턴으로, Kit이라고도 불린다. 이 패턴을 사용하면 구체적인 클래스를 지정하지 않고도 연관된 제품군 전체를 한 번에 변경할 수 있다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 272,
    answer: "이% DESC",
    alt: "1. 이% 2. DESC",
    question: "다음 <학생> 테이블에서 성이 '이'씨인 학생의 정보를 조회하되, 학번을 기준으로 내림차순 정렬하여 출력하고자 한다. SQL문의 괄호 안에 들어갈 알맞은 내용을 각각 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcFBUQ1%2FdJMcahSFE1V%2FAAAAAAAAAAAAAAAAAAAAAITWrNrt-YgbCprVUhfw4gZL2o3iiY3752R-XD5nPxD0%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1790780399%26allow_ip%3D%26allow_referer%3D%26signature%3D%252BYWIGLdq6D7hDGjGsPeVdriDBI4%253D"
  },
  {
    id: 273,
    answer: "3",
    question: "다음 <A>, <B> 테이블과 SQL문을 참고하여, SQL문을 실행했을 때 출력되는 RESULT 값을 구하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fp4Lvi%2FdJMcadW6aGU%2FAAAAAAAAAAAAAAAAAAAAACefJ-y05TFYmxnsghCGFshdirzb7a9EN3FvWP4cRzTi%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1790780399%26allow_ip%3D%26allow_referer%3D%26signature%3DmNC4tB6D8YmI%252FpSFKHlEWTlSlK0%253D"
  },
  {
    id: 274,
    answer: "2",
    question: "다음 <A>, <B> 테이블과 SQL문을 참고하여, SQL문을 실행했을 때 출력되는 결과값을 구하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fb3mEm8%2FdJMcadW7PRw%2FAAAAAAAAAAAAAAAAAAAAALaV3vhhQ45c1Y0NutdbO5wNoFYJy_jBNRXI_X1JTB4F%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1790780399%26allow_ip%3D%26allow_referer%3D%26signature%3DkaDRmlxlHZT9D5EGbjLsrDkYAe8%253D"
  },
  {
    id: 275,
    answer: "509",
    question: "다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `class A {
    int a;
    private int b;
    protected int c;
 
    void set(int aa, int bb, int cc) {
        a = aa;
        b = bb;
        c = cc;
    }
 
    int hap() { return a + b + c; }
}
 
class B extends A {
    public int hap() { return a * c; }
}
 
public class Main {
    public static void main(String[] args) {
        A aaa = new A();
        B bbb = new B();
 
        aaa.set(1, 5, 3);
        bbb.set(10, 30, 50);
 
        System.out.print(aaa.hap() + bbb.hap());
    }
}
`,
    options: null,
    imageUrl: null
  },
  {
    id: 276,
    answer: "28",
    question: "다음은 IP 주소 서브네팅(Subnetting)에 대한 설명이다. 물음에 답하시오.",
    passageOrCode: `10.0.0.0/27 네트워크를 동일한 크기의 2개 서브넷으로 분할하였다.
 
- 첫 번째 서브넷: 10.0.0.0 ~ 10.0.0.15
- 두 번째 서브넷: 10.0.0.16 ~ 10.0.0.31
 
이때 10.0.0.1이 속한 서브넷의 프리픽스 길이(비트 수)를 구하시오.`,
    options: null,
    imageUrl: null
  },
  {
    id: 277,
    answer: "해시",
    alt: "Hash",
    question: "다음 설명에 해당하는 보안 기술 용어를 쓰시오.",
    passageOrCode: `입력값의 길이와 상관없이 항상 정해진 길이의 결과값을 만들어내는 암호 기술이 있다.
 
이 기술은 단방향성을 가지고 있어 결과값만으로는 원래의 입력값을 알아낼 수 없으며, 서로 다른 두 입력값이 같은 결과값을 만들어내는 경우가 최대한 발생하지 않도록 설계되어야 한다.
 
이러한 성질을 가진 암호 기술을 무엇이라 하는가?`,
    options: null,
    imageUrl: null
  },
  {
    id: 278,
    answer: "1",
    question: "다음은 C언어 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
 
int c(int n) {
    if (n <= 1) return n;
    return c(n - 1) + c(n - 3);
}
 
int main() {
    printf("%d", c(5));
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 279,
    answer: "CHECK",
    question: "다음은 SEASON이라는 도메인을 정의하면서, 입력 가능한 값을 봄/여름/가을/겨울로 제한하는 SQL문이다. 괄호 안에 들어갈 알맞은 키워드를 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F3iiFP%2FdJMcagGmJVU%2FAAAAAAAAAAAAAAAAAAAAAJuIYd5Zoos16JeRryLDf36vYRHiZPcPSsFA3NrNwmUP%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1790780399%26allow_ip%3D%26allow_referer%3D%26signature%3D02oexQVYSqDWg53t8AUsh7LyYmw%253D"
  },
  {
    id: 280,
    answer: "제 3정규형",
    alt: "제3정규형",
    question: "아래 표에서 나타나고 있는 정규형을 작성하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FqHioy%2FdJMcaixnbjc%2FAAAAAAAAAAAAAAAAAAAAAGoeHCXF7A6pig90kFsjsgfYTTzutbRh61KrzGVQAXL-%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1790780399%26allow_ip%3D%26allow_referer%3D%26signature%3DJTl6ZpXmqAilGiskYg%252Bc25zLVvo%253D"
  },
]