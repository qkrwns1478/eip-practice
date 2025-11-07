export const pstData = [
/* 2025년 1회 */
  {
    id: 1,
    answer: "세션 하이재킹",
    question: "다음은 네트워크 보완에 관련된 문제이다. 괄호안에 알맞는 용어를 작성하시오.",
    passageOrCode: `(   )은/는 '세션을 가로채다.' 라는 의미로 다른 사람의 세션 상태를 훔치거나 도용하여 액세스하는 해킹 기법이다.
TCP (   )은/는 TCP의 3-way 핸드셰이크가 완료된 후에 공격자가 시퀀스 번호 등을 조작하여 정상적인 세션을 가로채고 인증 없이 통신을 탈취하는 공격 공격이다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 2,
    answer: "도메인 개체 참조",
    question: "다음은 제약조건과 관련된 문제이다. 괄호안에 알맞는 용어를 보기에 골라 작성하시오.",
    passageOrCode: null,
    options: ["개체, 참조, 도메인"],
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FzQKG3%2FbtsNAiF6b8L%2FAAAAAAAAAAAAAAAAAAAAAEa_W4EUTDLlkXQKJW6z5pdQtR8cuby6AE9Gn06UIVEM%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DbWxVVvPW%252FsJMA2rKIGgpGk9bPs0%253D"
  },
  {
    id: 3,
    answer: "CRC",
    question: "아래의 내용에서 설명 글의 괄호안의 용어를 영문 약자로 작성하시오.",
    passageOrCode: `(        ) 은/는 3글자의 영어 약자로 이루어진 오류 기법으로 데이터를 전송하거나 저장할 때 데이터의 오류를 감지하는 데 사용되는 오류 검출 코드이다.
(        ) 은/는 데이터에 체크섬을 추가하여 데이터를 전송하거나 저장한 후, 수신 또는 읽을 때 이 체크섬을 다시 계산하여 데이터가 변경되었는지 확인하는 기법이다.
(        ) 은/는 데이터 전송의 안정성을 높이는 데 중요한 역할을 한다.
데이터는 이진수(0과 1)로 표현되며 정해진 다항식(x³ + x + 1)을 기반으로 데이터를 2진수 나눗셈하고나머지를 (       ) 값으로 삼는다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 4,
    answer: "ㄹ",
    alt: "스캐어 웨어",
    question: "다음은 악성코드 관련된 문제이다. 아래 내용을 확인하여 보기에 골라 작성하시오.",
    passageOrCode: `사용자가 원치 않는 소프트웨어를 구매하도록 조작하기 위해 사회 공학을 사용하여 충격, 불안 또는 위협에 대한 인식을 유발하는 악성 소프트웨어의 한 형태이다.
‘겁을 주다’라는 영어 단어에서 유래한 것으로 공포를 이용하여 피해자를 속여 대가를 지불 하거나 특정 행동을 유도하는 랜섬웨어이다.
가짜 바이러스 경고나 시스템 문제를 표시하여 사용자가 돈을 지불하거나 특정 소프트웨어를 설치하도록 속이는 방식으로 작동한다. `,
    options: ["ㄱ. 컴포넌트 웨어", "ㄴ. 유즈웨어", "ㄷ. 셔블웨어", "ㄹ. 스캐어 웨어", "ㅁ. 안티 스파이 웨어", "ㅂ. 네트웨어", "ㅅ. 그룹웨어", "ㅇ. 애드웨어"],
    imageUrl: null
  },
  {
    id: 5,
    answer: "출력1출력5",
    question: "다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `public class Main {
  public static void main(String[] args) {
    int a=5, b=0;
    try{
      System.out.print(a/b);
    }catch(ArithmeticException e){
      System.out.print("출력1");
    }catch(ArrayIndexOutOfBoundsException e) {
      System.out.print("출력2");
    }catch(NumberFormatException e) {
      System.out.print("출력3");
    }catch(Exception e){
      System.out.print("출력4");
    }finally{
      System.out.print("출력5");
    }
  }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 6,
    answer: "ARP RARP",
    question: "아래 내용은 ARP/RARP에 대한 설명이다. 각 설명에 해당하는 것을 작성하시오.",
    passageOrCode: `( 1 ) 은/는 네트워크상에서 IP 주소를 MAC 주소로 변환하는 프로토콜이고,
( 2 ) 은/는 MAC 주소를 IP 주소로 변환하는 프로토콜이다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 7,
    answer: `name incentives
이순신 1000`,
    question: "다음은 SQL 문제이다. 아래 두 테이블을 참고하여 보기에 쿼리 실행 결과를 작성하시오.",
    passageOrCode: null,
    options: ["SELECT name, incentive FROM emp, sal WHERE emp.id = sal.id and incentives >= 500"],
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FF7Tnq%2FbtsNzZtANQz%2FAAAAAAAAAAAAAAAAAAAAAK1cx-4kJpaMoUmRFCPQDT5G_pIphsY5oeoaQzKY76x6%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DzObUsPIpNfVaWaVe2Nje9wI%252FbGU%253D"
  },
  {
    id: 8,
    answer: "ㄷ ㅁ ㅅ ㄱ",
    alt: "degree cardinality foreign domain",
    question: "아래는 데이터베이스에 관련된 설명이다. 알맞는 용어를 보기에서 골라 괄호를 작성하시오.",
    passageOrCode: `1. 릴레이션에서 속성의 개수를 의미 : ( 1 )
2. 릴레이션에서 튜플의 개수를 의미 : ( 2 )
3. 한 릴레이션의 속상이 다른 릴레이션의 기본 키를 참조할 때, 참조하는 속성을 의미 : ( 3 )
4. 특정 속성에 대해 입력될 수 있는 값의 유형이나 범위를 의미하고 무결성을 보장하는 기준 : ( 4 )`,
    options: ["ㄱ. domain", "ㄴ. primary", "ㄷ. degree", "ㄹ. candidate", "ㅁ. cardinality", "ㅂ. attribute", "ㅅ. foreign"],
    imageUrl: null
  },
  {
    id: 9,
    answer: "ㄱ ㄴ ㄷ ㄹ ㅁ",
    question: "IP 주소가 192.168.35.10, 서브넷 255.255.252.0인 PC에서 브로드캐스팅으로 다른 IP로 정보를 전달한다고 할 때 수신할 수 있는 알맞는 IP를 보기에서 골라 모두 작성하시오.",
    passageOrCode: null,
    options: ["ㄱ. 192.168.34.1", "ㄴ. 192.168.32.19", "ㄷ. 192.168.35.200", "ㄹ. 192.168.33.138", "ㅁ. 192.168.35.50"],
    imageUrl: null
  },
  {
    id: 10,
    answer: `4
BACDE`,
    question: "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
char Data[5] = {'B', 'A', 'D', 'E'};
char c;
 
int main(){
    int i, temp, temp2;
 
    c = 'C';
    printf("%d\n", Data[3]-Data[1]);
 
    for(i=0;i<5;++i){
        if(Data[i]>c)
            break;
    }
 
    temp = Data[i];
    Data[i] = c;
    i++;
 
    for(;i<5;++i){
        temp2 = Data[i];
        Data[i] = temp;
        temp = temp2;
    }
 
    for(i=0;i<5;i++){
        printf("%c", Data[i]);
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 11,
    answer: "13",
    question: "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
#include <stdlib.h>
 
void set(int** arr, int* data, int rows, int cols) {
    for (int i = 0; i < rows * cols; ++i) {
        arr[((i + 1) / rows) % rows][(i + 1) % cols] = data[i];
    }
}
 
int main() {
    int rows = 3, cols = 3, sum = 0;
    int data[] = {5, 2, 7, 4, 1, 8, 3, 6, 9}; 
    int** arr;
    arr = (int**) malloc(sizeof(int*) * rows);
    for (int i = 0; i < cols; i++) {
        arr[i] = (int*) malloc(sizeof(int) * cols);
    }
 
    set(arr, data, rows, cols);
 
    for (int i = 0; i < rows * cols; i++) {
        sum += arr[i / rows][i % cols] * (i % 2 == 0 ? 1 : -1);
    }
 
    for(int i=0; i<rows; i++) {
        free(arr[i]);
    }
    free(arr);
 
    printf("%d", sum);
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 12,
    answer: "ㅁ ㄴ ㄹ",
    alt: "내용 결합도 스탬프 결합도 공통 결합도",
    question: "다음은 결합도와 관련된 내용이다. 보기에 알맞는 답을 골라 작성하시오.",
    passageOrCode: `(1) 다른 모듈 내부에 있는 변수나 기능을 다른 모듈에서 사용하는 경우의 결합도
(2) 모듈 간의 인터페이스로 배열이나 오브젝트, 자료구조 등이 전달되는 경우의 결합도
(3) 파라미터가 아닌 모듈 밖에 선언되어 있는 전역 변수를 참조하고 전역 변수를 갱신하는 식으로 상호작용하는 경우의 결합도`,
    options: ["ㄱ. 자료 결합도", "ㄴ. 스탬프 결합도", "ㄷ. 제어 결합도", "ㄹ. 공통 결합도", "ㅁ. 내용 결합도", "ㅂ. 외부 결합도"],
    imageUrl: null
  },
  {
    id: 13,
    answer: "54",
    question: "다음은 Java언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `public class Main {
    public static void main(String[] args) {
        new Child();
        System.out.println(Parent.total);
    }
}
 
class Parent {
    static int total = 0;
    int v = 1;
 
    public Parent() {
        total += (++v);
        show();    
    }
 
    public void show() {
        total += total;
    }
}
 
class Child extends Parent {
    int v = 10;
 
    public Child() {
        v += 2;
        total += v++;
        show();
    }
 
    @Override
    public void show() {
        total += total * 2;
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 14,
    answer: "Adapter",
    question: "아래는 디자인 패턴에 대한 설명이다. 알맞는 답을 보기에 골라 작성하시오.",
    passageOrCode: `서로 다른 인터페이스를 가진 클래스들을 연결해 사용 가능하게 한다.
기존 클래스(Adaptee)를 원하는 인터페이스(Target)에 맞게 변환하는 어댑터(Adapter)를 만든다.
기존 클래스를 감싸서(wrapper) 인터페이스를 변환해주는 역할을 한다.`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FoCM2H%2FbtsNzMAY2Vl%2FAAAAAAAAAAAAAAAAAAAAAI7nU4pEShdC4QU1bezXWzN8QaWWxsCQJI6lxs7fAj-m%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DZIsfF25Gq33ZthNcfBA6sMOQ42I%253D"
  },
  {
    id: 15,
    answer: `int a = 0
a < m || b[a] < x
b[a] < 0
b[a] = -b[a]
a++
return 1
3 → 4 → 5 → 2 → 6`,
    question: "문장(Statement) 커버리지 테스트를 수행하려고 한다. 코드를 아래의 제어 흐름도 빈칸에 연결되도록 작성하고 문장 커버리지 순서대로 작성하시오.",
    passageOrCode: `int Main(int b[], int m, int x) {
    int a = 0;
    while (a < m || b[a] < x) {
        if (b[a] < 0)
            b[a] = -b[a];
        a++;
    }
    return 1;
}`,
    options: ["1. (    ①    ) 2. (    ②    ) 3. (    ③    ) 4. (    ④    ) 5. (    ⑤    ) 6. (    ⑥    )", "문장 커버리지 순서 1 → 2  → (          ⑦           )"],
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FdK8Uvu%2FbtsNBHY9xSO%2FAAAAAAAAAAAAAAAAAAAAALKBOe-hfTV3FscLa7xdAqX4hNMqJ41TcqTsgB1SHIEc%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DUFtMWaT11HXauGdMXgVIspgc%252BIA%253D"
  },
  {
    id: 16,
    answer: "20",
    question: "다음은 Java언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `public class Main {
 
    public static void main(String[] args) {
        int[] data = {3, 5, 8, 12, 17};
        System.out.println(func(data, 0, data.length - 1));
    }
 
    static int func(int[] a, int st, int end) {
        if (st >= end) return 0;
        int mid = (st + end) / 2;
        return a[mid] + Math.max(func(a, st, mid), func(a, mid + 1, end));
    } 
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 17,
    answer: "13",
    question: "다음은 파이썬에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `class Node:
    def __init__(self, value):
        self.value = value
        self.children = []
 
def tree(li):
    nodes = [Node(i) for i in li]
    for i in range(1, len(li)):
        nodes[(i - 1) // 2].children.append(nodes[i])
    return nodes[0]
 
def calc(node, level=0):
    if node is None:
        return 0
    return (node.value if level % 2 == 1 else 0) + sum(calc(n, level + 1) for n in node.children)
 
li = [3, 5, 8, 12, 15, 18, 21]
 
root = tree(li)
 
print(calc(root))`,
    options: null,
    imageUrl: null
  },
  {
    id: 18,
    answer: "35421",
    question: "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>   
#include <stdlib.h>  
 
typedef struct Data {
    int value;
    struct Data *next;
} Data;
 
Data* insert(Data* head, int value) {
    Data* new_node = (Data*)malloc(sizeof(Data));
    new_node->value = value;
    new_node->next = head;
    return new_node;
}
 
Data* reconnect(Data* head, int value) {
    if (head == NULL || head->value == value) return head;
    Data *prev = NULL, *curr = head;
    while (curr != NULL && curr->value != value) {
        prev = curr;
        curr = curr->next;
    }
 
    if (curr != NULL && prev != NULL) {
        prev->next = curr->next;
        curr->next = head;
        head = curr;
    }
    return head;
}
 
int main() {
    Data *head = NULL, *curr;
    for (int i = 1; i <= 5; i++)
        head = insert(head, i);
    head = reconnect(head, 3);
    for (curr = head; curr != NULL; curr = curr->next)
        printf("%d", curr->value);
    return 0; 
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 19,
    answer: "908",
    question: "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
 
typedef struct student {
    char* name;
    int score[3];
} Student;
 
int dec(int enc) {
    return enc & 0xA5;
}
 
int sum(Student* p) {
    return dec(p->score[0]) + dec(p->score[1]) + dec(p->score[2]);
}
 
int main() {
    Student s[2] = { "Kim", {0xA0, 0xA5, 0xDB}, "Lee", {0xA0, 0xED, 0x81} };
    Student* p = s;
    int result = 0;
 
    for (int i = 0; i < 2; i++) {
        result += sum(&s[i]);
    }
    printf("%d", result);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 20,
    answer: "4",
    question: "다음은 Java언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `public class Main {
  public static void main(String[] args) {
    System.out.println(calc("5"));
  }
 
  static int calc(int value) {
    if (value <= 1) return value;
    return calc(value - 1) + calc(value - 2);
  }
 
  static int calc(String str) {
    int value = Integer.valueOf(str);
    if (value <= 1) return value;
    return calc(value - 1) + calc(value - 3);
  }
}`,
    options: null,
    imageUrl: null
  },
/* 2025년 2회 */
  {
    id: 21,
    answer: "인덱스",
    alt: "색인",
    question: "다음은 파일 구조와 관련된 설명이다. 설명을 읽고 괄호 안에 들어갈 가장 알맞은 용어를 작성하시오.",
    passageOrCode: `데이터베이스의 물리 설계 시, 레코드에 접근하는 방법은 순차 접근 방법, [   ] 방법, 해싱 방법 등이 있다.
이 중 [   ] 방법은 레코드의 키 값과 포인터를 쌍으로 묶어 저장하며 검색 시 키 값을 기준으로 빠르게 탐색할 수 있도록 설계되어 있다.
이 방식은 검색 속도가 빠르며 <키 값, 포인터> 쌍으로 구성된 자료 구조를 사용하여 해당 키가 가리키는 주소를 통해 원하는 레코드를 직접 찾을 수 있다.`,
    options: ["순차 접근:	레코드를 처음부터 하나씩 검사", "[   ] 접근: 키-값 쌍으로 구성되어 빠르게 검색", "해싱 접근: 해시 함수를 이용해 직접 주소 계산 후 접근"],
    imageUrl: null
  },
  {
    id: 22,
    answer: "ㄷ",
    alt:"Attribute",
    question: "다음은 데이터베이스 릴레이션의 구성 요소 중 하나에 대한 설명이다. 설명을 읽고 보기에서 알맞은 기호를 골라 작성하시오.",
    passageOrCode: `릴레이션(Relation)에서 열(Column)을 의미하며 데이터 항목의 속성(Attribute) 또는 특성을 나타낸다.
각 열은 고유한 이름을 가지며 특정 도메인(Domain)에서 정의된 값을 갖는다.
예를 들어 "학생" 릴레이션에서 학번, 이름, 전공 등은 각각 하나의 열이며 이 열들은 학생의 고유한 속성을 나타낸다.
이 개념은 파일 구조에서의 필드(Field)에 해당하며 릴레이션에서 행(Row, Tuple)의 구성 요소가 된다.`,
    options: ["ㄱ. Cardinality", "ㄴ. Domain", "ㄷ. Attribute", "ㄹ. Degree", "ㅁ. Schema", "ㅂ. Tuple"],
    imageUrl: null
  },
  {
    id: 23,
    answer: "SSH",
    question: "다음은 정보보안 관련 문제이다. 아래 내용을 보고 알맞는 단어를 작성하시오.",
    passageOrCode: `원격 접속과 관련된 보안 프로토콜이며 암호화된 통신을 제공하는 보안 접속용 프로토콜이다.
공개키 기반의 인증 방식을 사용하며 암호화된 데이터 전송을 지원한다.
주로 원격 서버에 안전하게 접속할 때 사용되며 기본 포트 번호는 22번이다.
Telnet의 보안 취약점을 보완한 대안으로 널리 사용된다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 24,
    answer: "SJF SRT",
    question: "스케줄링 알고리즘에 관한 다음 설명을 읽고 (1)과 (2)에 알맞은 스케줄링 알고리즘의 명칭을 각각 쓰시오.",
    passageOrCode: `(1) CPU burst 시간이 짧은 프로세스를 우선적으로 처리하는 스케줄링 방식이다. "Shortest Next CPU Burst"라고도 불리며 선점형 또는 비선점형으로 구현될 수 있다.
(2) 위의 스케줄링 방식을 선점형으로 구현한 형태로 실행 중인 프로세스보다 더 짧은 burst 시간을 가진 프로세스가 도착하면 현재 CPU를 선점한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 25,
    answer: "BB",
    question: "다음은 Java의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
    passageOrCode: `public class Main {
    public static void change(String[] data, String s){
        data[0] = s;
        s = "Z";
    }
    
    public static void main(String[] args) {
        String data[] = { "A" };
        String s = "B";
        
        change(data, s);
        System.out.print(data[0] + s);
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 26,
    answer: "128 62",
    question: "다음은 IP 주소와 서브넷 마스크에 관한 문제이다. 주어진 정보를 참고하여 괄호 안에 들어갈 알맞은 값을 쓰시오.",
    passageOrCode: `호스트의 IP 주소가 223.13.234.132이고 서브넷 마스크가 255.255.255.192일 때 다음 물음에 답하시오.
이 호스트가 속한 네트워크 주소는 223.13.234.(   )이다.
이 네트워크에서 사용 가능한 호스트 수는 (   )개이다.
(단, 네트워크 주소와 브로드캐스트 주소는 제외한다.)`,
    options: null,
    imageUrl: null
  },
  {
    id: 27,
    answer: "Proxy",
    question: "다음은 디자인 패턴에 관한 문제이다. 아래 내용을 보고 알맞는 단어를 작성하시오.",
    passageOrCode: `어떤 객체에 대한 접근을 제어하거나 추가적인 기능을 부여하기 위해 해당 객체의 대리 객체를 사용하는 방식의 디자인 패턴이다.
실제 객체에 대한 접근 전에 필요한 작업을 수행할 수 있으며 실제 객체의 생성을 지연시켜 메모리와 자원을 절약할 수 있다.
또한, 실제 객체를 감추어 정보은닉을 강화할 수 있다는 장점이 있다. `,
    options: null,
    imageUrl: null
  },
  {
    id: 28,
    answer: "AJAX",
    question: "다음은 웹 데이터 교환 방식에 관한 문제이다. 아래 설명을 읽고 괄호 안에 들어갈 알맞은 용어를 작성하시오.",
    passageOrCode: `(   )은/는 웹 페이지 전체를 다시 불러오지 않고 JavaScript와 XML(또는 JSON)을 이용하여 일부 콘텐츠만 비동기적으로 갱신할 수 있는 기술이다.
(   )은/는 HTML만으로는 구현하기 어려운 동적인 기능들을 가능하게 하여 사용자가 웹 페이지와 보다 자유롭게 상호작용할 수 있도록 해주는 웹 개발 기법이다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 29,
    answer: "19",
    question: "다음은 Java언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
    passageOrCode: `public class Main {
    static interface F {
        int apply(int x) throws Exception;
    }
 
    public static int run(F f) {
        try {
            return f.apply(3);
        } catch (Exception e) {
            return 7;
        }
    }
 
    public static void main(String[] args) {
 
        F f = (x) -> {
            if (x > 2) {
                throw new Exception();
            }
            return x * 2;
        };
 
        System.out.print(run(f) + run((int n) -> n + 9));
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 30,
    answer: "5P",
    question: "다음은 Java언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
    passageOrCode: `public class Main{
    public static class Parent {
        public int x(int i) { return i + 2; }
        public static String id() { return "P";}
        
    }
 
    public static class Child extends Parent {
        public int x(int i) { return i + 3; }
        public String x(String s) { return s + "R"; }
        public static String id() { return "C"; }
        
    }
 
    public static void main(String[] args) {
        Parent ref = new Child();
        System.out.println(ref.x(2) + ref.id());
        
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 31,
    answer: "1234561 124567",
    alt: "1234567 124561",
    question: "다음 아래 제어 흐름 그래프가 분기 커버리지를 만족하기 위한 테스팅 순서를 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FontAh%2FbtsPr5j39Go%2FAAAAAAAAAAAAAAAAAAAAAF7OOTxRSmoqRdz_y53RaHGui4wnxMDfWWDkzR0IAnjI%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DnEaCAM75%252Bk1Nj35vNv9Mp6zNg8w%253D"
  },
  {
    id: 32,
    answer: "2 그리고 3",
    question: "다음은 C언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
#define SIZE 3
 
typedef struct {
    int a[SIZE];
    int front;
    int rear;
} Queue;
 
void enq(Queue* q, int val){
    q->a[q->rear] = val; 
    q->rear = (q->rear + 1) % SIZE;
}
 
int deq(Queue* q) {
    int val = q->a[q->front];
    q->front = (q->front + 1) % SIZE;
    return val;
}
 
int main() {
    Queue q = {{0}, 0, 0};
 
    enq(&q,1); enq(&q,2); deq(&q); enq(&q, 3);
    
    int first = deq(&q);
    int second = deq(&q);
    printf("%d 그리고 %d", first, second);
    
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 33,
    answer: "11.75ms",
    alt: "11.75",
    question: "라운드로빈(RR) 방식을 이용하고 아래 내용을 참고하여 평균대기시간을 구하시오.",
    passageOrCode: `운영체제에서 라운드로빈(Round Robin, RR) 스케줄링은 각 프로세스에 동일한 시간 할당량(타임 퀀텀)을 순차적으로 부여하며 CPU를 할당하는 방식이다.
다음은 4개의 프로세스가 서로 다른 시간에 도착하며 각기 다른 실행 시간을 가지는 상황이다. 이때 시간 할당량은 4ms이고 컨텍스트 스위칭 시간은 무시한다고 가정한다.
아래 정보를 바탕으로 라운드로빈(RR) 방식으로 CPU 스케줄링을 수행할 경우 모든 프로세스의 평균 대기시간(Average Waiting Time)은 얼마인가?`,
    options: ["P1: (도착시간) 0ms, (실행시간) 8ms", "P2: (도착시간) 1ms, (실행시간) 4ms", "P3: (도착시간) 2ms, (실행시간) 9ms", "P4: (도착시간) 3ms, (실행시간) 5ms"],
    imageUrl: null
  },
  {
    id: 34,
    answer: "5 그리고 6",
    question: "다음은 C언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오. ",
    passageOrCode: `#include <stdio.h>
 
struct dat {
    int x;
    int y;
};
 
int main() {
    struct dat a[] = {{1, 2}, {3, 4}, {5, 6}};
    struct dat* ptr = a;
    struct dat** pptr = &ptr;
 
    (*pptr)[1] = (*pptr)[2];
    printf("%d 그리고 %d", a[1].x, a[1].y);
 
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 35,
    answer: "1a3b3",
    question: "다음은 Java언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오. ",
    passageOrCode: `public class Main{
    public static class BO {
        public int v;
        public BO(int v) {
            this.v = v;
        }
    }
    public static void main(String[] args) {
        BO a = new BO(1);
        BO b = new BO(2);
        BO c = new BO(3);
        BO[] arr = {a, b, c};
        BO t = arr[0];
        arr[0] = arr[2];
        arr[2] = t;
        arr[1].v = arr[0].v;
        System.out.println(a.v + "a" + b.v + "b" + c.v);
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 36,
    answer: "3 1 2",
    question: "다음은 C언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오. ",
    passageOrCode: `#include <stdio.h>
#include <stdlib.h>
 
struct node {
    int p;
    struct node* n;
};
 
int main() {
    struct node a = {1, NULL};
    struct node b = {2, NULL};
    struct node c = {3, NULL};
 
    a.n = &b; b.n = &c; c.n = NULL;
    c.n = &a; a.n = &b; b.n = NULL;
    struct node* head = &c;
    printf("%d %d %d", head->p, head->n->p, head->n->n->p);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 37,
    answer: "2",
    question: "다음은 파이썬의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오. ",
    passageOrCode: `lst = [1,2,3]
dst = {i : i*2 for i in lst}
s = set(dst.values())
lst[0] = 99 
dst[2]=7
s.add(99)
print(len(s & set(dst.values())))`,
    options: null,
    imageUrl: null
  },
  {
    id: 38,
    answer: "TSEB",
    question: "다음은 C언어의 문제이다. 아래 코드를 보고 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
#include <stdlib.h>
 
struct node {
    char c;
    struct node* p;
};
 
struct node* func(char* s) {
    struct node* h = NULL, *n;
    
    while(*s) {
        n = malloc(sizeof(struct node));
        n->c = *s++;
        n->p = h;
        h = n;
    }
    
    return h;
}
 
int main() {
    struct node* n = func("BEST");
    
    while(n) {
        putchar(n->c);
        struct node* t = n;
        n = n->p;
        free(t);
    }
    
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 39,
    answer: "SYN Flooding",
    question: "다음은 TCP 통신 과정에서 발생할 수 있는 보안 취약점에 대한 설명이다. 이를 이용한 공격 기법으로 옳은 것은?",
    passageOrCode: `TCP는 연결을 수립하기 위해 클라이언트가 서버에 SYN 패킷을 보내고 서버는 SYN-ACK 패킷으로 응답한 후 클라이언트가 다시 ACK 패킷을 보내는 3-way-handshake 과정을 거친다.
이때 공격자는 클라이언트 역할로 수많은 SYN 패킷을 서버에 전송한 뒤 마지막 ACK를 고의로 보내지 않아 서버가 연결 대기 상태를 계속 유지하게 만든다.
이로 인해 서버의 연결 대기 큐가 가득 차면서 정상적인 접속 요청을 처리하지 못하게 되어 서비스 거부 상태가 발생한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 40,
    answer: "TTL 부장 대리 과장 차장",
    question: "다음 테이블에서 πTTL(employee)에 대한 연산 결과 값을 작성하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FyRw19%2FbtsPrsmwocC%2FAAAAAAAAAAAAAAAAAAAAAGj9fscjC-kGGNZajz0zMo_o1cfYQ2xxHnU3YH5rGA9p%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3D41z1rIoDcKXx8TE%252FDOMS%252BzbbKeE%253D"
  },
/* 2024년 1회 */
  {
    id: 41,
    answer: "4",
    question: "다음 Java 코드에서 알맞는 출력 값을 작성하시오.",
    passageOrCode: `class Connection {
    private static Connection _inst = null;
    private int count = 0;
    
    static public Connection get() {
        if(_inst == null) {
            _inst = new Connection();
            return _inst;
        }
        return _inst;
    }
    
    public void count() {
         count++; 
    }
    
    public int getCount() {
         return count; 
    }
}
 
public class main {  
    public static void main(String[] args) {
        Connection conn1 = Connection.get();
        conn1.count();
 
        Connection conn2 = Connection.get();
        conn2.count();
 
        Connection conn3 = Connection.get();
        conn3.count();
        
        conn1.count();
        System.out.print(conn1.getCount());
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 42,
    answer: "151",
    question: "다음 C언어 코드에서 알맞는 출력 값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
 
int main() {
    int v1 = 0, v2 = 35, v3 = 29;
    
    if(v1 > v2 ? v2 : v1) {
        v2 = v2 << 2;
    }else{
        v3 = v3 << 2;
    }
    
    printf("%d", v2+v3);
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 43,
    answer: "ㄱ ㄴ ㄹ ㄷ",
    alt: "기능 교환 시간 우연",
    question: "다음 응집도와 관련해서 보기에서 응집도가 높은 순으로 나열하시오.",
    passageOrCode: null,
    options: ["ㄱ. 기능", "ㄴ. 교환", "ㄷ. 우연", "ㄹ. 시간"],
    imageUrl: null
  },
  {
    id: 44,
    answer: "GECA",
    question: "다음 C언어 코드에서 알맞는 출력 값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
#include <string.h>
 
void reverse(char* str){
    int len = strlen(str);
    char temp;
    char*p1 = str;
    char*p2 = str + len - 1;
    while(p1<p2){
        temp = *p1;
        *p1 = *p2;
        *p2 = temp;
        p1++;
        p2--;
    }
}
 
int main(int argc, char* argv[]){
    char str[100] = "ABCDEFGH";
 
    reverse(str);
 
    int len = strlen(str);
 
    for(int i=1; i<len; i+=2){
        printf("%c",str[i]);
    }
 
    printf("\n");
 
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 45,
    answer: "192.168.35.72 129.200.8.249 192.168.36.249",
    question: "아래 그림에서의 네트워크에서 라우터을 통한 할당 가능한 2번, 4번, 5번의 IP를 작성하시오.",
    passageOrCode: `1) 192.168.35.3/24
3) 129.200.10.16/22
6) 192.168.36.24/24`,
    options: ["192.168.35.0", "192.168.35.72", "192.168.36.0", "192.168.36.249", "129.200.8.0", "129.200.8.249"],
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbHTbEI%2FbtsHqLsBYPd%2FAAAAAAAAAAAAAAAAAAAAAIMm2bQrfA7pDuPPzWrNJY_wzyMU_mYXW-zf3w4iVs4z%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DQBJf605nUtWkh2DMnqCeLdJoabA%253D"
  },
  {
    id: 46,
    answer: "제 3정규형",
    question: "아래 표에서 나타나고 있는 정규형을 작성하시오.",
    passageOrCode: `고객아이디	강좌명	강사번호
apple	영어회화	P001
banana	기초토익	P002
carrot	영어회화	P001
carrot	기초토익	P004
orange	영어회화	P003
orange	기초토익	P004`,
    options: null,
    imageUrl: null
  },
  {
    id: 47,
    answer: "OSPF",
    question: "아래의 내용에서 설명하는 네트워크 용어를 영문 약자로 작성하시오.",
    passageOrCode: `1. 대표적인 링크 상태 라우팅 프로토콜이다. 이것은 인터넷에서 연결된 링크의 상태를 감시하여 최적의 경로를 선택한다는 것이다.
2. 단일 자율 시스템 내에서 라우팅 정보를 배포하는 데 사용되는 내부 게이트웨이 프로토콜이다.
3. 모든 대상에 도달하기 위한 최단 경로를 구축하고 계산하며 최단 경로는 Dijkstra 알고리즘을 사용하여 계산된다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 48,
    answer: "세타 조인 동등 조인 자연 조인",
    question: "아래 내용의 각각의 설명에 대한 답을 작성하시오.",
    passageOrCode: `(1) 조인에 참여하는 두 릴레이션의 속성 값을 비교하여 조건을 만족하는 튜플만 반환한다.
(2) 조건이 정확하게 '=' 등호로 일치하는 결과를 반환한다. 
(3) ( (2) ) 조인에서 조인에 참여한 속성이 두 번 나오지 않도록 중복된 속성을 제거한 결과를 반환한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 49,
    answer: "6 6",
    question: "다음은 운영체제 페이지 순서를 참고하여 할당된 프레임의 수가 3개일 때 LRU와 LFU 알고리즘의 페이지 부재 횟수를 각각 작성하시오.",
    passageOrCode: `페이지 참조 순서 : 1, 2, 3, 1, 2, 4, 1, 2, 5, 7`,
    options: null,
    imageUrl: null
  },
  {
    id: 50,
    answer: "6 3 1 7 2",
    question: "다음 Java언어 코드의 실행 순서를 중복 번호없이 작성하시오.",
    passageOrCode: `class Parent {
    int x, y;
 
    Parent(int x, int y) { ①
        this.x=x;
        this y=y;
    }
 
    int getT() { ②
        return x*y;
    }
}
 
class Child extend Parent {
    int x;
 
    Child (int x) { ③
        super(x+1, x);
        this.x=x;
    }
 
    int getT(int n){ ④
        return super.getT()+n;
    }
}
 
class Main {
    public static void main(String[] args) { ⑤
        Parent parent = new Child(3); ⑥
        System.out.println(parent.getT()); ⑦
    }
}`,
    options: ["실행 순서 : 5 → ( ) → ( ) → ( ) → ( ) → ( )"],
    imageUrl: null
  },
  {
    id: 51,
    answer: "9981 and 2795.10",
    question: "다음 C언어의 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
 
typedef struct{
    int accNum;
    double bal;
}BankAcc;
 
double sim_pow(double base, int year){
    int i;
    double r = 1.0;
 
    for(i=0; i<year; i++){
        r = r*base;
    }
    return r;
} 
 
void initAcc(BankAcc *acc, int x, double y){
    acc -> accNum = x;
    acc -> bal = y;
}
 
void xxx(BankAcc *acc, double *en){
    if (*en > 0 && *en < acc -> bal) {
        acc -> bal = acc -> bal-*en;
    }else{
        acc -> bal = acc -> bal+*en;
    }
}
 
void yyy(BankAcc *acc){
    acc -> bal = acc -> bal * sim_pow((1+0.1),3);
}
 
int main(){
    BankAcc myAcc;
    initAcc(&myAcc, 9981, 2200.0);
    double amount = 100.0;
    xxx(&myAcc, &amount);
    yyy(&myAcc);
    printf("%d and %.2f", myAcc.accNum, myAcc.bal);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 52,
    answer: "Seynaau",
    question: "다음 파이썬 코드에 대한 알맞는 출력 값을 작성하시오.",
    passageOrCode: `a = ["Seoul", "Kyeonggi", "Incheon", "Daejun", "Daegu", "Pusan"] 
str = "S"
for i in a:
    str = str + i[1]
print(str)`,
    options: null,
    imageUrl: null
  },
  {
    id: 53,
    answer: `B
a
b`,
    question: "아래 보기의 SQL 문장과 테이블을 참고하여 출력 값을 표로 작성하시오.",
    passageOrCode: `SELECT
    B
FROM
    R1
WHERE
    C IN (SELECT C FROM R2 WHERE D="k");`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcdGyt7%2FbtsHrT44l4V%2FAAAAAAAAAAAAAAAAAAAAAJ7pvKDZrvZliNMonxEJjJWyOPXgzfu0vTF8HJGlC8Gr%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3Dnj%252FYivkgF59p2suO%252FlK42ncESyE%253D"
  },
  {
    id: 54,
    answer: "ㄹ",
    alt: "변경 조건/결정 커버리지",
    question: "아래는 애플리케이션 테스트 관리에 대한 내용이다. 설명하는 답을 보기에서 골라 작성하시오.",
    passageOrCode: `1. 모든 분기와 조건의 조합을 고려하나 모든 조합을 테스트하는 대신에 테스트가 필요한 중요한 조합을 찾아내는데에 중점을 둔다. 
2. 특정 조건을 수행할 때 다른 조건과는 상관없이 전체 결과에 영향을 미치는 조건만을 테스트한다. 
3. 각각의 파라미터는 적어도 한 번은 최종 결과에 영향을 주어야 한다.`,
    options: ["ㄱ. 구문 커버리지", "ㄴ. 결정 커버리지", "ㄷ. 조건 커버리지", "ㄹ. 변경 조건/결정 커버리지", "ㅁ.다중 조건 커버리지", "ㅂ.경로 커버리지", "ㅅ.조건/결정 커버리지"],
    imageUrl: null
  },
  {
    id: 55,
    answer: "ㅅ",
    alt: "Rootkit",
    question: "다음 아래 내용을 보고 보기에서 알맞는 용어를 골라 작성하시오.",
    passageOrCode: `인터넷 공격자의 존재를 숨기면서 이 공격자에게 시스템에 대한 무제한 접근 권한을 부여하는 악성 프로그램이다.
해커가 자신의 존재를 숨기면서 허가되지 않은 컴퓨터나 소프트웨어에 접근할 수 있도록 설계된 도구이다.
일반적으로 펌웨어, 가상화 계층 등의 다양한 시스템 영역에서 작동하며, 운영체제의 시스템콜을 해킹하여 악성코드의 실행여부를 숨겨 안티바이러스 탐지를 우회할 수 있다.`,
    options: ["ㄱ.Worm", "ㄴ.Trojan horse", "ㄷ.Backdoor", "ㄹ.Virus", "ㅁ.Ransomware", "ㅂ.Spyware", "ㅅ.Rootkit"],
    imageUrl: null
  },
  {
    id: 56,
    answer: "9",
    question: "다음 Java 코드를 보고 알맞는 출력 값을 작성하시오.",
    passageOrCode: `class classOne {
    int a, b;
 
    public classOne(int a, int b) {
        this.a = a;
        this.b = b;
    }
 
    public void print() {
        System.out.println(a + b);
    }
 
}
class classTwo extends classOne {
    int po = 3;
    
    public classTwo(int i) {
        super(i, i+1);
    }
 
    public void print() {
        System.out.println(po*po);
    }
}
 
public class main {  
    public static void main(String[] args) {
        classOne one = new classTwo(10);
        one.print();
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 57,
    answer: "ㅅ",
    alt: "APT",
    question: "다음 아래 내용을 보고 보기에서 알맞는 용어를 골라 작성하시오.",
    passageOrCode: `1. 불특정 다수가 아닌 명확한 표적을 정하여 지속적인 정보수집 후 공격감행할 수 있다.
2. 시스템에 직접 침투하는 것뿐 아니라 표적 내부직원들이 이용하는 다양한 단말을 대상으로 한다.
3. 한가지 기술만이 아닌 Zero-day 취약점, 악성코드 등 다양한 보안 위협 공격 기술을 사용한다.
4. 일반적으로 공격은 침투, 검색, 수집 및 유출의 4단계로 실행되며, 각 단계별로 다양한 공격 기술을 사용한다.`,
    options: ["ㄱ.사회공학 기법", "ㄴ.Adware", "ㄷ.MITM", "ㄹ.XDR", "ㅁ.Replace attack", "ㅂ.key logger attack", "ㅅ.APT"],
    imageUrl: null
  },
  {
    id: 58,
    answer: "1",
    question: "아래의 SQL 코드와 테이블을 참고하여 결과 값을 작성하시오.",
    passageOrCode: `SELECT 
    COUNT(*) 
FROM 
    TABLE 
WHERE 
    EMPNO > 100 
AND 
    SAL >= 3000 OR EMPNO = 200`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FdR34LK%2FbtsHqjES9Ot%2FAAAAAAAAAAAAAAAAAAAAAF89NFObm5YWW0w5qpXaAW3PMG8OFFO8H7eBSDJRlOnx%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DidUwKZefuE84AzTA7TFyBBcSP14%253D"
  },
  {
    id: 59,
    answer: "Nd sc 1",
    question: "다음 C언어 코드의 알맞는 출력 값을 작성하시오.",
    passageOrCode: `#include<stdio.h>
#include<ctype.h>
 
int main(){
    char*p = "It is 8";
    char result[100];
    int i;
 
    for(i=0; p[i]!='\0'; i++){
        if(isupper(p[i]))
            result[i] = (p[i]-'A'+5)% 25 + 'A';
        else if(islower(p[i]))
            result[i] = (p[i]-'a'+10)% 26 + 'a';
        else if(isdigit(p[i]))
            result[i] = (p[i]-'0'+3)% 10 + '0';
        else if(!(isupper(p[i]) || islower(p[i]) || isdigit(p[i])))    
            result[i] = p[i];
    }
 
    result[i] = '\0';
    printf("%s\n",result);
 
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 60,
    answer: "Abstract Factory",
    question: "다음 아래의 내용을 보고 알맞는 용어를 작성하시오.",
    passageOrCode: `구체적인 클래스에 의존하지 않고 서로 연관되거나 의존적인 객체들의 조합을 만드는 인터페이스를 제공하는 패턴이다.
연관성이 있는 객체 군이 여러개 있을 경우 이들을 묶어 추상화하고, 어떤 구체적인 상황이 주어지면 팩토리 객체에서 집합으로 묶은 객체 군을 구현화 하는 생성 패턴이다.
관련성 있는 여러 종류의 객체를 일관된 방식으로 생성하는 경우에 유용하다.
kit라고도 불린다.`,
    options: null,
    imageUrl: null
  },
];