// 2023년 1회
export const pstData_2023_1 = [
{
    id: 101,
    answer: `10
11
10
20`,
    question: "아래 자바 코드에서 출력되는 값을 순서대로 작성하시오.",
    passageOrCode: `class Static {
    public int a = 20;
    static int b = 0;
}
public class Main {
    public static void main(String[] args) {
        int a;
        a = 10;
        Static.b = a;
        Static st = new Static();
        System.out.println(Static.b++);
        System.out.println(st.b);
        System.out.println(a);
        System.out.print(st.a);
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 102,
    answer: `Art
A
A
Art
Art`,
    question: "다음 C언어의 출력값을 순서대로 작성하시오.",
    passageOrCode: `#include <stdio.h>
int main() {
    char a[] = "Art";
    char* p = NULL;
    p = a;
    printf("%s\
", a);
    printf("%c\
", *p);
    printf("%c\
", *a);
    printf("%s\
", p);
    for (int i = 0; a[i] != '\\0'; i++)
        printf("%c", a[i]);
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 103,
    answer: "qwe",
    question: "다음 C언어 코드의 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
int main() {
    char* a = "qwer";
    char* b = "qwtety";
    for (int i = 0; a[i] != '\\0'; i++) {
        for (int j = 0; b[j] != '\\0'; j++) {
            if (a[i] == b[j])
                printf("%c", a[i]);
        }
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 104,
    answer: "AJAX",
    alt: "Asynchronous JavaScript and XML",
    question: "다음 괄호안에 들어가는 용어의 Full Name 또는 약자를 작성하시오.",
    passageOrCode: `( )은/는 비동기적인 웹 애플리케이션의 제작을 위해 JavaScript와 XML을 이용한 비동기적 정보 교환 기법이다.
( )은/는 필요한 데이터만을 웹서버에 요청해서 받은 후 클라이언트에서 데이터에 대한 처리를 할 수 있다.
보통 SOAP이나 XML 기반의 웹 서비스 프로토콜이 사용되며, 웹 서버의 응답을 처리하기 위해 클라이언트 쪽에서는 자바스크립트를 쓴다.
( )은/는 Google Map과 Google pages에서 사용한 기술에 기반하여 제작되었다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 105,
    answer: "가상 회선 방식 데이터그램 방식",
    question: "보기의 통신 기술(회선교환/데이터그램) 중 가장 적합한 답을 표에 맞게 작성하시오.",
    passageOrCode: `(   )	 - 회선교환 방식과 데이터그램 방식의 장점을 결합한 통신 기술이다.
 - 처음 패킷으로 최적의 경로를 고정하고 경로가 고정되면 그 다음은 패킷으로 나누어 고속으로 전송할 수 있다.
 - 통신기술에는 ATM이 있으며, 정해진 시간 안이나 다량의 데이터를 연속으로 보낼 때 적합하다.
(   )	 - 패킷교환 방식으로 동작하면서 IP 주소를 사용하는 인터넷을 의미한다.
 - 각 전송패킷을 미리 정해진 경로 없이 독립적으로 처리하여 교환하는 방식이다
 - 특정 교환기의 고장 시 모든 패킷을 잃어버리는 가상회선과 달리, 그 경로를 피해서 전송할 수 있으므로 더욱 신뢰가 가능하다.
 - 짧은 메시지의 패킷들을 전송할 때 효과적이고 재정렬 기능이 필요하다.`,
    options: ["회선 교환 방식", "데이터그램 방식", "가상 회선 방식", "메시지 교환 방식"],
    imageUrl: null
  },
  {
    id: 106,
    answer: "L2TP",
    question: "2 계층(데이터링크 계층)에서 구현되는 터널링 기술 중 하나로 L2F와 PPTP가 결합된 프로토콜 이름은?",
    passageOrCode: `2 계층(데이터링크 계층)에서 구현되는 터널링 기술 중 하나
L2F와 PPTP가 결합된 프로토콜로 VPN과 인터넷 서비스 제공자(ISP)가 이용
IPsec을 함께 사용하면 PPTP보다 훨씬 안전하지만 보안보다 익명화에 더 적합`,
    options: null,
    imageUrl: null
  },
  {
    id: 107,
    answer: "SSH",
    alt: "Secure SHell",
    question: "다음 괄호안에 알맞는 용어를 작성하시오. (네트워크 상의 다른 컴퓨터에 원격 로그인/파일 복사 등)",
    passageOrCode: `( ) 네트워크 상의 다른 컴퓨터에 로그인하거나 원격 시스템에서 명령을 실행하고 다른 시스템으로 파일을 복사할 수 있도록 해주는 응용 프로그램 또는 그 프로토콜을 가리킨다.
( ) 보안 접속을 통한 rsh, rcp, rlogin, rexec, telnet, ftp 등을 제공하며, IP spoofing(IP스푸핑) 방지 기능을 제공한다.
( ) 기본적으로 포트는 22번이다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 108,
    answer: "웜 트로이목마 바이러스",
    question: "다음 설명에 해당하는 악성코드의 이름을 표에 맞게 차례로 작성하시오.",
    passageOrCode: `(   1   )
- 감염된 컴퓨터 시스템에서 스스로 복제해 다른 컴퓨터로 복사본을 확산시킬 수 있는 악성 프로그램이다.
- 독자적으로 실행되며 다른 실행 프로그램이 필요하지 않으며, 파일 전송 기능을 착취하도록 설계된다.
- 자가 복제 및 네트워크를 통한 전파도 가능하다.

(    2    )
- 정상적인 프로그램으로 가장해 사용자가 직접 컴퓨터에 설치하도록 위장하며, 백도어를 만들어 공격자가 침입할 수 있도록 만들거나 시스템을 파괴한다.
- 정상적인 프로그램으로 위장하여 시작부터 끝까지 램에 상주하며, 시스템 내부 정보를 공격자의 컴퓨터로 빼돌리는 프로그램이다. 
- 좀비PC처럼 내부정보 유출뿐만 아니라 컨트롤까지 가능한 종류가 있고, 단순히 내부 데이터만 유출할 수 있는 타입의 트로이 목마가 있다.
- 감염된 후에 스스로를 복제하는 능력은 없다.

(    3    )
- 대상(정상파일)을 감염시키는 형태로 실행되며, 감염시킬 대상이 존재하지 않을 때에는 실행되지 않으며 다른정상파일로의 자기 복제 기능이 있다.
- 컴퓨터 시스템에 침입해 프로그램에 기생하며 시스템을 변경하거나 사용할 수 없도록 만드는 악성코드이다.
- 네트워크를 통해 전파되지 않으며 방식 및 위치에 따라 여러형태로 나뉜다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 109,
    answer: "% 10",
    alts: ["% 5", "% 2", "& 1"],
    question: "다음 아래 코드에서 이진수를 십진수로 변환하는 코드에 대해 괄호 (a) (b)의 적합한 답을 작성하시오.",
    passageOrCode: `#include <stdio.h>
int main() {
    int input = 101110;
    int di = 1;
    int sum = 0;
    while (1) {
        if (input == 0)
            break;
        else {
            sum = sum + (input(a)(b)) * di;
            di = di * 2;
            input = input / 10;
        }
    }
    printf("%d", sum);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 110,
    answer: "ICMP",
    question: "다음 보안 관련 설명으로 괄호안에 알맞는 용어를 작성하시오.",
    passageOrCode: `( )은/는 TCP/IP에서 IP 패킷을 처리할 때 발생되는 문제를 알려주는 프로토콜이다.
( ) 프로토콜은 보통 다른 호스트나 게이트웨이 와 연결된 네트웍에 문제가 있는지 확인하기 위한 목적으로 주로 사용된다.
( ) 을/를 이용한 공격에는 ( ) Flooding가 있는데 ping 명령어를 통한 ( ) 패킷을 연속적으로 계속 보내어 서버의 요청에 응답으로 인한 다른작업을 하지 못하도록 하는 공격이다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 111,
    answer: "Proxy",
    question: "다음은 디자인 패턴에 관한 설명이다. 설명에 내용에 알맞는 답을 고르시오.",
    passageOrCode: `- 다른 무언가와 이어지는 인터페이스 역할을 하는 클래스를 의미한다.
- 실제 객체를 호출하면 행위를 중간에 가로채서 다른 동작을 수행하는 객체로 변경한다.
- 객체를 정교하게 제어해야 하거나 객체 참조가 필요한 경우 사용한다.
- 분리된 객체를 위임함으로써 대리 작업을 중간 단계에 삽입할 수도 있으며 분리된 객체를 동적으로 연결함으로써 객체의 실행 시점을 관리할 수도 있다.`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fbyfj0t%2FbtsnqTyczWd%2FAAAAAAAAAAAAAAAAAAAAAJBladwROcVET-LSnQeQ3TFs-nXb866ls51loZPWXxtx%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DzJ2DqqqwKafPs%252FEDl7D2%252FObNl9s%253D"
  },
  {
    id: 112,
    answer: "튜플 릴레이션 인스턴스 카디널리티",
    alt: "Tuple Relation instance Cardinality",
    question: "다음은 데이터베이스에 관련된 내용이다. 각 괄호안에 알맞는 답을 작성하시오.",
    passageOrCode: `(   1   )
- 셀 수 있는 수량의 순서 있는 열거이다.
- 어떤 요소의 집합, 혹은 테이블에서의 행을 가리키지만 일반적인 집합과는 달리 중복이 허용될 수 있다.
- 리스트와 동일하게 여러 객체를 모아서 담으며, 숫자, 문자, 객체, 배열, 튜플 안의 튜플 전부 가능하다.

(   2   )
- 어느 한 시점에 릴레이션의 내용(상태), 즉 저장된 데이터 전체를 의미한다.
- 단순히 릴레이션 또는 릴레이션 외연(Relation Extension)라고도 한다.

(   3   )
- 특정 데이터 집합의 유니크(Unique)한 값의 개수이다.
- 전체 행에 대한 특정 컬럼의 중복 수치를 나타내는 지표이다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 113,
    answer: "delete from 학생 where 이름 = '민수'",
    question: "[학생] 테이블에서 학생 이름이 '민수'인 튜플을 삭제하는 쿼리를 작성하시오.",
    passageOrCode: `조건:
- 컬럼의 값이 문자열일 경우 작은 따움표 (' ')를 표시하시오.
- SQL 마지막에 세미콜론(;)은 표기하지 않아도 관계 없습니다.`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FJZEvh%2FbtscyYpYNA0%2FAAAAAAAAAAAAAAAAAAAAAPxWiytZLXl_AvnAjvyPyHPozz5tQhVgioT4mr6BVOPN%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DADqKsGQmNWKExJWMLQIEKY2SRKw%253D"
  },
  {
    id: 114,
    answer: "idx2 nx",
    question: "다음 코드에서 괄호안에 알맞는 값을 변수명으로 작성하시오.",
    passageOrCode: `public class Sort {
    public static void swap(int[] arr, int idx1, int idx2) {
        int temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[( 1 )] = temp;
    }
    public static void Usort(int[] array, int length) {
        for (int i = 0; i < length; i++) {
            for (int j = 0; j < length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                }
            }
        }
    }
    public static void main(String[] args) {
        int[] item = new int[] { 5, 3, 8, 1, 2, 7 };
        int nx = 6;
        Usort(item, ( 2 ));
        for (int data : item) {
            System.out.print(data + " ");
        }
    }
}`,
    options: ["출력 값 : 1 2 3 5 7 8"],
    imageUrl: null
  },
  {
    id: 115,
    answer: "{'한국', '중국', '베트남', '홍콩', '태국'}",
    alt: "한국 중국 베트남 홍콩 태국",
    question: "다음 파이썬 코드의 알맞는 출력값을 작성하시오.",
    passageOrCode: `a = {'한국', '중국', '일본'}
a.add('베트남')
a.add('중국')
a.remove('일본')
a.update({'홍콩', '한국', '태국'})
print(a)`,
    options: null,
    imageUrl: null
  },
  {
    id: 116,
    answer: "SELECT 과목이름, MIN(점수) AS 최소점수, MAX(점수) AS 최대점수 FROM 성적 GROUP BY 과목이름 HAVING AVG(점수) >= 90",
    question: "다음 성적 테이블에서 과목별 점수의 평균이 90점 이상인 '과목이름', '최소점수', '최대점수' 를 검색하고자 한다. [조건]을 참고하여 적합한 SQL문을 작성하시오.",
    passageOrCode: `조건:
- where사용하지 말하야 한다.
- SELECT절에 별칭을 사용하여 작성해야 한다.
- SQL 구문 마지막에 세미콜론 생락 가능하다.
- 반드시 GROUP BY와 having을 사용해야 한다.
- 집계함수를 사용해야 한다.`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FLMbmY%2FbtscwE6HBbG%2FAAAAAAAAAAAAAAAAAAAAACQfu-V5L2L_mttwY89qgXn9FZFkIB1RvzHXGyZVwD3O%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3Dec%252BZ3B87fNtEBSvVGWsm9cDVQ7U%253D"
  },
  {
    id: 117,
    answer: "Vehicle name: Spark",
    question: "다음 JAVA 코드에서 알맞는 출력 값을 작성하시오.",
    passageOrCode: `abstract class Vehicle {
    String name;
    abstract public String getName(String val);
    public String getName() {
        return "Vehicle name: " + name;
    }
}
class Car extends Vehicle {
    public Car(String val) {
        name = super.name = val;
    }
    public String getName(String val) {
        return "Car name:" + val;
    }
    public String getName(byte val[]) {
        return "Car name:" + val;
    }
}
public class Main {
    public static void main(String[] args) {
        Vehicle obj = new Car("Spark");
        System.out.println(obj.getName());
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 118,
    answer: "외부 개념 내부",
    question: "다음은 스키마와 관련된 내용이다. 각 괄호안에 알맞는 답을 작성하시오.",
    passageOrCode: `(   1   ) 스키마
- 사용자나 응용 프로그래머가 개인의 입장에서 필요한 데이터베이스의 논리적 구조를 정의한다.
- 전체 데이터베이스의 한 논리적인 부분으로 볼 수 있기 때문에 서브 스키마라고도 한다.
- 하나의 데이터베이스 시스템에는 여러 개의 외부 스키마가 존재할 수 있다.
- 하나의 외부 스키마를 여러개의 응용 프로그램 혹은 사용자가 공유할 수 있다.

(   2   ) 스키마
- 데이터베이스의 전체적인 논리적 구조로, 모든 응용 프로그램이나 사용자들이 필요로 하는 데이터를 종합한 조직 전체의 데이터베이스로 하나만 존재한다.
- 개체 간의 관계(Relationship)와 제약 조건을 나타내고 데이터베이스의 접근 권한, 보안 및 무결성 규칙에 관한 명세를 정의한다.
- 데이터베이스 파일에 저장되는 데이터의 형태를 나타내는 것이다.
- 기관이나 조직체의 관점에서 데이터베이스를 정의한 것이다.

(   3   ) 스키마
- 물리적인 저장장치 입장에서 데이터가 저장되는 방법을 기술한 것이다.
- 실제 데이터베이스에 저장될 레코드의 물리적인 구조를 정의한다. 
- 저장 데이터 항목의 표현방법, 내부 레코드의 물리적 순서, 인덱스 유/무 등을 나타낸다.
- 시스템 프로그래머나 시스템 설계자가 관리한다.`,
    options: ["외부", "내부", "개념"],
    imageUrl: null
  },
  {
    id: 119,
    answer: "1234561 124567",
    alt: "1234567 124561",
    question: "다음 아래 제어 흐름 그래프가 분기 커버리지를 만족하기 위한 테스팅 순서를 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbQZ756%2FbtscHlK9JMg%2FAAAAAAAAAAAAAAAAAAAAAJYlzoHgpaOGXnuFTvlefXHygp_lM2p_KxdeixRKwfct%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3D6wpIdksAis21d47crfxLm76p7Po%253D"
  },
  {
    id: 120,
    answer: "500",
    question: "다음 자바 코드에 대한 출력 값을 작성하시오.",
    passageOrCode: `class Parent {
    int x = 100;
    Parent() {
        this(500);
    }
    Parent(int x) {
        this.x = x;
    }
    int getX() {
        return x;
    }
}
class Child extends Parent {
    int x = 4000;
    Child() {
        this(5000);
    }
    Child(int x) {
        this.x = x;
    }
}
public class Main {
    public static void main(String[] args) {
        Child obj = new Child();
        System.out.println(obj.getX());
    }
}`,
    options: null,
    imageUrl: null
  },
];
