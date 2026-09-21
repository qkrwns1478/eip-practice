// 2023년 3회
export const pstData_2023_3 = [
{
    id: 141,
    answer: "BDCDD",
    question: "다음은 Java 코드이다. 올바른 출력 결과를 작성하시오.",
    passageOrCode: `public class main {
    public static void main(String[] args) {
        A b = new B();
        b.paint();
        b.draw();
    }
}
class A {
    public void paint() {
        System.out.print("A");
        draw();
    }
    public void draw() {
        System.out.print("B");
        draw();
    }
}
class B extends A {
    public void paint() {
        super.draw();
        System.out.print("C");
        this.draw();
    }
    public void draw() {
        System.out.print("D");
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 142,
    answer: "ㅇ",
    alt: "OAuth",
    question: "다음 설명하는 용어를 보기에 맞게 골라 기호를 작성하시오.",
    passageOrCode: `- 사용자가 사용자 이름 및 암호와 같은 자격 증명을 공유하지 않고도 타사 애플리케이션이 데이터 또는 리소스에 액세스할 수 있도록 권한을 부여할 수 있는 개방형 표준 프로토콜이다.
- 사용자가 데이터에 대한 제어를 유지하면서 리소스에 대한 액세스 권한을 부여할 수 있는 안전하고 표준화된 방법을 제공하며, 액세스 토큰을 사용하여 타사 애플리케이션에 리소스에 대한 액세스 권한을 부여하는 메커니즘을 사용자에게 제공하는 방식으로 작동한다.
- 사용자가 응용 프로그램에 대한 액세스 권한을 부여하면 응용 프로그램은 사용자를 대신하여 사용자의 리소스 또는 데이터에 액세스하는 데 사용할 수 있는 액세스 토큰을 받는다.
- 암호와 같은 사용자의 자격 증명은 타사 응용 프로그램과 공유되지 않으며, 클라우드 스토리지 서비스, 온라인 마켓 플레이스 및 금융 서비스를 포함한 다른 많은 응용 프로그램 및 서비스에서도 사용된다.
- Facebook, Twitter 및 LinkedIn과 같은 소셜 미디어 플랫폼에서 널리 사용되어 사용자가 소셜 미디어 데이터에 대한 액세스 권한을 타사 애플리케이션에 부여할 수 있도록 한다.
- 타사 애플리케이션에 대한 사용자 자격 증명의 노출을 최소화하여 향상된 보안, 간소화된 애플리케이션 개발, 사용자가 리소스에 대한 액세스 권한을 쉽게 부여하거나 취소할 수 있도록 하여 향상된 사용자 환경 등 여러 가지 이점을 제공한다.`,
    options: [
      "ㄱ.NFT",
      "ㄴ.JWT",
      "ㄷ.SAML",
      "ㄹ.accessToken",
      "ㅁ.SSO",
      "ㅂ.OIDC",
      "ㅅ.Autentication",
      "ㅇ. OAuth",
      "ㅈ.Cookie",
      "ㅊ.Refresh Token"
    ],
    imageUrl: null
  },
  {
    id: 143,
    answer: "chmod 751",
    question: "리눅스(Linux)에서 사용자에게 읽기/쓰기/실행 권한을 부여하고, 그룹에게는 읽기/실행을 부여하고, 그 이외에는 실행 권한을 test.txt 파일에 부여하는 위한 명령어는 다음과 같다. 빈칸에 들어갈 답을 작성하시오. (8진법 사용)",
    passageOrCode: "( (1) ) ( (2) ) test.txt",
    options: null,
    imageUrl: null
  },
  {
    id: 144,
    answer: "34",
    question: "다음은 C언어 코드이다. 알맞는 출력 결과를 작성하시오.",
    passageOrCode: `#include <stdio.h>
int test(int n) {
    int i, sum = 0;
    for (i = 1; i <= n / 2; i++) {
        if (n % i == 0)
            sum += i;
    }
    if (n == sum)
        return 1;
    return 0;
}
int main() {
    int i, sum = 0;
    for (i = 2; i <= 100; i++) {
        if (test(i))
            sum += i;
    }
    printf("%d ", sum);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 145,
    answer: "->",
    question: "C언어에서 구조체의 멤버에 접근하기 위해 괄호안의 기호를 작성하시오.",
    passageOrCode: `#include <stdio.h>
#include <stdlib.h>
typedef struct Data {
    char c;
    int* numPtr;
} Data;
int main() {
    int num = 10;
    Data d1;
    Data* d2 = malloc(sizeof(struct Data));
    d1.numPtr = &num; // # 기호 대신 &num으로 수정 (문맥상)
    d2( ) numPtr = &num; // # 기호 대신 &num으로 수정 (문맥상)
    printf("%d\
", *d1.numPtr);
    printf("%d\
", *d2( ) numPtr);
    free(d2);
    return 0;
}`,
    options: [`출력결과:
10
10`],
    imageUrl: null
  },
  {
    id: 146,
    answer: `4 3 2 1`,
    question: "다음 빈칸에 들어갈 UNION 연산의 결과값을 작성하시오.",
    passageOrCode: `[테이블]
T1: 3, 1, 4
T2: 2, 4, 3

[쿼리]
SELECT * FROM T1 UNION SELECT * FROM T2`,
    options: null,
    imageUrl: null
  },
  {
    id: 147,
    answer: "MAC RBAC DAC",
    question: "다음 설명은 서버 접근 통제의 유형이다. 괄호 안에 들어갈 용어를 작성하시오. (영어 약자로 작성하시오.)",
    passageOrCode: `- ( (1) )은/는 규칙 기반(Rule-Based) 접근통제 정책으로, 객체에 포함된 정보의 허용 등급과 접근 정보에 대하여 주체가 갖는 접근 허가 권한에 근거하여 객체에 대한 접근을 제한하는 방법이다.
- ( (2) )은/는 중앙 관리자가 사용자와 시스템의 상호관계를 통제하며 조직 내 맡은 역할(Role)에 기초하여 자원에 대한 접근을 제한하는 방법이다.
- ( (3) )은/는 신분 기반(Identity-Based) 접근통제 정책으로, 주체나 그룹의 신분에 근거하여 객체에 대한 접근을 제한하는 방법이다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 148,
    answer: "5040",
    question: "다음 C언어 코드에 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
int f(int n) {
    if (n <= 1)
        return 1;
    else
        return n * f(n - 1);
}
int main() {
    printf("%d", f(7));
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 149,
    answer: "ATM",
    question: "다음 설명에 대해 괄호 안에 알맞는 용어를 작성하시오. (영어 약자로 작성하시오.)",
    passageOrCode: `- ( )은/는 자료를 일정한 크기로 정하여 순서대로 전송하는 자료의 전송 방식이다.
- 셀이라 부르는 고정 길이 패킷을 이용하여 처리가 단순하고 고속망에 적합하며, 연속적으로 셀을 보낼 때 다중화를 하지 않고 셀단위로 동기가 이루어지지만 경우에 따라 동기식 시간 분할 다중화를 사용하기도 한다.
- 가상 채널 (Virtual Channel) 기반의 연결 지향 서비스로 셀이라 부르는 고정 길이(53바이트) 패킷을 사용하며 통계적 다중화 방식을 이용한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 150,
    answer: `KOREA
OREA
K
E
O`,
    question: "다음은 C언어의 포인터 문제이다. 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
int main() {
    char* p = "KOREA";
    printf("%s\
", p);
    printf("%s\
", p + 1);
    printf("%c\
", *p);
    printf("%c\
", *(p + 3));
    printf("%c\
", *p + 4);
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 151,
    answer: "2",
    question: "다음은 Java 코드에 대한 알맞는 출력값을 작성하시오.",
    passageOrCode: `class Parent {
    int compute(int num) {
        if (num <= 1)
            return num;
        return compute(num - 1) + compute(num - 2);
    }
}
class Child extends Parent {
    int compute(int num) {
        if (num <= 1)
            return num;
        return compute(num - 1) + compute(num - 3);
    }
}
public class main {
    public static void main(String args[]) {
        Parent obj = new Child();
        System.out.print(obj.compute(7));
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 152,
    answer: "NAT",
    alt: "Network Address Transformation",
    question: "IP 패킷에서 외부의 공인 IP주소와 포트 주소에 해당하는 내부 IP주소를 재기록하여 라우터를 통해 네트워크 트래픽을 주고받는 기술은 무엇인가?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 153,
    answer: "7",
    question: "다음 자바 코드를 실행할 경우 에러가 발생이 된다. 에러가 발생하는 라인명을 작성하시오.",
    passageOrCode: `class Person {
    private String name;
    public Person(String val) {
        name = val;
    }
    public static String get() {
        return name;
    }
    public void print() {
        System.out.println(name);
    }
}
public class main {
    public static void main(String[] args) {
        Person obj = new Person("Kim");
        obj.print();
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 154,
    answer: "split",
    question: "다음은 파이썬에 대한 문제이다. 밑줄친 부분에 알맞는 답을 작성하시오.",
    passageOrCode: `print("파이썬 입출력에 대한 문제입니다.")
num1, num2 = input().___()
num1 = int(num1)
num2 = int(num2)
print(num1, num2)
num3 = num1 + num2
print(num1 + " + " + num2 + " = " + num3)`,
    options: ["입력값은 2와 3이다.", `출력화면:
파이썬 입력출에 대한 문제입니다.
2 3
2 + 3 = 5`],
    imageUrl: null
  },
  {
    id: 155,
    answer: "Package",
    alt: "패키지",
    question: "다음은 판매와 관련된 다이어그램이다. 해당 다이어그램의 명칭을 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FG17fg%2FbtsDs2rLh1k%2FAAAAAAAAAAAAAAAAAAAAAEzsNevCGXIAmmZEVFohw79sXzdlfZnUxEWidCJMTCRJ%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3D4rqV0XZEfWAw70LrvH8%252FLBlO3v4%253D"
  },
  {
    id: 156,
    answer: "ㄱ",
    alt: "Equivalence Partitioning",
    question: "다음 설명에 알맞는 답을 보기에서 골라 작성하시오.",
    passageOrCode: `- 시스템이나 시스템 구성요소(component) 또는 소프트웨어 프로그램의 입력값과 출력값이 특정 그룹으로 분류되며, 분류된 그룹내의 값들이 시스템에 의해 동일하게 취급된다는 특성을 이용하여 시험하는 기법
- 유사한 입력값들이 시스템을 거치면서 유사한 답변이 나온다는 것을 가정하여 테스트
- 하나의 값은 그 분할 내 모든 값을 대표하는 것으로 간주하는 기법
- 모든 입력값을 시험할 필요가 없게 하여 시험을 효율적으로 수행하도록 지원
- 일반적으로 경계값 분석기법(boundary value analysis)과 함께 테스트 케이스 도출하는데 사용`,
    options: [
      "ㄱ.Equivalence Partitioning",
      "ㄴ.Statement Coverage",
      "ㄷ.Boundary Value Analy",
      "ㄹ.Branch Coverage",
      "ㅁ.Error Guessing",
      "ㅂ.Condition Coverage",
      "ㅅ.Cause Effect Graph"
    ],
    imageUrl: null
  },
  {
    id: 157,
    answer: "IaaS PaaS SaaS",
    question: "다음은 클라우드에 대한 유형 문제이다. 괄호안에 알맞는 답을 보기에 골라 작성하시오.",
    passageOrCode: `(1) 인프라형 서비스 - 서버, 스토리지 등의 IT 인프라를 제공
(2) 플랫폼형 서비스 - 개발 환경을 서비스로 제공
(3) 소프트웨어형 서비스 - 소프트웨어를 서비스로 제공`,
    options: [
      "PaaS",
      "SaaS",
      "IaaS"
    ],
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbgV3Dv%2FbtsDxjzXlXL%2FAAAAAAAAAAAAAAAAAAAAAO1vPFE8OwX5WjtRdf3rKwQojSeV57tJwEDkKca4r2_i%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DcK4Iygs3smzKLzCDMsKo9fQFRCg%253D"
  },
  {
    id: 158,
    answer: "RIP",
    question: "다음은 프로토콜 종류에 관한 설명이다. 알맞는 답을 작성하시오.",
    passageOrCode: `- 최소 Hop count를 파악하여 라우팅하는 프로토콜이다.
- 거리와 방향으로 길을 찾아가는 Distance Vector 다이나믹 프로토콜이다.
- 최단거리 즉, Hop count가 적은 경로를 택하여 라우팅하는 프로토콜로 Routing Table에 인접 라우터 정보를 저장하여 경로를 결정한다.
- 최대 Hop count는 15로 거리가 짧기 때문에 IGP로 많이 이용하는 프로토콜이다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 159,
    answer: "ㄷ ㄴ ㄱ ㄹ",
    question: "다음은 관계 대수에 대한 내용이다. 보기에 알맞는 기호를 작성하시오.",
    passageOrCode: `1. join : ( 1 )
2. project : ( 2 )
3. select : ( 3 )
4. division : ( 4 )`,
    options: [
      "ㄱ. σ",
      "ㄴ. π",
      "ㄷ. ⋈",
      "ㄹ. ÷"
    ],
    imageUrl: null
  },
  {
    id: 160,
    answer: "참조",
    question: "다음은 데이터베이스에 관련된 문제이다. 괄호 안에 알맞는 답을 작성하시오.",
    passageOrCode: `- ( ) 무결성은 관계 데이터베이스 관계 모델에서 2개의 관련 있던 관계 변수(테이블) 간의 일관성(데이터 무결성)을 말한다.
- 종종 기본 키 또는 키가 아닌 후보 키와 외래 키의 조합으로 강제 적용된다.
- 외래 키가 선언된 관계 변수의 외래 키를 구성하는 속성(열)의 값은 그 관계 변수의 부모가 되는 관계 변수의 기본 키 값 또는 기본 키가 아닌 후보 키 값으로 존재해야 한다.`,
    options: null,
    imageUrl: null
  },
];
