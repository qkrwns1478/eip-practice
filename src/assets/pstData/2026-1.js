// 2026년 1회
export const pstData_2026_1 = [
  {
    id: 241,
    answer: "106.00",
    question: "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `#include <stdio.h>
 
double arr1(int p[], int len) {
    double av = 0;
    int i;
    for (i = 0; i < len; i++) {
        av += (double) p[i];
    }
    return av / len;
}
 
double arr2(int * p, int len) {
    double av = 0;
    int i;
    for (i = 0; i < len; i++) {
        av += (double)( * (p + i));
    }
    return av / len;
}
 
int main() {
    int arr[10] = {
        80,
        20,
        50,
        55,
        45,
        95,
        55,
        10,
        40,
        80
    };
    int len = 10;
 
    printf("%.2f", arr1(arr, len) + arr2(arr, len));
 
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 242,
    answer: "Bridge Observer",
    alts: ["브리지 옵저버", "ㄱ. Bridge ㄴ. Observer", "ㄱ. 브리지 ㄴ. 옵저버"],
    question: "다음 설명에 해당하는 디자인 패턴의 유형을 괄호( ) 안에 쓰시오. (띄어쓰기로 구분)",
    passageOrCode: `• ( ㄱ ) 패턴은 기능의 클래스 계층과 구현의 클래스 계층을 연결
• ( ㄴ ) 패턴은 한 객체의 상태가 바뀌면 그 객체에 의존`,
    options: null,
    imageUrl: null
  },
  {
    id: 243,
    answer: "요구사항 분석 개념적 설계 논리적 설계 물리적 설계 구현",
    alt: "ㄱ.요구사항 분석 ㄴ.개념적 설계 ㄷ.논리적 설계 ㄹ.물리적 설계 ㅁ.구현",
    question: "데이터베이스(DB) 설계 절차를 순서대로 나타낸 것이다. 각 빈칸에 들어갈 알맞은 용어를 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fbz3PSN%2FdJMcabDWLOf%2FAAAAAAAAAAAAAAAAAAAAAMfACIdyKtB0JQwv0XStEBX054bg-hZUA0mhRO0T_ssC%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1790780399%26allow_ip%3D%26allow_referer%3D%26signature%3Dj3tAOrf22JLF8skKjQcyqYqOzFI%253D"
  },
  {
    id: 244,
    answer: "운영 자원 성능",
    alt: "1. 운영 2. 자원 3. 성능",
    question: "다음은 비기능적 요구사항에 대한 설명이다. 각 항목이 의미하는 요구사항 유형을 보기에서 골라 쓰시오.",
    passageOrCode: `1. 시스템 운영 중 로그 관리 및 모니터링 기능을 제공해야 한다.
2. 시스템 운영 시 최소 메모리 용량을 확보해야 하며, 자원 사용량은 제한 범위 내에 있어야 한다.
3. 사용자 요청에 대한 응답 시간은 최대 1분을 초과하지 않아야 한다.`,
    options: ["신뢰성", "가용성", "운영", "유지보수성", "자원", "성능", "이식성", "보안", "품질"],
    imageUrl: null
  },
  {
    id: 245,
    answer: "ISMS",
    question: "다음 용어의 영문 약자를 쓰시오.",
    passageOrCode: `정보보호 관리체계`,
    options: null,
    imageUrl: null
  },
  {
    id: 246,
    answer: "정보 감독 비번호 비동기 균형 모드 비동기 응답 모드",
    alt: "1. 정보 2. 감독 3. 비번호 4. 비동기 균형 모드 5. 비동기 응답 모드",
    question: "HDLC는 비트 중심의 데이터 링크 제어 프로토콜로, 프레임 단위로 데이터를 전송하며 흐름 제어 및 오류 복구 기능을 제공한다. 다음 설명을 읽고 알맞은 용어를 쓰시오.",
    passageOrCode: `1. HDLC 프레임의 구성 단위로, 실제 사용자 데이터를 전송하는 프레임
2. 데이터 링크의 흐름을 관리하고 오류 제어 및 통신 상태를 감시하는 프레임
3. 순서 번호 없이 링크 설정, 해제, 모드 설정 등 제어 기능을 수행하는 프레임
4. 두 국(Station)이 동등한 위치에서 서로 명령과 응답을 주고받는 모드
5. 종국(Secondary)이 주국(Primary)의 허가 없이도 자발적으로 응답을 전송할 수 있는 모드`,
    options: null,
    imageUrl: null
  },
  {
    id: 247,
    answer: "2",
    question: "다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `class A {
    String f(Object x) {
        return "1";
    }
    
    String g() {
        return f("a"); 
    }
}
 
class B extends A {
    String f(Object x) {
        return "2";
    }
    
    String f(String x) {
        return "3";
    }
}
 
public class Main {
    public static void main(String[] args) {
        A a = new B();
        System.out.println(a.g());
    }
}
`,
    options: null,
    imageUrl: null
  },
  {
    id: 248,
    answer: "veDamuH",
    question: "아래 파이썬 코드가 있다. 입력값으로 HumanDev를 주었을 때 출력되는 결과를 쓰시오.",
    passageOrCode: `i = input()
x = []
 
for word in i.split():
    x.append(word)
 
y = ''.join(x)
z = ''.join(c for c in y[::-1] if c not in 'ong')
 
print(z)
`,
    options: null,
    imageUrl: null
  },
  {
    id: 249,
    answer: "200 3 1",
    alt: "1. 200 2. 3 3. 1",
    question: "아래 조건을 참고하여 각 SQL 구문을 실행했을 때 반환되는 행(Row)의 수를 쓰시오. (단, DEPT 칼럼은 학과명이다.)",
    passageOrCode: `[테이블 조건]
 
STUDENT 테이블에는 다음 세 학과의 학생 정보가 저장되어 있다.
컴퓨터과  50명  · 인터넷과  100명  · 사무자동화과  50
 
[SQL 구문]
 
1. SELECT DEPT FROM STUDENT;
2. SELECT DISTINCT DEPT FROM STUDENT;
3. SELECT COUNT(DISTINCT DEPT) FROM STUDENT
    WHERE DEPT = '컴퓨터과';`,
    options: null,
    imageUrl: null
  },
  {
    id: 250,
    answer: "CONSTRAINT FOREIGN TEAM_ID REFERENCES TEAM_ID2",
    alt: "1. CONSTRAINT 2. FOREIGN 3. TEAM_ID 4. REFERENCES 5. TEAM_ID2",
    question: "아래는 선수(PLAYER) 정보를 관리하는 테이블을 정의하는 SQL 문이다. 팀(TEAM) 테이블의 특정 칼럼을 참조하는 외래키 제약 조건을 추가하려 할 때, 괄호 ①~⑤에 들어갈 적절한 예약어(keyword) 또는 칼럼명을 아래 조건을 참고하여 쓰시오.",
    passageOrCode: `[조건]
 
외래키 제약 조건의 이름은 TEAM_TF 로 지정한다.
PLAYER 테이블의 TEAM_ID 칼럼이 외래키 역할을 한다.
TEAM 테이블의 TEAM_ID2 칼럼을 참조 대상으로 한다.
 
[SQL 문]
 
CREATE TABLE PLAYER (
  PLAYER_ID  CHAR(7)     NOT NULL,
  PLAYER_NAME VARCHAR2(20) NOT NULL,
  TEAM_ID   CHAR(3)     NOT NULL,
  PRIMARY KEY (PLAYER_ID),
  ( 1 ) TEAM_TF
  ( 2 ) KEY ( 3 )
  ( 4 ) TEAM ( 5 )
);`,
    options: null,
    imageUrl: null
  },
  {
    id: 251,
    answer: "192.168.10.0/23 192.168.12.0/23",
    alt: "a. 192.168.10.0/23 b. 192.168.12.0/23",
    question: "두 호스트 a, b의 IP 주소와 서브넷 마스크가 주어졌을 때, 각 호스트가 속한 네트워크 주소를 CIDR 표기법으로 쓰시오.",
    passageOrCode: `[조건]
 
· 호스트 a의 IP 주소: 192.168.11.20
· 호스트 b의 IP 주소: 192.168.12.200
· 서브넷 마스크: 255.255.254.0
 
[구하는 것]
 
a. 호스트 a (192.168.11.20) 가 속한 네트워크 주소
b. 호스트 b (192.168.12.200) 가 속한 네트워크 주소`,
    options: null,
    imageUrl: null
  },
  {
    id: 252,
    answer: "20",
    question: "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `struct fns {
    int* (*fn)(int*);
} mine;
 
int* dummy(int *d) {
    return d + 1;
}
 
int main() {
    struct fns mine;
    int n[] = {16, 32};
    mine.fn = dummy;
    printf("%x", *mine.fn(n));
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 253,
    answer: "9A7A5A3A1A",
    question: "다음은 파이썬에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `lst = list(range(10))
for c in lst[::-2]:
    print(c, end='A')
print()`,
    options: null,
    imageUrl: null
  },
  {
    id: 254,
    answer: "10",
    question: "아래 파이썬 코드를 실행했을 때 출력되는 값을 쓰시오.",
    passageOrCode: `def f(a):
    m = [[x] for x in a]
    b = m[:]
    for i in range(len(b) - 1):
        b[i+1] += b[i]
    return sum(len(x) for x in m)
 
print(f([1, 2, 3, 4]))`,
    options: null,
    imageUrl: null
  },
  {
    id: 255,
    answer: "심볼릭링크",
    question: "다음은 특정 공격 기법에 대한 설명이다. 아래 내용을 읽고 해당하는 공격 기법을 [보기]에서 골라 쓰시오.",
    passageOrCode: `원본 데이터 파일은 별도로 존재하며, 공격자는 해당 파일의 경로를 가리키는 특수 파일을 생성한다. 프로그램이 임시 파일을 생성하는 순간을 틈타 해당 임시 파일을 미리 준비한 특수 파일로 교체한다. 이후 프로그램이 임시 파일의 존재를 확인하면 교체된 파일을 정상으로 인식하고 동작하게 된다.
 
[공격 절차]
1. 공격자는 실제 파일이 아닌, 특정 파일의 경로를 참조하는 특수 파일을 미리 준비한다.
2. 프로그램이 임시 파일을 생성하는 시점을 노려 해당 임시 파일을 준비한 특수 파일로 교체한다.
3. 프로그램이 임시 파일의 존재 여부를 확인할 때, 조건에 부합하면 정상으로 판단하고 동작하며 부합하지 않으면 임시 파일을 삭제한다.`,
    options: ["하드링크", "심볼릭링크", "소프트링크", "정적링크", "동적링크"],
    imageUrl: null
  },
  {
    id: 256,
    answer: "워터링 홀",
    alt: "Watering Hole",
    question: "다음은 특정 보안 공격 기법에 대한 설명이다. 해당하는 공격 기법의 명칭을 쓰시오.",
    passageOrCode: `공격자는 목표 대상이 업무 또는 관심사로 인해 자주 방문하는 합법적인 웹사이트를 사전에 파악한다. 
 
해당 사이트에 악성코드를 삽입하여 감염시켜 놓고, 피해자가 해당 사이트에 접속하는 순간 피해자의 시스템에 악성 프로그램이 자동으로 설치되도록 유도한다. 공격자는 불특정 다수를 노리는 것이 아니라 특정 조직이나 인물을 겨냥하며, 접속자의 IP나 환경 조건을 확인하여 목표 대상에게만 선택적으로 악성코드가 실행되도록 설계하는 경우도 있다. 
 
피해자는 정상적인 사이트를 방문했을 뿐이므로 감염 사실을 인지하기 어렵다는 특징이 있다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 257,
    answer: "1123",
    question: "다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `public class Main {
    public static void main(String[] args) {
        int x1 = 9;
        int x2 = 2;
        String x3 = "3";
        System.out.println(x1 + x2 + "2" + x3);
    }
}
`,
    options: null,
    imageUrl: null
  },
  {
    id: 258,
    answer: "1123",
    question: "다음은 SQL에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
    passageOrCode: `SELECT COUNT(*)
FROM employee e
JOIN dept d ON e.dep_id = d.dept_id
WHERE d.budget > (
    SELECT AVG(budget) FROM dept
);`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbcwdlQ%2FdJMcaduV5BY%2FAAAAAAAAAAAAAAAAAAAAACLQegXzkNQDpKJQCJYGDtH8WcNVf4O8rjbmiTqOe0FD%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1790780399%26allow_ip%3D%26allow_referer%3D%26signature%3D%252F6rKA9HdMsbvIHIKXN17OCYbaQY%253D"
  },
  {
    id: 259,
    answer: "스텁 드라이버",
    alt: "1. 스텁 2. 드라이버",
    question: "다음은 통합 테스트에서 사용되는 더미 모듈에 대한 설명이다. 괄호 안에 들어갈 알맞은 용어를 쓰시오.",
    passageOrCode: `( 1 ) 은/는 하위 모듈을 대신하여 단순한 결과값만 반환하도록 임시로 작성된 더미 모듈로, 하향식 통합 테스트 수행 시 필요하다.
( 2 ) 은/는 상위 모듈을 대신하여 하위 모듈의 데이터 입력과 출력을 확인하기 위한 더미 모듈로, 상향식 통합 테스트 수행 시 필요하다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 260,
    answer: "절차 교환 기능",
    alt: "1. 절차 2. 교환 3. 기능",
    question: "다음은 응집도의 유형에 대한 설명이다. 괄호 안에 들어갈 알맞은 용어를 쓰시오.",
    passageOrCode: `( 1 ) 은/는 모듈이 다수의 관련 기능을 가질 때, 모듈 안의 구성요소들이 그 기능을 순차적으로 수행하는 경우의 응집도이다.
( 2 ) 은/는 동일한 입력과 출력을 사용하여 서로 다른 기능을 수행하는 활동들이 모여 있는 경우의 응집도이다.
( 3 ) 은/는 모듈 내부의 모든 기능이 단일한 목적을 위해 수행되는 경우의 응집도이다.`,
    options: null,
    imageUrl: null
  },
]
