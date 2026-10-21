export const pstData_2021_2 = [
  {
    id: 301,
    answer: "애드혹 네트워크",
    alts: ["Ad-hoc Network", "Ad hoc Network", "애드혹", "Ad-hoc", "Ad hoc"],
    question: "네트워크 및 인터넷과 관련된 다음 설명에 해당하는 용어를 쓰시오.",
    passageOrCode: `- 재난 및 군사 현장과 같이 별도의 고정된 유선망을 구축할 수 없는 장소에서 모바일 호스트(Mobile Host)만을 이용하여 구성한 네트워크이다.
- 망을 구성한 후 단기간 사용되는 경우나 유선망을 구성하기 어려운 경우에 적합하다.
- 멀티 홉 라우팅 기능을 지원한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 302,
    answer: "UX UI",
    alts: ["User Experience User Interface", "사용자 경험 사용자 인터페이스"],
    question: "다음 괄호에 알맞은 용어를 쓰시오.",
    passageOrCode: `- (  1  ) : 사용자가 시스템이나 서비스를 이용하면서 느끼고 생각하게 되는 총체적인 감정 및 경험
- (  2  ) : 사용자와 시스템 간의 상호작용이 원활하게 이뤄지도록 도와주는 장치나 소프트웨어`,
    options: null,
    imageUrl: null
  },
  {
    id: 303,
    answer: "원자성",
    alt: "Atomicity",
    question: "트랜잭션의 모든 연산이 반영되거나 모두 취소되는 특성은?",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 304,
    answer: "2",
    question: "데이터베이스에 대한 다음 설명에서 괄호에 공통으로 들어갈 알맞은 답을 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FnmVMb%2FbtrL3zbzlmu%2FAAAAAAAAAAAAAAAAAAAAAImyc3CDUUW_5D8lPRbwcBi3Q8IhJjwVp_p8FTRJB_cx%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1793458799%26allow_ip%3D%26allow_referer%3D%26signature%3DhAnA8tK1uL6pTQbh1vL84fU9Tr0%253D"
  },
  {
    id: 305,
    answer: "UPDATE SET",
    question: "SQL과 관련한 다음 설명에서 괄호에 들어갈 알맞은 답을 쓰시오.",
    passageOrCode: `UPDATE문은 테이블에 있는 튜플의 내용을 갱신할 때 사용하는 명령문으로, DML에 해당한다. 다른 DML로는 INSERT, DELETE가 있으며, 각각 새로운 튜플을 삽입하건 삭제할 때 사용한다.

다음은 <학부생> 테이블에서 '입학생수'가 300 이상인 튜플의 '학과번호'를 999로 갱신하는 SQL문이다.

(  1  ) 학부생 (  2  ) 학과번호 = 999 WHERE 입학생수 >= 300;`,
    options: null,
    imageUrl: null
  },
  {
    id: 306,
    answer: "ON 학과",
    question: "다음 <사원> 테이블과 <동아리> 테이블을 조인(Join)한 <결과>를 확인하여 <SQL문>의 괄호에 들어갈 알맞은 답을 쓰시오.",
    passageOrCode: `SELECT a.코드, 이름, 동아리명 FROM 사원 a LEFT JOIN 동아리 b (  1  ) a.코드 = b.(  2  ) ;`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FC9CcR%2FbtrLZzpQZzC%2FAAAAAAAAAAAAAAAAAAAAABDOb8yzvrwQFOEx53lUalyLj0H4R-6vBa4ARnQMrmd3%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1793458799%26allow_ip%3D%26allow_referer%3D%26signature%3DVDeK%252BqsDOeDZ4Cj2covHir50H70%253D"
  },
  {
    id: 307,
    answer: "26",
    question: "Python 출력값을 쓰시오.",
    passageOrCode: `value = 100
result = 0
for shift in range(1, 3):
    result = (value >> shift) + 1
print(result)`,
    options: null,
    imageUrl: null
  },
  {
    id: 308,
    answer: "AES",
    alts: ["Advanced Encryption Standard", "고급 암호화 표준"],
    question: "보안 및 암호화와 관련된 다음 설명에 해당하는 용어를 쓰시오.",
    passageOrCode: `- 2001년 미국 표준 기술 연구소(NIST)에서 발표한 대칭키 암호화 알고리즘이다.
- DES의 한계를 느낀 NIST에서 공모한 후 발표하였다.
- 블록 크기는 128비트이며, 키 길이에 따라 128, 192, 256으로 분류된다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 309,
    answer: "ㅂ ㄹ ㄷ",
    question: "테스트에 대한 다음 설명에서 각 지문에 해당하는 커버리지(Coverage)를 <보기>에서 찾아 기호로 쓰시오.",
    passageOrCode: `- (  1  ): 최소 한번은 모든 문장이 수행되도록 구성하는 검증 기준
- (  2  ): 조건식이 참(True)/거짓(False)일 때 수행되도록 구성하는 검증 기준
- (  3  ): (  2  )와/과 달리 조건식에 상관없이 개별 조건이 참(True)/거짓(False)일 때 수행되도록 구성하는 검증 기준`,
    options: [
      "ㄱ. 다중 조건 검증 기준",
      "ㄴ. 선택 검증 기준",
      "ㄷ. 조건 검증 기준",
      "ㄹ. 결정(분기) 검증 기준",
      "ㅁ. 결정(분기)/조건 검증 기준",
      "ㅂ. 구문(문장) 검증 기준"
    ],
    imageUrl: null
  },
  {
    id: 310,
    answer: "이% DESC",
    question: `다음은 <회원> 테이블에서 '이름'이 "이"로 시작하는 회원들을 '가입일' 순으로 내림차순 정렬하는 SQL문이다. 괄호에 들어갈 알맞은 답을 쓰시오.`,
    passageOrCode: `SELECT * FROM 회원 WHERE 이름 LIKE '(  1  )' OREDER BY 가입일 (  2  );`,
    options: null,
    imageUrl: null
  },
  {
    id: 311,
    answer: "ㄹ ㄷ ㄱ",
    question: "모듈에 대한 다음 설명에서 각 지문에 해당하는 응집도를 보기에서 찾아 기호로 쓰시오.",
    passageOrCode: `- (  1  ): 내부의 요소들이 기능적으로 연관성은 없으나, 순차적으로 실행될 때의 응집도
- (  2  ): 서로 다른 기능을 수행하지만 동일한 입력과 출력을 사용할 때의 응집도
- (  3  ): 하나의 기능에 밀접하게 관련되어 있거나 연관되어 있을 때의 응집도`,
    options: [
      "ㄱ. 기능적 응집도",
      "ㄴ. 순차적 응집도",
      "ㄷ. 교환적 응집도",
      "ㄹ. 절차적 응집도",
      "ㅁ. 시간적 응집도",
      "ㅂ. 논리적 응집도",
      "ㅅ. 우연적 응집도"
    ],
    imageUrl: null
  },
  {
    id: 312,
    answer: "가상 회선 방식 데이터그램 방식",
    alts: ["가상 회선 데이터그램", "Virtual Circuit Datagram"],
    question: "네트워크에 관련된 다음 설명에서 괄호에 들어갈 알맞은 용어를 쓰시오.",
    passageOrCode: `- (  1  ): 연결형 통신에서 주로 사용되는 방식으로, 출발지와 목적지의 전송 경로를 미리 연결하여 논리적으로 고정한 후 통신하는 방식
- (  2  ) : 비연결형 통신에서 주로 사용되는 방식으로, 사전에 접속 절차를 수행하지 않고 헤더에 출발지에서 목적지까지의 경로 지정을 위한 충분한 정보를 붙여서 개별적으로 전달하는 방식`,
    options: null,
    imageUrl: null
  },
  {
    id: 313,
    answer: "행위",
    alts: ["Behavioral"],
    question: "디자인 패턴에 관련된 다음 설명에서 괄호에 들어갈 알맞은 용어를 쓰시오.",
    passageOrCode: `디자인 패턴은 모듈 간의 관계 및 인터페이스를 설계할 때 참조할 수 있는 전형적인 해결 방식 또는 예제를 의미한다. 그 중 (    ) 패턴은 클래스나 객체들이 서로 상호작용하는 방법이나 책임 분배 방법을 정의하는 패턴으로 Interpreter, Observer, Command 등이 그 예에 해당한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 314,
    answer: "로킹",
    alts: ["Locking"],
    question: "데이터베이스의 병행제어 기법 중 하나로, 접근한 데이터에 대한 연산을 모두 마칠 때까지 추가적인 접근을 제한함으로써 상호 배타적으로 접근하여 작업을 수행하도록 하는 기법을 쓰시오.",
    passageOrCode: null,
    options: null,
    imageUrl: null
  },
  {
    id: 315,
    answer: "ㅁ ㅅ ㄷ",
    question: "럼바우 데이터 모델링에 대한 다음 설명에서 각 지문에 해당하는 모델링을 보기에서 찾아 기호로 쓰시오.",
    passageOrCode: `1. 다수의 프로세스들 간의 자료 흐름을 중심으로 처리 과정을 표현한 모델링 (예) 자료흐름도(DFD)
2. 시간의 흐름에 따른 객체들 간의 제어 흐름, 상호 작용, 동작 순서 등의 동적인 행위를 표현하는 모델링 (예) 상태 변화도(STD), 사건 추적도
3. 시스템에서 요구되는 객체를 찾아내어 속성과 연산 식별 및 객체들 간의 관계를 규정하여 표시하는 모델링 (예) ER 다이어그램(ERD)`,
    options: [
      "ㄱ. Operation",
      "ㄴ. Sequence",
      "ㄷ. Information",
      "ㄹ. Transaction",
      "ㅁ. Function",
      "ㅂ. I/O",
      "ㅅ. Dynamic",
      "ㅇ. Cause-Effect"
    ],
    imageUrl: null
  },
  {
    id: 316,
    answer: "1024",
    question: "C언어 출력값을 쓰시오.",
    passageOrCode: `#include <stdio.h>
int power(int base, int exponent) {
    int result = 1;
    for (int n = 0; n < exponent; n++) result *= base;
    return result;
}
int main(void) {
    printf("%d", power(2, 10));
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 317,
    answer: "static",
    question: "다음 Java로 구현된 프로그램을 분석하여 괄호에 들어갈 알맞은 답을 쓰시오.",
    passageOrCode: `class Main {
    public static void main(String[] args) {
        System.out.print(Main.check(1));
    }
    (  ?  ) String check(int number) {
        return number >= 0 ? "positive" : "negative";
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 318,
    answer: "8",
    question: "C언어 출력값을 쓰시오.",
    passageOrCode: `#include <stdio.h>
int main(void) {
    int numbers[3], sum = 0;
    *numbers = 1;
    numbers[1] = *numbers + 2;
    numbers[2] = *numbers + 3;
    for (int n = 0; n < 3; n++)
        sum += numbers[n];
    printf("%d", sum);
    return 0;
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 319,
    answer: "11",
    question: "Java 출력값을 쓰시오.",
    passageOrCode: `class Base {
    int sum(int x, int y) {
        return x + y;
    }
}
class Derived extends Base {
    int sum(int x, int y) {
        return x - y + super.sum(x, y);
    }
}
class Main {
    public static void main(String[] args) {
        System.out.println(new Base().sum(3, 2) + new Derived().sum(3, 2));
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 320,
    answer: "스텁",
    alt: "Stub",
    question: "통합 테스트에 관련된 다음 설명에서 괄호에 들어갈 알맞은 답을 쓰시오.",
    passageOrCode: `통합 테스트는 단위 테스트가 끝난 모듈을 통합하는 과정에서 발생하는 오류 및 결함을 찾는 테스트 기법으로, 하위 모듈에서 상위 모듈 방향으로 통합하는 상향식 통합 테스트와 상위 모듈에서 하위 모듈 방향으로 통합하는 하향식 통합 테스트가 있다.
상향식 통합 테스트는 미완성이거나 문제가 있는 상위 모듈을 대체할 수 있는 테스트 드라이버가, 하향식 통합 테스트는 미완성이거나 문제가 있는 하위 모듈을 대체할 수 있는 테스트 (    )이(가) 있어야 원활한 테스트가 가능하다.`,
    options: null,
    imageUrl: null
  }
];
