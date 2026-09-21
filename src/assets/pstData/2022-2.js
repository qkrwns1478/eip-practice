// 2022년 2회
export const pstData_2022_2 = [
{
    id: 181,
    answer: "관계해석",
    question: "다음은 관계 데이터 모델에 대한 설명이다. 괄호안에 들어가는 용어를 작성하시오.",
    passageOrCode: `( )은 /는 관계 데이터의 연산을 표현하는 방법으로, 원하는 정보를 정의할 때는 계산 수식을 사용한다.
수학의 predicate calculus에 기반을 두고 있으며, 관계 데이터 모델의 제안자인 codd가 수학에 가까운 기반을 두고 특별히 관계 데이터베이스를 위해 제안하여 탄생하였다.
( ) /은/는 원하는 정보가 무엇이라는 것만 정의하는 비절차적 특성을 지니며, 튜블 ( )와/과 도메인 ( ) 이/가 있다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 182,
    answer: "IDEA SKIPJACK",
    question: "다음은 대칭 키 알고리즘에 대한 설명이다. 해당 설명에 맞는 용어를 보기에 골라 작성하시오.",
    passageOrCode: `1. Xuejia Lai와 James Messey 가 만든 알고리즘으로 PES(Proposed Encryption Standard)에서 IPES(Improved PES)로 변경되었다가, 1991년에 제작된 블록 암호 알고리즘으로 현재 국제 데이터 암호화 알고리즘으로 사용되고 있다. 64비트 블록을 128비트의 key를 이용하여 8개의 라운드로 구성되어 있다.
2. 미국의 NSA에서 개발한 Clipper 칩에 내장되는 블록 알고리즘이다. 전화기와 같은 음성을 암호화 하는데 주로 사용되며 64비트 입출력에 80비트의 키 총 32라운드를 가진다.`,
    options: [
      "IDEA",
      "SKIPJACK",
      "DES",
      "AES"
    ],
    imageUrl: null
  },
  {
    id: 183,
    answer: "ALL",
    question: "H회사의 전체 제품 단가 보다 큰 제품 출력을 하고자 한다. 괄호안에 들어갈 알맞는 용어를 작성하시오.",
    passageOrCode: `SELECT 제조사, 제품명, 단가
FROM 제품
WHERE 단가 > ( ) (SELECT 단가 FROM 제품 WHERE 제조사='H')`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbsS2lh%2FbtsCX4ru0Xg%2FAAAAAAAAAAAAAAAAAAAAAOcgsnx9SfGMIWdDsv3pjyb3vUhghOgI5BFzcIgt3Vkb%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3D1XXJbcbg80iRutfvP9hsVEg0sNw%253D"
  },
  {
    id: 184,
    answer: "4",
    question: "다음 SQL 결과에 알맞는 답을 작성하시오.",
    passageOrCode: `SELECT count(col2)
FROM TABLE
WHERE col1 in(2,3) or col2 in(3,5);`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FtgfeI%2FbtsCZgyM9H0%2FAAAAAAAAAAAAAAAAAAAAAAfaSaiHsttAJUuyxzzjIurwV8RwcfTgRK8zF1yNeFdi%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3Dwx%252BwnDusiitrj4woQIJdw0bNRI8%253D"
  },
  {
    id: 185,
    answer: "VPN",
    question: "다음은 네트워크에 관련한 내용이다. 괄호안에 들어갈 알맞는 답을 작성하시오.",
    passageOrCode: `( )은/는 인터넷을 통해 디바이스 간에 사설 네트워크 연결을 생성하며, 퍼블릭 네트워크를 통해 데이터를 안전하게 익명으로 전송하는 데 사용된다.
또한 사용자 IP 주소를 마스킹하고 데이터를 암호화하여 수신 권한이 없는 사람이 읽을 수 없도록 한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 186,
    answer: "ISP",
    question: "다음은 SOLID 원칙에 관한 내용이다. 괄호안에 알맞는 단어를 보기에서 고르시오.",
    passageOrCode: `( ) 은/는 클라이언트가 자신이 이용하지 않는 메서드에 의존하지 않아야 한다는 원칙이다.
( ) 은/는 큰 덩어리의 인터페이스들을 구체적이고 작은 단위들로 분리시킴으로써 클라이언트들이 꼭 필요한 메서드들만 이용할 수 있게 한다.
예를 들어 하나의 복합기에 프린터와 복사기, 팩스 메서드가 있는데 이 세가지 메서드는 같은 파일에 존재하므로 프린터 로직만 바뀌어도 복사기와 팩스도 재컴파일을 해야한다.
그러므로 ( ) 을/를 적용하여 로직이 바뀌어도 다른 메서드는 영향을 받지 않도록 해야한다.`,
    options: [
      "SRP",
      "OCP",
      "LSP",
      "ISP",
      "DIP"
    ],
    imageUrl: null
  },
  {
    id: 187,
    answer: "-8",
    question: "다음 자바 코드에 알맞는 출력값을 작성하시오.",
    passageOrCode: `public static void main(String args[]) {
    int i = 3;
    int k = 1;
    switch (i) {
        case 1: k += 1;
        case 2: k++;
        case 3: k = 0;
        case 4: k += 3;
        case 5: k -= 10;
        default: k--;
    }
    System.out.print(k);
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 188,
    answer: "2",
    question: "다음 소스코드에 대한 출력값을 작성하시오.",
    passageOrCode: `struct A {
    int n, int g
}
int main() {
    A a = new A[2]
    for (i = 0; i < 2; i++) {
        a[i].n = i, a[i].g = i + 1
    }
    System.out.printf(a[0].n + a[1].g);
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 189,
    answer: "128 62",
    question: "IP 주소가 139.127.19.132이고 서브넷마스크 255.255.255.192일 때 아래의 답을 작성하시오. (10진수로 표기)",
    passageOrCode: `(1) 괄호안에 들어갈 네트워크 주소 : 139.127.19.( )
(2) 해당 네트워크 주소와 브로드캐스트 주소를 제외한 호스트 개수`,
    options: null,
    imageUrl: null
  },
  {
    id: 190,
    answer: "베타 알파",
    question: "다음 설명에 대한 괄호안에 알맞는 단어를 작성하시오.",
    passageOrCode: `1. ( ) 테스트는 하드웨어나 소프트웨어의 개발 단계에서 상용화하기 전에 실시하는 제품 검사 작업. 제품의 결함 여부, 제품으로서의 가치 등을 평가하기 위해 실시한다. 선발된 잠재 고객으로 하여금 일정 기간 무료로 사용하게 한 후에 나타난 여러 가지 오류를 수정, 보완한다. 공식적인 제품으로 발매하기 이전에 최종적으로 실시하는 검사 작업이다.
2. ( ) 테스트는 새로운 제품 개발 과정에서 이루어지는 첫 번째 테스트. 즉, 시제품이 운영되는 동안의 신제품 연구와 개발 과정 단계에서 초기 작동의 결과를 평가하는 수단이며 개발 회사 내부에서 이루어지는 테스트로서 단위 테스트, 구성 테스트, 시스템 테스트 등을 포함한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 191,
    answer: "Regression",
    question: "다음 설명에 알맞는 테스트 용어를 보기에서 골라 작성하시오.",
    passageOrCode: `오류를 제거하거나 수정한 시스템이나 시스템 컴포넌트 또는 프로그램이 오류 제거와 수정에 의해 새로이 유입된 오류가 없는지를 확인하는 일종의 반복 시험이다.
반복적인 시험이 필요한 이유는 오류가 제거·수정되는 상당수의 시스템이 의도치 않았던 오동작이나 새로운 형태의 오류를 일으키기 때문이다.
결국, 수정·변경된 시스템이나 시스템 컴포넌트 또는 프로그램이 명세된 요구 사항을 충족시키는지를 확인하는 시험의 한 형태이다.`,
    options: ["Integration", "Big Bang", "System	Acceptance", "Unit", "Regression", "White Box", "Black Box"],
    imageUrl: null
  },
  {
    id: 192,
    answer: "TTL 부장 대리 과장 차장",
    question: "다음 테이블에서 πTTL(employee)에 대한 연산 결과 값을 작성하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FciEqnk%2FbtsC5YDmqrh%2FAAAAAAAAAAAAAAAAAAAAANWPC8whsCRtZTb-RB-J7RHvuEfPLxoxXgJ1I-APFJh1%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DEnnDNF%252FCS%252B6vAFCMXInqhFburpI%253D"
  },
  {
    id: 193,
    answer: "REMEMBER AND STR",
    question: "다음은 파이썬 코드이다. 알맞는 출력값을 작성하시오.",
    passageOrCode: `a = "REMEMBER NOVEMBER"
b = a[:3] + a[12:16];
c = "R AND %s" % "STR";
print(b + c);`,
    options: null,
    imageUrl: null
  },
  {
    id: 194,
    answer: "IGP EGP OSPF BGP",
    question: "경로 제어 프로토콜(Routing Protocol)에 대한 다음 설명에서 괄호(①~④)에 들어갈 알맞은 용어를 보기에서 찾아 쓰시오.",
    passageOrCode: `경로 제어 프로토콜은 크게 자율시스템 내부의 라우팅에 사용되는 (  ①  )와 자율 시스템간의 라우팅에 사용되는 (  ②  )로 구분할 수 있다.
(  ①  )는 소규모 동종 자율 시스템에서 효율적인 RIP와 대규모 자유 시스템에서 많이 사용되는 (  ③  )로 나누어진다.
(  ③  )는 링크 상태(Link State)를 실시간으로 반영하여 최단 경로로 라우팅을 지원하는 특징이 있다.
(  ④  )는 (  ②  )의 단점을 보완하여 만들어진 라우팅 프로토콜로, 처음 연결될 때는 전체 라우팅 테이블을 교환하고, 이후에는 변화된 정보만을 교환한다.`,
    options: ["BGP", "AS", "HOP", "OSPF", "NAT", "ISP", "EGP", "IGP"],
    imageUrl: null
  },
  {
    id: 195,
    answer: "10",
    question: "다음 C언어에서 출력에 대한 알맞은 답을 작성하시오.",
    passageOrCode: `#include <stdio.h>
int len(char* p);
int main() {
    char* p1 = "2022";
    char* p2 = "202207";
    int a = len(p1);
    int b = len(p2);
    printf("%d", a + b);
}
int len(char* p) {
    int r = 0;
    while (*p != '\\0') {
        p++;
        r++;
    }
    return r;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 196,
    answer: "22",
    question: "다음 C언어 코드에서 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
int main(int argc, char* argv[]) {
    int a[4] = { 0, 2, 4, 8 };
    int b[3] = {};
    int i = 1;
    int sum = 0;
    int* p1;
    for (i; i < 4; i++) {
        p1 = a + i;
        b[i - 1] = *p1 - a[i - 1];
        sum = sum + b[i - 1] + a[i];
    }
    printf("%d", sum);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 197,
    answer: "56",
    question: "다음 자바코드에서 알맞는 출력값을 작성하시오.",
    passageOrCode: `public class Conv {
    public Conv(int a) {
        this.a = a;
    }
    int func() {
        int b = 1;
        for (int i = 1; i < a; i++) {
            b = a * i + b;
        }
        return a + b;
    }
    int a;
}
public static void main(String[] args) {
    Conv obj = new Conv(3);
    obj.a = 5;
    int b = obj.func();
    system.out.print(obj.a + b);
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 198,
    answer: "ㄹ ㅇ ㄷ",
    alt: "Full Partial Transitive",
    question: "다음은 함수 종속성에 대한 설명이다. 해당 문제에 대한 알맞는 답을 보기에서 골라 작성하시오.",
    passageOrCode: `1. 성적은 {학생,학과}에 대해서 ( ) Functional Dependency이다.
2. 성적은 학과만 알아도 식별이 가능하므로, 이 경우에는 성적 속성은 기본키에 ( ) Functional Dependency이다.
3. 릴레이션에서 X, Y, Z라는 3 개의 속성이 있을 때 X→Y, Y→Z 이란 종속 관계가 있을 경우, X→Z가 성립될 경우`,
    options: ["ㄱ. Hybrid", "ㄴ. Multi Valued", "ㄷ. Transitive", "ㄹ. Full", "ㅁ. Defined", "ㅂ. Natural", "ㅅ. Relational", "ㅇ. Partial"],
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FdwxbKs%2FbtsCVHKbX1G%2FAAAAAAAAAAAAAAAAAAAAAHpCevhbn5bkhzNeFabt-jk3O783zzgyvzFhP7_jj8cj%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DrzzwmHq3ZFruYd3TIycGbD11jGc%253D"
  },
  {
    id: 199,
    answer: "HTTP Hypertext HTML",
    question: "다음 설명에 대한 알맞는 답을 보기에서 고르시오.",
    passageOrCode: `1. 인터넷에서, 웹 서버와 사용자의 인터넷 브라우저 사이에 문서를 전송하기 위해 사용되는 통신 규약을 말한다. 인터넷에서 하이퍼텍스트(hypertext) 문서를 교환하기 위하여 사용되는 통신규약이다. 이 규약에 맞춰 개발해서 서로 정보를 교환할 수 있게 되었다.
2. 문자, 그래픽, 음성 및 영상을 하나의 연상 거미집(Web of Association)과 같이 서로 연결시켜, 제시된 순서에 관계없이 이용자가 관련된 정보를 검색할 수 있도록 하는 정보 제공 방법이다. 즉, 한 페이지에서 링크된 순서에 상관없이 사용자들이 원하는 정보에 쉽게 접근하는 방식을 말한다.
3. 웹 페이지 표시를 위해 개발된 지배적인 마크업 언어다. 또한, 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다.`,
    options: ["UDDI", "XML", "WSDL", "Hypertext", "DHTML", "HTML", "SOAP", "HTTP"],
    imageUrl: null
  },
  {
    id: 200,
    answer: "3 2",
    question: "다음 모듈 F에 대한 Fan-in과 Fan-out을 작성하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F7rUn8%2FbtsC2xTZYee%2FAAAAAAAAAAAAAAAAAAAAAJHQ82vln75ifQ37NX2AnUI06OIwV9ReHhjfS-_HA0iL%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3Dux67MHR4Ub4qldz0t91HiVcwszk%253D"
  },
];
