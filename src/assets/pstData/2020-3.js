// 2020년 3회
export const pstData_2020_3 = [
  {
    id: 381,
    answer: "리팩토링",
    question: "외부 동작을 유지하면서 코드 구조를 개선해 가독성과 유지보수성을 높이는 작업은?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["Refactoring","리팩터링"]
  },
  {
    id: 382,
    answer: "0",
    question: "C언어 출력값을 쓰시오.",
    passageOrCode: `#include <stdio.h>
int main(void) {
    int index = 0, product = 0;
    while (index < 10) { index++; product *= index; }
    printf("%d", product);
    return 0;
}`,
    options: null,
    imageUrl: null,
    alts: []
  },
  {
    id: 383,
    answer: "OSPF",
    question: "Dijkstra 기반의 링크 상태 내부 라우팅 프로토콜은?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["Open Shortest Path First"]
  },
  {
    id: 384,
    answer: "형상 통제",
    question: "형상 항목의 변경을 검토·승인하고 변경 활동을 관리하는 형상관리 활동은?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["형상 제어","Configuration Control"]
  },
  {
    id: 385,
    answer: "프로토콜",
    question: "통신 메시지 전달·확인·재전송을 정한 규칙은?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["protocol","통신 프로토콜","통신 규약"]
  },
  {
    id: 386,
    answer: "ICMP",
    question: "IP 오류와 제어 메시지를 전달하는 프로토콜은?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["Internet Control Message Protocol","인터넷 제어 메시지 프로토콜"]
  },
  {
    id: 387,
    answer: "1234561 124567",
    question: "모든 분기를 거치는 경로 두 개를 쓰시오.",
    passageOrCode: `1→2 / 2: 참→3, 거짓→4 / 3→4→5→6 / 6: 참→1, 거짓→7`,
    options: null,
    imageUrl: null,
    alts: ["1234567 124561","124567 1234561","124561 1234567"]
  },
  {
    id: 388,
    answer: "SELECT 과목이름, MIN(점수) AS 최소점수, MAX(점수) AS 최대점수 FROM 성적 GROUP BY 과목이름 HAVING AVG(점수) >= 90;",
    question: "평균 90 이상 과목의 이름·최소·최대 점수를 조회하는 SQL은?",
    passageOrCode: `테이블: 성적(과목이름, 점수) / GROUP BY·HAVING·AS 사용 / 별칭: 최소점수, 최대점수`,
    options: null,
    imageUrl: null,
    alts: ["SELECT 과목이름, MIN(점수) AS 최소점수, MAX(점수) AS 최대점수 FROM 성적 GROUP BY 과목이름 HAVING AVG(점수) >= 90"]
  },
  {
    id: 389,
    answer: "DELETE FROM 학생 WHERE 이름 = '민수';",
    question: "학생에서 이름이 민수인 행을 삭제하는 SQL은?",
    passageOrCode: `SQL 삭제`,
    options: null,
    imageUrl: null,
    alts: ["DELETE FROM 학생 WHERE 이름 = '민수'"]
  },
  {
    id: 390,
    answer: "÷",
    question: "다른 릴레이션의 모든 조건을 만족시키는 디비전 연산 기호는?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: []
  },
  {
    id: 391,
    answer: "헝가리안 표기법",
    question: "식별자 앞에 자료형을 나타내는 접두어를 붙이는 표기법은?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["헝가리안","Hungarian Notation","Hungarian Case"]
  },
  {
    id: 392,
    answer: "블랙박스 테스트",
    question: "동등분할·경계값 분석이 속하는 테스트 유형은?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["명세 기반 테스트","블랙박스","Black Box","Black Box Test","Black Box Testing","명세 기반 검사"]
  },
  {
    id: 393,
    answer: "234",
    question: "C언어 출력값을 쓰시오.",
    passageOrCode: `#include <stdio.h>
int units(void) { return 4; }
int tens(void) { return 30 + units(); }
int hundreds(void) { return 200 + tens(); }
int main(void) { printf("%d\\n", hundreds()); return 0; }`,
    options: null,
    imageUrl: null,
    alts: []
  },
  {
    id: 394,
    answer: "스키마",
    question: "데이터베이스의 구조와 제약조건을 정의한 명세는?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["DB 스키마","데이터베이스 스키마","Schema","Database Schema"]
  },
  {
    id: 395,
    answer: "Vehicle name : Spark",
    question: "Java 출력값을 쓰시오.",
    passageOrCode: `abstract class Vehicle {
    private String name;
    abstract String getName(String name);
    String getName() { return "Vehicle name : " + name; }
    void setName(String name) { this.name = name; }
}
class Car extends Vehicle {
    Car(String name) { setName(name); }
    String getName(String name) { return "Car name : " + name; }
    String getName(byte[] name) { return "Car name : " + name; }
}
class Main {
    public static void main(String[] args) {
        Vehicle vehicle = new Car("Spark");
        System.out.print(vehicle.getName());
    }
}`,
    options: null,
    imageUrl: null,
    alts: []
  },
  {
    id: 396,
    answer: "직관성",
    question: "누구나 쉽게 이해하고 사용할 수 있게 하는 UI 설계 원칙은?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["Intuitiveness"]
  },
  {
    id: 397,
    answer: "30",
    question: "Java 출력값을 쓰시오.",
    passageOrCode: `class Main {
    public static void main(String[] args) {
        int number = 0, total = 0;
        while (number < 10) {
            number++;
            if (number % 2 == 1) continue;
            total += number;
        }
        System.out.println(total);
    }
}`,
    options: null,
    imageUrl: null,
    alts: []
  },
  {
    id: 398,
    answer: "포인트 투 포인트 허브 앤 스포크",
    question: "Message Bus·Hybrid 이외의 EAI 유형 두 가지는? (순서 무관)",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["Point-to-Point Hub & Spoke"],
    answerParts: [["포인트 투 포인트","Point-to-Point","Point to Point"],["허브 앤 스포크","Hub & Spoke","Hub and Spoke","Hub-and-Spoke"]],
    answerOrder: "unordered"
  },
  {
    id: 399,
    answer: "생성자",
    question: "C++에서 객체 생성 시 자동으로 호출되는 초기화 함수는?",
    passageOrCode: null,
    options: null,
    imageUrl: null,
    alts: ["Constructor","생성자 함수"]
  },
  {
    id: 400,
    answer: "ALTER ADD",
    question: "주소 속성을 추가하는 SQL 빈칸은?",
    passageOrCode: `(1) TABLE 학생 (2) 주소 VARCHAR(20);`,
    options: null,
    imageUrl: null,
    alts: [],
    answerParts: [["ALTER"],["ADD"]],
    answerOrder: "ordered"
  }
];
