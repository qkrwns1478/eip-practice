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
    passageOrCode: "페이지 참조 순서 : 1, 2, 3, 1, 2, 4, 1, 2, 5, 7",
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
/* 2024년 2회 */
  {
    id: 61,
    answer: "NNN",
    question: "다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `class Main {
    public static void main(String[] args) {
        int[] a = new int[]{1, 2, 3, 4};
        int[] b = new int[]{1, 2, 3, 4};
        int[] c = new int[]{1, 2, 3};
        
        check(a, b);
        check(a, c); 
        check(b, c); 
    }
 
    public static void check(int[] a, int[] b) {
        if (a==b) {
            System.out.print("O");
        }else{
            System.out.print("N");
        }
        
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 62,
    answer: "반정규화",
    question: "다음 문제에서 설명하는 용어를 작성하시오.",
    passageOrCode: "데이터를 중복시켜 성능을 향상시키기 위한 기법으로 데이터를 중복 저장하거나 테이블을 합치는 등으로 성능을 향상시키지만 데이터 무결성이 저하될 수 있는 기법",
    options: null,
    imageUrl: null
  },
  {
    id: 63,
    answer: "VALUES SELECT FROM SET",
    question: "다음은 SQL에 관한 문제이다. 아래 SQL 구문의 빈칸을 작성하시오.",
    passageOrCode: `테이블
사원 [사원번호(PK), 이름, 나이, 부서]
부서 [사원번호(PK), 이름, 주소, 나이]

신입 사원이 들어와서 사원 테이블에 추가
INSERT INTO 사원 (사원번호, 이름, 주소, 부서)   [      ①     ] (32431, '정실기', '서울', '영업');

위에 신입사원을 검색하면서 부서 테이블에 추가
INSERT INTO 부서 (사원번호, 이름, 나이, 부서)
[    ②     ] 사원번호, 이름, 나이, 23 FROM 사원 WHERE 이름 = '정실기';

전체 사원 테이블 조회
SELECT  *   [    ③   ]   사원;

퇴사로 인해 부서에 해당하는 값을 '퇴사'로 변경
UPDATE 사원   [      ④     ]   부서  =  '퇴사'  WHERE 사원번호  = 32431;`,
    options: null,
    imageUrl: null
  },
  {
    id: 64,
    answer: "5 4",
    question: "다음 릴레이션의 Cardinality와 Degree를 작성하시오.",
    passageOrCode: null,
    options: ["Cardinality : (  ①  )", "Degree : (  ②  )"],
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F9GCnk%2FbtsIQHjwfX4%2FAAAAAAAAAAAAAAAAAAAAAFcwOwpSbNpVcvUGl9r3CTTjPEncjPAQEPGf6rQv7RxE%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3Dh7Ea%252Fde%252F1PCQOb3rpub9ZzkEZTo%253D"
  },
  {
    id: 65,
    answer: "IPSec",
    question: "다음은 프로토콜에 대한 내용이다. 아래 내용을 읽고 알맞는 답을 작성하시오.",
    passageOrCode: `- Network layer에서 IP패킷을 암호화하고 인증하는 등의 보안을 위한 표준이다. 
- 기업에서 사설 인터넷망으로 사용할 수 있는 VPN을 구현하는데 사용되는 프로토콜이다.
- AH(Authentication Header)와 ESP(Encapsulating Security Payload)라는 두 가지 보안 프로토콜을 사용한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 66,
    answer: "ab3ca3",
    question: "다음은 Python에 대한 문제이다. 아래 코드를 읽고 알맞는 출력 값을 작성하시오.",
    passageOrCode: `def fnCalculation(x,y):
    result = 0;
    for i in range(len(x)):
     temp = x[i:i+len(y)] 
     if temp == y:
       result += 1;
    return result
 
a = "abdcabcabca"
p1 = "ab";
p2 = "ca";
 
out = f"ab{fnCalculation(a,p1)}ca{fnCalculation(a,p2)}"
print(out)`,
    options: null,
    imageUrl: null
  },
  {
    id: 67,
    answer: "AES",
    question: "아래 설명하는 내용을 확인하여 알맞는 알고리즘을 작성하시오.",
    passageOrCode: `- 대칭키 알고리즘으로 1997년 NIST(미국 국립기술표준원)에서 DES를 대체하기 위해 생성되었다.
- 128비트, 192비트 또는 256비트의 가변 키 크기와 128비트의 고정 블록 크기를 사용한다.
- 높은 안전성과 효율성, 속도 등으로 인해 DES 대신 전 세계적으로 많이 사용되고 있다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 68,
    answer: "가상회선 데이터그램",
    question: "패킷 교환 방식 중에 ①연결형 교환 방식과 ②비연결형 교환 방식에 해당하는 방식을 작성하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 69,
    answer: "ㅂ",
    alt: "순차적",
    question: "아래 내용을 확인하고 보기에서 알맞는 답을 고르시오.",
    passageOrCode: `실행 순서가 밀접한 관계를 갖는 기능을 모아 모듈로 구성한다.
한 모듈 내부의 한 기능 요소에 의한 출력 자료가 다음 기능 원소의 입력 자료로서 제공되는 형태이다.`,
    options: ["ㄱ. 기능적(functional)", "ㄴ. 우연적(Coincidental)", "ㄷ. 통신적(Communication)", "ㄹ. 절차적(Procedural)", "ㅁ. 시간적(Temporal)", "ㅂ. 순차적(sequential)", "ㅅ. 논리적(Logical)"],
    imageUrl: null
  },
  {
    id: 70,
    answer: "Iterator",
    question: "아래는 디자인 패턴에 관한 설명이다. 아래 설명을 읽고 보기에서 알맞는 용어를 작성하시오.",
    passageOrCode: `- 컬렉션 객체의 내부 구조를 노출하지 않고 순차적으로 접근할 수 있게 하는 패턴이다. 
- 이 패턴은 객체의 내부 표현 방식에 독립적으로 요소에 접근할 수 있도록 해준다
- 반복 프로세스를 캡슐화하여 클라이언트 코드에서는 컬렉션의 구체적인 구현에 종속되지 않도록 한다.`,
    options: ["Singleton", "Adapter", "Iterator", "Factory Method", "Bridge", "Visitor", "Abstract Factory", "Composite", "Observer"],
    imageUrl: null
  },
  {
    id: 71,
    answer: "A D C F",
    question: "아래 그림을 바탕으로 RIP을 구성하여 최단 경로 비용을 계산하여 흐름에 맞게 작성하시오. (A에서 시작)",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbDn5o2%2FbtsIQLTXSHe%2FAAAAAAAAAAAAAAAAAAAAAJFzRUUsEI7beM5FTIMGSH1FCvW-dE-ni6ipmIyST9YZ%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DEIX5pwnfm6OQ4oak5kcHqCafiWU%253D"
  },
  {
    id: 72,
    answer: "6.5",
    question: "아래의 표를 확인하여 SRT 스케줄링의 평균 대기시간을 계산하여 작성하시오.",
    passageOrCode: `프로세스	도착 시간	서비스 시간
A	0	8
B	1	4
C	2	9
D	3	5`,
    options: null,
    imageUrl: null
  },
  {
    id: 73,
    answer: "21",
    question: "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
int main() {
    int arr[3][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int* parr[2] = {arr[1], arr[2]};
    printf("%d", parr[1][1] + *(parr[1]+2) + **parr);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 74,
    answer: "25, 20",
    question: "다음은 Java 언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `class Main {
    public static void main(String[] args) {
        int a[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        ODDNumber OE = new ODDNumber();
        System.out.print(OE.sum(a, true) + ", " + OE.sum(a, false));
    }
}
 
interface Number {
    int sum(int[] a, boolean odd);
}
 
class ODDNumber implements Number {
    public int sum(int[] a, boolean odd) {
        int result = 0;
        for(int i=0; i < a.length; i++){
            if((odd && a[i] % 2 != 0) || (!odd && a[i] % 2 == 0))
                result += a[i];
        }        
        return result;
    }    
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 75,
    answer: "10",
    question: "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
#include <string.h>
 
void sumFn(char* d, const char* s) {
 
    while (*s) {
        *d = *s;
        d++;
        s++;
    }
    *d = '\0'; 
}
 
int main() {
    const char* str1 = "first";
    char str2[50] = "teststring";  
    int result=0;
    sumFn(str2, str1);
 
    for (int i = 0; str2[i] != '\0'; i++) {
        result += i;
    }
    printf("%d", result);
    
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 76,
    answer: "Control",
    alt: "제어",
    question: "아래는 소프트웨어 설계에 대한 내용이다. 내용을 읽고 괄호안에 알맞는 답을 작성하시오.",
    passageOrCode: `- 어떤 모듈이 다른 모듈 내부의 논리적인 흐름을 제어하기 위해, 제어를 통신하거나 제어 요소를 전달하는 결합도이다.
- 한 모듈이 다른 모듈의 상세한 처리 절차를 알고 있어 이를 통제하는 경우나 처리 기능이 두 모듈에 분리되어 설계된 경우에 발생한다.`,
    options: ["(              ) Coupling"],
    imageUrl: null
  },
  {
    id: 77,
    answer: "dcba",
    question: "다음은 Java에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력 값을 작성하시오.",
    passageOrCode: `class Main {
    public static void main(String[] args) {
        String str = "abacabcd";
        boolean[] seen = new boolean[256];
        System.out.print(calculFn(str, str.length()-1, seen));
    }
 
    public static String calculFn(String str, int index, boolean[] seen) {
        if(index < 0) return "";
        char c = str.charAt(index);
        String result = calculFn(str, index-1, seen);
        if(!seen[c]) {
            seen[c] = true;
            return c + result;
        }
        return result;
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 78,
    answer: "-13",
    question: "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력 값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
 
void swap(int a, int b) {
    int t = a;
    a = b;
    b = t;
}
 
int main() {
    
    int a = 11;
    int b = 19;
    swap(a, b);
    
    switch(a) {
        case 1:
            b += 1;
        case 11:
            b += 2;
        default:
            b += 3;
        break;
    }
    
    printf("%d", a-b);
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 79,
    answer: "20",
    question: "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력 값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
 
struct node {
    int n1;
    struct node *n2;
};
 
int main() {
    struct node a = {10, NULL};
    struct node b = {20, NULL};
    struct node c = {30, NULL};
 
    struct node *head = &a;
    a.n2 = &b;
    b.n2 = &c;
 
    printf("%d\n", head->n2->n1);
 
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 80,
    answer: "S",
    question: "다음은 Java언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력 값을 작성하시오.",
    passageOrCode: `class Main {
    public static void main(String[] args) {
        String str = "ITISTESTSTRING";
        String[] result = str.split("T");
        System.out.print(result[3]);
    }
}`,
    options: null,
    imageUrl: null
  },
/* 2024년 3회 */
  {
    id: 81,
    answer: "OOAAA",
    question: "다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `public class Main {
    static String[] s = new String[3];
    static void func(String[] s, int size) {
        for (int i = 1; i < size; i++) {
            if (s[i - 1].equals(s[i])) {
                System.out.print("O");
            } else {
                System.out.print("N");
            }
        }
        for (String m : s) {
            System.out.print(m);
        }
    }
    public static void main(String[] args) {
        s[0] = "A";
        s[1] = "A";
        s[2] = new String("A");
        func(s, 3);
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 82,
    answer: "3",
    question: "다음은 파이썬에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `def func(lst):
    for i in range(len(lst) // 2):
        lst[i], lst[-i - 1] = lst[-i - 1], lst[i]

lst = [1, 2, 3, 4, 5, 6]
func(lst)
print(sum(lst[::2]) - sum(lst[1::2]))`,
    options: null,
    imageUrl: null
  },
  {
    id: 83,
    answer: "1",
    question: "아래의 employee테이블과 project테이블을 참고하여 보기의 SQL명령어에 알맞는 출력 값을 작성하시오.",
    passageOrCode: `SELECT count(*)
FROM employee AS e
JOIN project AS p ON e.project_id = p.project_id
WHERE p.name IN (
    SELECT name
    FROM project p
    WHERE p.project_id IN (
        SELECT project_id
        FROM employee
        GROUP BY project_id
        HAVING count(*) < 2
    )
);`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F9Duij%2FbtsKhmXLACx%2FAAAAAAAAAAAAAAAAAAAAAJ7Z6wb65tBG8qfWhrB_xN_Eay6h24r_fPFYzm7NtBE5%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3Dc9ex%252Bt0wsElYV%252B8cX%252FLSYEoTnzc%253D"
  },
  {
    id: 84,
    answer: "12",
    question: "다음은 운영체제 페이지 순서를 참고하여 할당된 프레임의 수가 3개일 때 LRU 알고리즘의 페이지 부재 횟수를 작성하시오.",
    passageOrCode: "페이지 참조 순서 : 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1",
    options: null,
    imageUrl: null
  },
  {
    id: 85,
    answer: "스머프",
    alt: "스머핑 Smurf Smurfing",
    question: "다음은 네트워크 취약점에 대한 문제이다. 아래 내용을 보고 알맞는 용어를 작성하시오.",
    passageOrCode: `- IP나 ICMP의 특성을 악용하여 엄청난 양의 데이터를 한 사이트에 집중적으로 보냄으로써 네트워크의 일부를 불능 상태로 만드는 공격이다.
- 여러 호스트가 특정 대상에게 다량의 ICMP Echo Reply 를 보내게 하여 서비스거부(DoS)를 유발시키는 보안공격이다.
- 공격 대상 호스트는 다량으로 유입되는 패킷으로 인해 서비스 불능 상태에 빠진다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 86,
    answer: "행위",
    alt: "행동 Behavioral",
    question: "다음은 GoF 디자인 패턴과 관련된 문제이다. 괄호안에 알맞는 용어를 작성하시오.",
    passageOrCode: `( ) 패턴은 클래스나 객체들이 서로 상호작용하는 방법이나 책임 분배 방법을 정의하는 패턴이다.
( ) 패턴은 객체들 간의 통신 방법을 정의하고 알고리즘을 캡슐화하여 객체 간의 결합도를 낮춘다.
( ) 패턴은 Chain of Responsibility나 Command 또는 Observer 패턴이 있다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 87,
    answer: "20",
    question: "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
int func() {
    static int x = 0;
    x += 2;
    return x;
}
int main() {
    int x = 1;
    int sum = 0;
    for (int i = 0; i < 4; i++) {
        x++;
        sum += func();
    }
    printf("%d", sum);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 88,
    answer: "개체",
    alt: "Entity",
    question: "다음은 무결성제약조건에 대한 문제이다. 아래 표에서 어떠한 ( ) 무결성을 위반하였는지 작성하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fnh0RX%2FbtsKgJl3Fa7%2FAAAAAAAAAAAAAAAAAAAAAG3F7y15SpGBFn7EpGA8Tqt3MwIPtZOIhTFksxToLV5O%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DiVQiTmsCOVF3H2bSlzQ49q967sI%253D"
  },
  {
    id: 89,
    answer: "43125",
    question: "다음은 URL 구조에 관한 문제이다. 아래 보기의 순서대로 URL에 해당하는 번호를 작성하시오.",
    passageOrCode: null,
    options: [
      "query : 서버에 전달할 추가 데이터",
      "path : 서버 내의 특정 자원을 가리키는 경로",
      "scheme : 리소스에 접근하는 방법이나 프로토콜",
      "authority : 사용자 정보, 호스트명, 포트 번호",
      "fragment : 특정 문서 내의 위치"
    ],
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fbge1Ni%2FbtsKfy62Ji6%2FAAAAAAAAAAAAAAAAAAAAADDVvxyjlpIU2PB6-m4-7z3CDSaXrwMa09a2ffodtExB%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DrDc0%252FQJUeLIoNStrQKEFXICNBQ0%253D"
  },
  {
    id: 90,
    answer: "45",
    question: "다음은 파이썬에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `def func(value):
    if type(value) == type(100):
        return 100
    elif type(value) == type(""):
        return len(value)
    else:
        return 20

a = '100.0'
b = 100.0
c = (100, 200)
print(func(a) + func(b) + func(c))`,
    options: null,
    imageUrl: null
  },
  {
    id: 91,
    answer: "52",
    question: "다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `public class Main {
    public static void main(String[] args) {
        Base a = new Derivate();
        Derivate b = new Derivate();
        System.out.print(a.getX() + a.x + b.getX() + b.x);
    }
}

class Base {
    int x = 3;
    int getX() {
        return x * 2;
    }
}

class Derivate extends Base {
    int x = 7;
    int getX() {
        return x * 3;
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 92,
    answer: "312",
    question: "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
struct Node {
    int value;
    struct Node* next;
};

void func(struct Node* node) {
    while (node != NULL && node->next != NULL) {
        int t = node->value;
        node->value = node->next->value;
        node->next->value = t;
        node = node->next->next;
    }
}

int main() {
    struct Node n1 = { 1, NULL };
    struct Node n2 = { 2, NULL };
    struct Node n3 = { 3, NULL };
    n1.next = &n3;
    n3.next = &n2;
    func(&n1);
    struct Node* current = &n1;
    while (current != NULL) {
        printf("%d", current->value);
        current = current->next;
    }
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 93,
    answer: "ㅂ ㄹ ㄱ",
    alt: "문장 분기 조건",
    question: "다음은 테스트 커버리지에 대한 문제이다. 아래 내용에 알맞는 답을 보기에서 골라 작성하시오.",
    passageOrCode: `1. 테스트를 통해 프로그램의 모든 문장을 최소한 한 번씩 실행했는지를 측정
2. 프로그램 내의 모든 분기(조건문)의 각 분기를 최소한 한 번씩 실행했는지를 측정
3. 복합 조건 내의 각 개별 조건이 참과 거짓으로 평가되는 경우를 모두 테스트했는지를 측정`,
    options: [
      "ㄱ. 조건",
      "ㄴ. 경로",
      "ㄷ. 결정",
      "ㄹ. 분기",
      "ㅁ.함수",
      "ㅂ. 문장",
      "ㅅ. 루프"
    ],
    imageUrl: null
  },
  {
    id: 94,
    answer: "ㄴ ㄷ ㄱ",
    alt: "연관 일반화 의존",
    question: "아래는 UML클래스의 관계에 관한 문제이다. 보기를 보고 알맞는 관계를 선택하여 작성하시오.",
    passageOrCode: null,
    options: [
      "ㄱ. 의존",
      "ㄴ. 연관",
      "ㄷ. 일반화"
    ],
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fuev6c%2FbtsKheTOKch%2FAAAAAAAAAAAAAAAAAAAAAEwYju5DTzHQzGaTpqTmpYyFCvpFpBfnZJ4Y4VLYPDnh%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3D7guFnyr5C6RXpPE9TIyJ5iZILwE%253D"
  },
  {
    id: 95,
    answer: "ㄴ ㄹ ㄷ ㄱ",
    alt: "외래키 후보키 대체키 슈퍼키",
    question: "다음은 데이터베이스에 관한 문제이다. 아래 내용을 읽고 알맞는 답을 보기에서 찾아 골라 작성하시오.",
    passageOrCode: `(1) 다른 테이블, 릴레이션의 기본 키를 참조하는 속성 또는 속성들의 집합
(2) 테이블에서 각 행을 유일하게 식별할 수 있는 최소한의 속성들의 집합
(3) 후보 키 중에서 선정된 기본 키를 제외한 나머지 후보 키
(4) 테이블에서 각 행을 유일하게 식별할 수 있는 속성들의 집합`,
    options: [
      "ㄱ. 슈퍼키",
      "ㄴ. 외래키",
      "ㄷ. 대체키",
      "ㄹ. 후보키"
    ],
    imageUrl: null
  },
  {
    id: 96,
    answer: "1",
    question: "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
void func(int** arr, int size) {
    for (int i = 0; i < size; i++) {
        *(*arr + i) = (*(*arr + i) + i) % size;
    }
}

int main() {
    int arr[] = { 3, 1, 4, 1, 5 };
    int* p = arr;
    int** pp = &p;
    int num = 6;
    func(pp, 5);
    num = arr[2];
    printf("%d", num);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 97,
    answer: "VPN",
    question: "다음 아래 내용을 보고 알맞는 용어를 작성하시오. (3글자로 작성)",
    passageOrCode: `- 공용 네트워크를 통해 사설 네트워크를 확장하는 기술이다.
- 사용자의 IP 주소를 숨기고, 사용자가 어디에서 접속하는지를 추적하기 어렵게 만든다.
- 종류로는 IPsec 또는 SSL, L2TP 등이 있다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 98,
    answer: "101",
    question: "다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `public class ExceptionHandling {
    public static void main(String[] args) {
        int sum = 0;
        try {
            func();
        } catch (NullPointerException e) {
            sum = sum + 1;
        } catch (Exception e) {
            sum = sum + 10;
        } finally {
            sum = sum + 100;
        }
        System.out.print(sum);
    }

    static void func() throws Exception {
        throw new NullPointerException();
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 99,
    answer: "B0",
    question: "다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `class Main {
    public static class Collection<T> {
        T value;
        public Collection(T t) {
            value = t;
        }
        public void print() {
            new Printer().print(value);
        }
        class Printer {
            void print(Integer a) {
                System.out.print("A" + a);
            }
            void print(Object a) {
                System.out.print("B" + a);
            }
            void print(Number a) {
                System.out.print("C" + a);
            }
        }
    }
    public static void main(String[] args) {
        new Collection<>(0).print();
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 100,
    answer: "ㄹ",
    alt: "Ad-hoc Network",
    question: "다음은 네트워크에 대한 문제이다. 아래 내용을 보고 알맞는 용어를 작성하시오.",
    passageOrCode: `- 중앙 관리나 고정된 인프라 없이 임시로 구성되는 네트워크이다.
- 일반적으로 무선 통신을 통해 노드들이 직접 연결되어 데이터를 주고받는다.
- 긴급 구조, 긴급 회의, 군사적인 상황 등에서 유용하게 활용될 수 있다.`,
    options: [
      "ㄱ. Infrastructure Network",
      "ㄴ. Firmware Network",
      "ㄷ. Peer-to-Peer Network",
      "ㄹ. Ad-hoc Network",
      "ㅁ. Mesh Network",
      "ㅂ. Sensor Network",
      "ㅅ. Virtual Private Network"
    ],
    imageUrl: null
  },
/* 2023년 1회 */
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
    printf("%s\\n", a);
    printf("%c\\n", *p);
    printf("%c\\n", *a);
    printf("%s\\n", p);
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
/* 2023년 2회 */
  {
    id: 121,
    answer: "n[(i+1) % 5]",
    question: "다음은 C언어 코드 문제이다. 조건에 따라 괄호안에 알맞은 코드를 작성하시오.",
    passageOrCode: `int main(void) {
    int n[5];
    int i;
    for (i = 0; i < 5; i++) {
      printf("숫자를 입력해주세요 : ");
      scanf("%d", &n[i]);
    }
    for (i = 0; i < 5; i++) {
      printf("%d", ( ) );
    }
    return 0;
  }`,
    options: ["입력값이 54321일 경우 출력값이 43215로 출력되어야 한다."],
    imageUrl: null
  },
  {
    id: 122,
    answer: `m / 1000
(m % 1000) / 500
(m % 500) / 100
(m % 100) / 10`,
    question: "다음은 JAVA 코드 문제이다. 가지고 있는 돈이 총 4620원일 경우 1000원, 500원, 100원, 10원의 지폐 및 동전을 이용하여 보기의 조건에 맞춰 최소한의 코드를 통해 괄호안을 작성하시오.",
    passageOrCode: `public class Problem {
  public static void main(String[] args) {
    m = 4620;
    a = ( );
    b = ( );
    c = ( );
    d = ( );
    System.out.println(a); //천원짜리 4장
    System.out.println(b); //오백원짜리 1개
    System.out.println(c); //백원짜리 1개
    System.out.println(d); //십원짜리 2개
  }
}`,
    options: [`아래 주어진 항목들을 갖고 괄호안의 코드를 작성하시오.
변수 : m
연산자 : / , %
괄호 : [ , ] , ( , )
정수 : 1000, 500, 100, 10`],
    imageUrl: null
  },
  {
    id: 123,
    answer: `박영희
박영희
박영희`,
    question: "다음은 C언어의 코드이다. 보기의 조건에 맞추어 알맞은 출력값을 작성하시오.",
    passageOrCode: `#include<stdio.h>
#include<stdlib.h>
char n[30];
char *test() {
  printf("입력하세요 : ");
  gets(n);
  return n;
}
int main() {
  char * test1;
  char * test2;
  char * test3;
  test1 = test();
  test2 = test();
  test3 = test();
  printf("%s\n",test1);
  printf("%s\n",test2);
  printf("%s",test3);
}`,
    options: ["입력값은 홍길동, 김철수, 박영희 순서로 주어진다."],
    imageUrl: null
  },
  {
    id: 124,
    answer: `INSTER INTO 학생(학번,이름,학년,전공,전화번호)
VALUES(9830287,'뉴진스',3,'경영학개론','010-1234-1234');`,
    question: "아래 보기 조건에 맞게 SQL문을 작성하시오.",
    passageOrCode: `CREATE TABLE 학생 (
      학번 int,
      이름 varchar(20),
      학년 int,
      전공 varchar(30),
      전화번호 varchar(20)
    );`,
    options: [`학번	이름	학년	전공	전화번호
9830287	뉴진스	3	경영학개론	010-1234-1234`, "문자열일 경우 작은따음표를 사용할 것"],
    imageUrl: null
  },
  {
    id: 125,
    answer: "BCD",
    question: "다음은 C언어의 문제이다. 알맞은 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
void main(){
  int n[3] = {73, 95, 82};
  int sum = 0;
  for(int i=0;i<3;i++){
    sum += n[i];
  }
  switch(sum/30){
    case 10:
    case 9: printf("A");
    case 8: printf("B");
    case 7:
    case 6: printf("C");
    default: printf("D");
  }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 126,
    answer: "ㅇ",
    alt: "조건 커버리지",
    question: "다음은 테스트 커버리지에 대한 내용이다. 조건을 읽고 보기에 맞는 기호를 작성하시오.",
    passageOrCode: `- 프로그램 내에 있는 결정포인트 내의 모든 각 개별 조건식에 대한 모든 가능한 결과(참/거짓)에 대해 적어도 한번 수행한다.
- 소프트웨어 테스트 수행시 소스코드를 어느 수준까지 수행하였는가를 나타내는 기준을 나타낸다.
- 실제 업무에서는 다양한 툴을 사용하여 테스팅 수행한다.
- True/False에 충분한 영향을 줄 수 없는 경우가 발생 가능한 한계점을 지님.`,
    options: ["ㄱ. 구문 커버리지", "ㄴ. 경로 커버리지", "ㄷ. 조건/결정 커버리지", "ㄹ. 변형 조건/결정 커버리지", "ㅂ. 다중 조건 커버리지", "ㅅ. 결정 커버리지", "ㅇ. 조건 커버리지"],
    imageUrl: null
  },
  {
    id: 127,
    answer: "505",
    question: "다음은 소스코드의 알맞은 출력을 작성하시오.",
    passageOrCode: `#include <stdio.h>
int main(){
  int c = 0;
  for(int i = 1; i <= 2023; i++) {
    if(i%4 == 0) c++;
  }
  printf("%d", c);
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 128,
    answer: "템퍼프루핑",
    question: "다음 내용에 알맞는 답을 작성하시오.",
    passageOrCode: `소프트웨어에서 워터마크 삭제등과 같이 소프트웨어가 불법으로 변경(unauthorized modifications)되었을 경우, 그 소프트웨어가 정상 수행되지 않게 하는 기법이다.
소프트웨어 변조 공격을 방어하기 위해 프로그램에 변조검증코드(tamper-proofing code)를 삽입하는 것도 한 방법으로
변조검증코드의 용도는 첫째 프로그램이 변경되었는지를 탐지하는 것이고, 둘째는 변조가 탐지되었다면 프로그램이 실행되지 않게 한다.
소프트웨어의 위변조 방지 역공학 기술의 일종으로 디지털 콘텐츠의 관련 산업이나 전자상거래 또는 보호해야 할 소프트웨어가 있는 다양한 산업 분야에 적용된다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 129,
    answer: "213465",
    question: "다음은 C언어 문제이다. 알맞은 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
#define MAX_SIZE 10
 
int isWhat[MAX_SIZE];
int point= -1;
 
int isEmpty() {
    if (point == -1) return 1;
    return 0;
}
 
int isFull() {
    if (point == 10) return 1;
    return 0;
}
 
void into(int num) {
    if (point >= 10) printf("Full");
    else isWhat[++point] = num;
}
 
int take() {
    if (isEmpty() == 1) printf("Empty");
    else return isWhat[point--];
    return 0;
}
 
int main(int argc, char const *argv[]){
    int e;
    into(5); into(2);
 
    while(!isEmpty()){
        printf("%d", take());
        into(4); into(1); printf("%d", take());
        into(3); printf("%d", take()); printf("%d", take());
        into(6); printf("%d", take()); printf("%d", take());
    }
    
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 130,
    answer: "요구조건 분석 개념적 설계 논리적 설계 물리적 설계 구현",
    question: "데이터베이스 설계 순서에 관한 내용이다. 보기를 이용하여 괄호안에 알맞은 내용을 작성하시오. ",
    passageOrCode: null,
    options: ["구현", "요구조건 분석", "개념적 설계", "물리적 설계", "논리적 설계"],
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FIiEWY%2FbtsC4tQ9MMP%2FAAAAAAAAAAAAAAAAAAAAAO23cQIkL-Fx7knyFogaMP7YJ-Srme1lV66jaMcWyWAp%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DjSaRAMv8V5ksEyes7Il7gY4b6Ag%253D"
  },
  {
    id: 131,
    answer: "Singleton Visitor",
    question: "다음은 디자인 패턴에 관한 문제이다. 보기에서 알맞는 답을 작성하시오.",
    passageOrCode: `1.
- 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴한다.
- 주로 공통된 객체를 여러개 생성해서 사용하는 DBCP(DataBase Connection Pool)와 같은 상황에서 많이 사용한다.
2.
- 호스트 객체의 내부 상태에 접근할 수 있는 방법을 제공하여 호스트 객체에 연산을 추가할 수 있도록 한다.
- 이 패턴은 보통 합성 구조의 원소들과 상호 작용하는 데 사용되며, 기존 코드를 변경하지 않고 새로운 기능을 추가하는 방법이다.`,
    options: [
      "생성패턴: Singleton, Factory Method, Builder",
      "구조패턴: Adapter, Bridge, Decorator",
      "행위패턴: Observer, Strategy, Visitor"
    ],
    imageUrl: null
  },
  {
    id: 132,
    answer: "hamming FEC BEC parity CRC",
    question: "다음 내용에서 설명하는 문제에 대해 보기에 알맞는 답을 골라 작성하시오.",
    passageOrCode: `( 1 ) Code는 데이터 전송시 1 비트의 에러를 정정할 수 있는, 오류정정부호의 일종으로 미국의 Bell 연구소의 Hamming에 의해 고안되었다. 선형블록부호 및 순회부호에 속에 속한다.
( 2 ) 은/는 송신측이 전송할 문자나 프레임에 부가적 정보(Redundancy)를 첨가하여 전송하고 수신측이 이 부가적 정보를 이용하여 에러검출 및 에러정정을 하는 방식이다.
( 3 ) 은/는 데이터 전송 과정에서 오류가 발생하면 송신 측에 재전송을 요구하는 방식이다. 오류를 검출하는 방법은 Parity검사와 CRC, 블록 합 검사 등이 있다.
( 4 ) 은/는 데이터가 저장장치 내의 한 장소에서 다른 장소로 이동되거나, 컴퓨터들간에 전송될 때, 데이터가 유실 또는 손상되었는지 여부를 점검하는 기술과 관련된 용어이다.
( 5 ) 은/는 네트워크 등을 통하여 데이터를 전송할 때 전송된 데이터에 오류가 있는지를 확인하기 위한 체크값을 결정하는 방식을 말한다.`,
    options: [
      "EAC",
      "FEC",
      "hamming",
      "CRC",
      "PDS",
      "parity",
      "BEC"
    ],
    imageUrl: null
  },
  {
    id: 133,
    answer: "ㄷ ㄴ ㅂ ㅊ ㅋ",
    alt: "정보 감독 비번호 비동기균형 비동기응답",
    question: "다음은 HDLC 프로토콜에 대한 설명이다. 보기 안에 알맞는 답을 골라 작성하시오.",
    passageOrCode: `( 1 ) 프레임은 Seq, Next, P/F의 필드를 가진다. 또한 맨 처음 비트를 0으로 가진다. Seq는 송신용 순서번호를 가지고 있다. Next는 응답용 순서번호를 가진다. P/F는 P가 1로 설정된 경우 주국에서 종국에 데이터 전송을 허용하는 것을 의미하고 F가 1로 설정된 경우 종국에서 주국으로 데이터 전송을 하는 것을 의미한다.
( 2 ) 프레임은 맨 앞의 필드가 1로 되어 있어 정보 프레임이 아니라는 것을 나타내고 다음 비트가 0이 나와있다. Type의 경우에는 2비트를 가지고 있어 4가지의 종류로 나누어진다. 데이터를 보내는 역할이 아니라 응답의 기능을 수행하므로 Seq에 대한 값은 필요가 없고 다음 프레임을 요구하는 Next만 존재한다.
( 3 ) 프레임은 순서 번호가 없는 프레임을 의미한다. 첫 번째 비트와 두 번째 비트가 모두 1로 설정되어 있다. 여러 종류를 가지고 있는데 Type의 2비트와 Modifier의 3비트를 합쳐 5비트를 통해 종류를 나눈다.
( 4 ) 은/는 두 호스트 모두 혼합국으로 동작한다. 양쪽에서 명령과 응답을 전송할 수 있다.
( 5 ) 은/는 불균형 모드로 주국의 허락 없이 종국에서 데이터를 전송할 수 있다.`,
    options: [
      "ㄱ. 연결제어",
      "ㄴ. 감독",
      "ㄷ. 정보",
      "ㄹ. 양방향 응답",
      "ㅁ. 익명",
      "ㅂ. 비번호",
      "ㅅ. 릴레이",
      "ㅇ. 동기균형",
      "ㅈ. 동기응답",
      "ㅊ. 비동기균형",
      "ㅋ. 비동기응답"
    ],
    imageUrl: null
  },
  {
    id: 134,
    answer: `true
false
true
true`,
    question: "다음은 자바에 대한 문제이다. 알맞은 출력값을 작성하시오.",
    passageOrCode: `public class Main {
    public static void main(String[] args) {
        String str1 = "Programming";
        String str2 = "Programming";
        String str3 = new String("Programming");
        println(str1 == str2)
        println(str1 == str3)
        println(str1.equals(str3))
        print(str2.equals(str3))
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 135,
    answer: "DES AES ARIA SEED / RSA ECC",
    question: "다음 보기는 암호화 알고리즘에 대한 내용이다. 대칭키에 해당하는 보기의 내용을 작성하시오. ('/'로 구분하시오.)",
    passageOrCode: `대칭키 : ( )
비대칭키 : ( )`,
    options: [
      "DES",
      "RSA",
      "AES",
      "ECC",
      "ARIA",
      "SEED"
    ],
    imageUrl: null
  },
  {
    id: 136,
    answer: "해시",
    alts: ["해싱", "hash"],
    question: "다음 괄호안에 알맞는 답을 작성하시오.",
    passageOrCode: `- ( ) 란 임의의 크기를 가진 데이터(Key)를 고정된 크기의 데이터(Value)로 변화시켜 저장하는 것이다.
- 키에 대한 ( ) 값을 사용하여 값을 저장하고 키-값 쌍의 갯수에 따라 동적으로 크기가 증가한다.
- ( ) 값 자체를 index로 사용하기 때문에 평균 시간복잡도가 O(1) 로 매우 빠르다.
- ( ) 함수는 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다.
- ( ) 함수는 큰 파일에서 중복되는 레코드를 찾을 수 있기 때문에 데이터베이스 검색이나 테이블 검색의 속도를 가속할 수 있다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 137,
    answer: "CASCADE",
    question: "다음 보기의 SQL문에서 괄호안에 알맞는 단어를 작성하시오.",
    passageOrCode: "학생 테이블을 참조하는 다른 VIEW나 제약 조건까지 모두 삭제되어야 한다.",
    options: ["DROP VIEW 학생 ( )"],
    imageUrl: null
  },
  {
    id: 138,
    answer: ">",
    question: "다음 코드는 선택정렬 구현에 관한 문제이다. 오름차순으로 정렬할 경우 빈칸에 알맞는 연산자를 보기에서 골라 작성하시오.",
    passageOrCode: `#include <stdio.h>
int main() {
    int E[] = {64, 25, 12, 22, 11};
    int n = sizeof(E) / sizeof(E[0]);
    int i = 0;
    do {
        int j = i + 1;
        do {
            if (E[i]( ) E[j]) {
                int tmp = E[i];
                E[i] = E[j];
                E[j] = tmp;
            }
            j++;
        } while (j < n);
        i++;
    } while (i < n - 1);
    for (int i = 0; i <= 4; i++)
        printf("%d ", E[i]);
}`,
    options: [
      "<",
      "<=",
      "=>",
      ">",
      "==",
      "/",
      "%"
    ],
    imageUrl: null
  },
  {
    id: 139,
    answer: "engneing",
    question: "다음 파이썬 코드에서 알맞는 출력값을 작성하시오.",
    passageOrCode: `a = "engineer information processing"
b = a[:3]
c = a[4:6]
d = a[28:]
e = b + c + d
print(e)`,
    options: null,
    imageUrl: null
  },
  {
    id: 140,
    answer: "스텁 드라이버",
    question: "다음 설명에 대한 알맞는 답을 작성하시오.",
    passageOrCode: `1.
- 하향식 테스트 시 상위 모듈은 존재하나 하위 모듈이 없는 경우의 테스트를 위해 임시 제공되는 모듈이다.
- 특별한 목적의 소프트웨어를 구현하는 것으로 컴포넌트를 개발하거나 테스트할 때 사용된다.
- 서버-클라이언트 구조에서 서버만 구현된 상태로 테스트를 해보고 싶을때 단순히 값만 넘겨주는 가상의 클라이언트를 만들어서 테스트 할 수 있다.
2.
- 상향식 테스트 시 상위 모듈 없이 하위 모듈이 존재할 때 하위 모듈 구동 시 자료 입출력을 제어하기 위한 제어 모듈(소프트웨어)이다.
- 서버-클라이언트 구조에서 클라이언트만 구현된 상태로 테스트를 해보고 싶을때 접속 인증 등의 간단한 기능만 하는 가상의 서버를 만들어서 테스트 할 수 있다.`,
    options: null,
    imageUrl: null
  },
/* 2023년 3회 */
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
    printf("%d\\n", *d1.numPtr);
    printf("%d\\n", *d2( ) numPtr);
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
    printf("%s\\n", p);
    printf("%s\\n", p + 1);
    printf("%c\\n", *p);
    printf("%c\\n", *(p + 3));
    printf("%c\\n", *p + 4);
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
/* 2022년 1회 */
  {
    id: 161,
    answer: "0",
    question: "아래 설명에 맞는 RAID 단계를 숫자로 작성하시오.",
    passageOrCode: `- Striping(스트라이핑) 구현 방식
- I/O 로드의 분산으로 매우 빠른 속도
- 데이터를 블럭으로 분할 저장하며, 각 블럭은 다른 디스크로 나뉘어 저장`,
    options: null,
    imageUrl: null
  },
  {
    id: 162,
    answer: "ㅁ ㄴ",
    alt: "redo undo",
    question: "다음 설명을 확인하여 해당하는 항목을 보기에서 찾아 적으시오.",
    passageOrCode: `1. 오류가 발생하기 전까지의 사항을 로그(log)로 기록해 놓고, 이전 상태로 되돌아간 후, 실패가 발생하기 전까지의 과정을 그대로 따라가는 현상
2. 작업을 취소하여 트랜잭션을 이전 상태로 되돌리는 것`,
    options: ["ㄱ. ROLLBACK", "ㄴ. UNDO", "ㄷ. LOG", "ㄹ. COMMIT", "ㅁ. REDO", "ㅂ. RECOVERY", "ㅅ. BACKUP", "ㅇ. CHECK"],
    imageUrl: null
  },
  {
    id: 163,
    answer: "2000",
    question: "다음 자바 문법에 알맞는 출력 결과를 작성하시오.",
    passageOrCode: `class A {
    int a;
    int b;
}
public class Main {
    static void func1(A m) {
        m.a *= 10;
    }
    static void func2(A m) {
        m.a += m.b;
    }
    public static void main(String args[]) {
        A m = new A();
        m.a = 100;
        func1(m);
        m.b = m.a;
        func2(m);
        System.out.printf("%d", m.a);
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 164,
    answer: "ORDER score DESC",
    question: "다음 SQL 결과에 알맞는 쿼리를 작성하시오.",
    passageOrCode: `SELECT name, score FROM 성적 ( 1 ) BY ( 2 ) ( 3 )
성적을 내림차순으로 정렬하는 쿼리를 완성하시오.`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FuEqo5%2FbtrCITDzsQ5%2FAAAAAAAAAAAAAAAAAAAAAGpz6sul64daWvkKDeHLmkGeeTlmJGv8rtI27qb1-rRW%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DZCQwq7G%252FXGe4ZZLAqt1NVaT68k8%253D"
  },
  {
    id: 165,
    answer: "삭제 이상",
    alt: "삭제",
    question: "데이터베이스의 이상현상 중, 다음 설명해 해당하는 이상현상을 작성하시오.",
    passageOrCode: "데이터를 삭제할 경우 원하지 않는 다른 데이터도 삭제되어버리는 이상",
    options: null,
    imageUrl: null
  },
  {
    id: 166,
    answer: "a= 20 b= 2",
    question: "다음은 파이썬 코드에서 출력되는 a와 b의 값을 작성하시오.",
    passageOrCode: `def exam(num1, num2=2):
    print('a=', num1, 'b=', num2)

exam(20)`,
    options: null,
    imageUrl: null
  },
  {
    id: 167,
    answer: "ㅅ ㄱ ㄷ",
    alt: "extend pop reverse",
    question: "다음 설명과 관련된 답을 보기에서 골라 작성하시오.",
    passageOrCode: `1. 요소를 확장해준다는 의미를 가지고 있으며, 모든 항목을 하나의 요소로 추가
2. 리스트 내부 요소를 꺼내주는 함수로써, 그 요소는 리스트 안에서 삭제하고 그 값을 반환
3. 리스트 내부의 요소의 순서는 뒤집는 역할`,
    options: ["ㄱ. pop()", "ㄴ. push()", "ㄷ. reverse()", "ㄹ. index()", "ㅁ. write()", "ㅂ. sort()", "ㅅ. extend()", "ㅇ. copy()"],
    imageUrl: null
  },
  {
    id: 168,
    answer: "TKIP",
    question: "다음 아래 단어를 영어 약자로 작성하시오.",
    passageOrCode: "임시 키 무결성 프로토콜",
    options: null,
    imageUrl: null
  },
  {
    id: 169,
    answer: "NUI",
    question: "다음 중, 설명에 대한 답을 영어 약자로 작성하시오.",
    passageOrCode: "키보드나 마우스와 같은 장치 없이 말이나 행동 그리고 감정과 같은 인간의 자연스러운 표현으로 컴퓨터나 장치를 제어할 수 있는 환경",
    options: null,
    imageUrl: null
  },
  {
    id: 170,
    answer: "ㄱ ㅁ",
    question: "다음은 분석도구에 대한 설명으로 보기에 알맞는 기호를 작성하시오.",
    passageOrCode: `1. 소스 코드의 실행 없이, 코드의 의미를 분석해 결함을 찾아내는 원시적 코드 분석 기법
2. 소스 코드를 실행하여 프로그램 동작이나 반응을 추적하고 코드에 존재하는 메모리 누수, 스레드 결함 등을 분석`,
    options: ["ㄱ. static Analysis", "ㄴ. Running Analysis", "ㄷ. Test Execution", "ㄹ. Performance", "ㅁ. Dynamic Analysis", "ㅂ. Test Control", "ㅅ. Test Harness", "ㅇ. Test Monitoring"],
    imageUrl: null
  },
  {
    id: 171,
    answer: "Car",
    question: "다음 Java 코드 중에서 밑줄에 들어갈 알맞는 코드를 작성하시오.",
    passageOrCode: `class Car implements Runnable {
    int a;
    public void run() {
        system.out.println("message");
    }
}
public class Main {
    public static void main(String args[]) {
        Thread t1 = new Thread(new ___());
        t1.start();
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 172,
    answer: "JUnit",
    question: "다음 설명에 대한 알맞는 단어를 작성하시오.",
    passageOrCode: "자바 프로그래밍 언어를 이용한 xUnit의 테스트 기법으로써 숨겨진 단위 테스트를 끌어내어 정형화시켜 단위 테스트를 쉽게 해주는 테스트용 Framework",
    options: null,
    imageUrl: null
  },
  {
    id: 173,
    answer: "ㄷ ㄹ ㅂ",
    question: "다음 보기 중에서 블랙박스 테스트 기법을 3가지 골라 작성하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FqF3gz%2FbtrCLADst4N%2FAAAAAAAAAAAAAAAAAAAAAPMlILODV_JxRx5zW8aFrSoy4091ZPX6hQX3VcFjaElc%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DobNZTlhXDYKURKwzNU1jcjNfTVs%253D"
  },
  {
    id: 174,
    answer: "120",
    question: "다음 소스코드에서 입력값이 5가 들어왔을때 출력되는 값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
int func(int a) {
    if (a <= 1) return 1;
    return a * func(a - 1);
}
int main() {
    int a;
    scanf("%d", &a);
    printf("%d", func(a));
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 175,
    answer: "> % /",
    question: "다음 중, 괄호 ( ) 안에 들어갈 연산자를 써서 정수를 역순으로 출력하는 알맞는 답을 작성하시오.",
    passageOrCode: `#include <stdio.h>
int main() {
    int number = 1234;
    int div = 10;
    int result = 0;
    while (number( 1 ) 0) {
        result = result * div;
        result = result + number( 2 ) div;
        number = number( 3 ) div;
    }
    printf("%d", result);
    return 0;
}`,
    options: ["결과 : 4321"],
    imageUrl: null
  },
  {
    id: 176,
    answer: "ISMS",
    alt: "Information Security Management System",
    question: "다음 설명에 대한 답을 영어 약자로 작성하시오.",
    passageOrCode: "정보보호 관리체계의 영문 약자",
    options: null,
    imageUrl: null
  },
  {
    id: 177,
    answer: "유일성 최소성",
    question: "다음 설명 중, 괄호 ( ) 안에 들어가는 알맞는 답을 작성하시오.",
    passageOrCode: `1. 슈퍼키는 ( 1 ) 의 속성을 갖는다.
2. 후보키는 ( 1 ) 와/과 ( 2 ) 의 속성을 갖는다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 178,
    answer: "ㄷ",
    alt: "Watering Hole",
    question: "다음 설명과 관련된 답을 보기에서 찾아서 작성하시오.",
    passageOrCode: "이 공격은 APT 공격에서 주로 쓰이는 공격으로, 공격 대상이 방문할 가능성이 있는 합법적인 웹 사이트를 미리 감염시킨 뒤, 잠복하고 있다가 공격 대상이 방문하면 대상의 컴퓨터에 악성코드를 설치하는 방식",
    options: ["ㄱ. Pharming", "ㄴ. Drive-by Download", "ㄷ. Watering Hole", "ㄹ. Business SCA", "ㅁ. Phishing", "ㅂ. Cyber Kill Chain", "ㅅ. Ransomware", "ㅇ. Sniffing"],
    imageUrl: null
  },
  {
    id: 179,
    answer: "29",
    question: "다음 소스코드가 실행할 때의 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
int isPrime(int number) {
    int i;
    for (i = 2; i < number; i++) {
        if (number % i == 0) return 0;
    }
    return 1;
}
int main(void) {
    int number = 13195, max_div = 0, i;
    for (i = 2; i < number; i++)
        if (isPrime(i) == 1 && number % i == 0)
            max_div = i;
    printf("%d", max_div);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 180,
    answer: "단위 테스트 통합 테스트 시스템 테스트 인수 테스트",
    question: "다음은 V모델에서의 테스트 단계에 대한 설명으로 괄호안에 들어갈 답을 작성하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FdVq2S2%2FbtrNGv5Kkvq%2FAAAAAAAAAAAAAAAAAAAAAECXmeFPRuCyFDLTLjhAHYUrMmgrJWfrNoBQ6swcHJHK%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3D1n90rCbH2it3KHTFygoqdjjthPI%253D"
  }
];