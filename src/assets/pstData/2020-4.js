// 2020년 4회
export const pstData_2020_4 = [
  {
    id: 401,
    answer: "IPv6",
    alts: ["Internet Protocol Version 6", "IP 버전 6"],
    question: "128비트 주소를 사용하는 차세대 IP는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 402,
    answer: "행위",
    alts: ["behavioral", "행위 패턴", "행위 디자인 패턴", "Behavioral Pattern"],
    question: "디자인 패턴의 생성·구조 이외 분류는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 403,
    answer: "패키지 다이어그램",
    alts: ["패키지", "Package", "Package Diagram"],
    question: "탭 달린 폴더 기호와 import 의존 관계를 나타내는 UML은?",
    passageOrCode: `ordering → pricing / ordering --«import»→ products`,
    options: null,
    imageUrl: null
  },
  {
    id: 404,
    answer: "즉각 갱신 회복 기법",
    alts: ["즉시 갱신", "즉각 갱신", "즉시 갱신 기법", "즉각 갱신 기법", "즉시 갱신 회복 기법", "Immediate Update"],
    question: "갱신을 즉시 DB에 반영하고 UNDO·REDO를 사용하는 회복 기법은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 405,
    answer: "n > 0 n % 2",
    alts: ["n >= 1 n % 2", "pos < 8 n % 2", "pos <= 7 n % 2", "n > 0 n & 1", "n >= 1 n & 1", "pos < 8 n & 1", "pos <= 7 n & 1"],
    question: "Java의 이진수 변환 빈칸을 채우시오.",
    passageOrCode: `class Main {
    public static void main(String[] args) {
        int[] bits = new int[8];
        int pos = 0, n = 10;
        while ((1)) {
            bits[pos++] = (2);
            n /= 2;
        }
        for (pos = 7; pos >= 0; pos--) System.out.print(bits[pos]);
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 406,
    answer: "3 5",
    question: "Java 배열 크기 빈칸을 채우시오.",
    passageOrCode: `class Main {
    public static void main(String[] args) {
        int[][] values = new int[(1)][(2)];
        for (int row = 0; row < 3; row++) {
            for (int col = 0; col < 5; col++) {
                values[row][col] = col * 3 + row + 1;
                System.out.print(values[row][col] + " ");
            }
            System.out.println();
        }
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 407,
    answer: "스니핑",
    alts: ["Sniffing", "패킷 스니핑", "Packet Sniffing"],
    question: "네트워크 패킷을 엿듣고 정보를 수집하는 공격은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 408,
    answer: "NAT",
    alts: ["Network Address Translation", "네트워크 주소 변환", "네트워크 주소 변환 기술"],
    question: "사설 IP와 공인 IP 주소를 변환하는 기술은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 409,
    answer: `[1, 2, 3]
7
123
45
6789`,
    question: "Python 출력값을 쓰시오.",
    passageOrCode: `rows = [[1,2,3], [4,5], [6,7,8,9]]
print(rows[0])
print(rows[2][1])
for row in rows:
    for value in row:
        print(value, end='')
    print()`,
    options: null,
    imageUrl: null
  },
  {
    id: 410,
    answer: "블록체인",
    alt: "blockchain",
    question: "P2P 분산 원장에 블록을 연결해 위변조를 방지하는 기술은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 411,
    answer: "하둡",
    alts: ["Hadoop", "Apache Hadoop", "아파치 하둡"],
    question: "범용 컴퓨터에서 대규모 데이터를 분산 처리하는 Java 프레임워크는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 412,
    answer: "삽입 이상 삭제 이상 갱신 이상",
    alts: ["삽입 이상 갱신 이상 삭제 이상", "삭제 이상 삽입 이상 갱신 이상", "삭제 이상 갱신 이상 삽입 이상", "갱신 이상 삽입 이상 삭제 이상", "갱신 이상 삭제 이상 삽입 이상", "삽입 삭제 갱신", "Insertion Anomaly Deletion Anomaly Update Anomaly"],
    question: "DB 이상 현상 세 가지를 쓰시오. (순서 무관)",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 413,
    answer: "준비 실행 대기",
    alts: ["준비 상태 실행 상태 대기 상태", "Ready Running Waiting", "Ready Running Blocked"],
    question: "프로세스 상태를 순서대로 쓰시오.",
    passageOrCode: `① 디스패치 전 ② CPU 사용 중 ③ 입출력 완료 대기`,
    options: null,
    imageUrl: null
  },
  {
    id: 414,
    answer: "샘플링 오라클",
    alts: ["샘플링", "Sampling Oracle", "표본 오라클"],
    question: "일부 입력의 기대 결과만 제공하는 테스트 오라클은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 415,
    answer: "동등분할 테스트",
    alts: ["동치분할 테스트", "동치분할 검사", "동등분할 검사", "동등분할", "동치분할", "Equivalence Partitioning", "Equivalence Partitioning Test"],
    question: "성적 구간별 대표 점수를 검사하는 테스트 기법은?",
    passageOrCode: `구간: 0~59 / 60~69 / 70~79 / 80~89 / 90~100
입력: -10, 30, 65, 75, 85, 95, 110`,
    options: null,
    imageUrl: null
  },
  {
    id: 416,
    answer: "SELECT 학과, COUNT(*) AS '학과별튜플수' FROM 학생 GROUP BY 학과;",
    alts: ["SELECT 학과, COUNT(*) AS '학과별튜플수' FROM 학생 GROUP BY 학과", "SELECT 학과, COUNT(학과) AS '학과별튜플수' FROM 학생 GROUP BY 학과;", "SELECT 학과, COUNT(학과) AS '학과별튜플수' FROM 학생 GROUP BY 학과"],
    question: "학생의 학과별 행 수를 조회하는 SQL은?",
    passageOrCode: `GROUP BY·집계함수·AS 사용 / 별칭: '학과별튜플수' (작은따옴표)`,
    options: null,
    imageUrl: null
  },
  {
    id: 417,
    answer: "유닉스",
    alt: "UNIX",
    question: "벨 연구소에서 개발한 C 기반의 이식성 높은 운영체제는?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 418,
    answer: `KOREA
EA
K
E
M`,
    question: "C언어 출력값을 쓰시오.",
    passageOrCode: `#include <stdio.h>
int main(void) {
    const char *word = "KOREA";
    printf("%s\\n", word);
    printf("%s\\n", word + 3);
    printf("%c\\n", *word);
    printf("%c\\n", *(word + 3));
    printf("%c\\n", *word + 2);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 419,
    answer: "1",
    question: "Java 출력값을 쓰시오.",
    passageOrCode: `class Parent {
    int compute(int n) { return n <= 1 ? n : compute(n-1) + compute(n-2); }
}
class Child extends Parent {
    int compute(int n) { return n <= 1 ? n : compute(n-1) + compute(n-3); }
}
class Main {
    public static void main(String[] args) {
        Parent instance = new Child();
        System.out.print(instance.compute(4));
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 420,
    answer: "가용성",
    alt: "Availability",
    question: "인가된 사용자가 필요할 때 정보와 서비스를 이용할 수 있도록 보장하는 보안 특성은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  }
];
