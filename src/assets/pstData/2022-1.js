// 2022년 1회
export const pstData_2022_1 = [
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
  },
];
