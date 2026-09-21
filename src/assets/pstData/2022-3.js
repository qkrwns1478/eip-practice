// 2022년 3회
export const pstData_2022_3 = [
{
    id: 201,
    answer: `1 1 3 2
3 4 5 3
3 5 6 4
3 5 5 3`,
    question: "아래는 C언어의 2차원 배열 형태이다. field의 경우 2차원 배열 형태는 예시처럼 출력되므로, 이를 참고하여 mines의 2차원 배열 형태를 작성하시오.",
    passageOrCode: `void main {
    field {{0,1,0,1}, {0,0,0,1}, {1,1,1,0}, {0,1,1,1}};
    mines {{0,0,0,0}, {0,0,0,0}, {0,0,0,0}, {0,0,0,0}};
    int w = 4, h = 4;
    for (y = 0; y < h; y++) {
        for (x = 0; x < w; x++) {
            if (field[y][x] == 0) continue;
            for (i = y - 1; i <= y + 1; i++) {
                for (j = x - 1; j <= x + 1; j++) {
                    if (calculate(w, h, j, i) == 1) {
                        mines[i][j] += 1;
                    }
                }
            }
        }
    }
    for (y = 0; y < h; y++) {
        for (x = 0; x < w; x++)
            printf("%d", mines[y][x]);
        printf("\
");
    }
}
int calculate(w, h, j, i) {
    if (i >= 0 && i < h && j >= 0 && j < w) return 1;
    return 0;
}`,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcCbUxZ%2FbtsC34D6MjF%2FAAAAAAAAAAAAAAAAAAAAAN7qlVhxL0nqGPbxmxuYzdCQqGFVUJi3FfPHHkScqCtR%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3D1EVUZ0RQVWZ8YAm0AUpliTFgAps%253D"
  },
  {
    id: 202,
    answer: "U - X π ⋈",
    question: "아래 예시를 보고 관계 대수에 대한 기호를 작성하시오.",
    passageOrCode: `1. 합집합: A () B
2. 차집합: A () B
3. 카티션 프로덕트: A () B
4. 프로젝트: A () B
5. 조인: A () B`,
    options: null,
    imageUrl: null
  },
  {
    id: 203,
    answer: "Bridge Observer",
    question: "다음은 디자인 패턴에 대한 설명이다. 괄호안에 알맞는 답을 작성하시오.",
    passageOrCode: `( 1 )은/는 기능을 처리하는 클래스와 구현을 담당하는 추상 클래스로 구별한다.
구현뿐 아니라 추상화도 독립적 변경이 필요할 때 브리지 패턴을 사용한다.
기존 시스템에 부수적인 새로운 기능들을 지속적으로 추가할 때 사용하면 유용하며,
새로운 인터페이스를 정의하여 기존 프로그램의 변경 없이 기능을 확장할 수 있다.

( 2 )은/는 한 객체의 상태가 변화하면 객체에 상속되어 있는 다른 객체들에게 변화된 상태를 전달해주는 패턴이다.
일대다 관계를 가지며, 주로 분산된 시스템 간에 이벤트를 생성·발행(Publish)하고, 이를 수신(Subscribe)해야 할 때 이용한다.`,
    options: ["Builder", "Factory Method", "Adapter", "Bridge", "Facade", "Proxy", "Observer", "Mediator"],
    imageUrl: null
  },
  {
    id: 204,
    answer: "24513",
    question: "아래 코드에 대한 출력 값을 작성하시오.",
    passageOrCode: `void main {
    int[] result = int[5];
    int[] arr = [77, 32, 10, 99, 50];
    for (int i = 0; i < 5; i++) {
        result[i] = 1;
        for (int j = 0; j < 5; j++) {
            if (arr[i] < arr[j])
                result[i]++;
        }
    }
    for (int k = 0; k < 5; k++) {
        printf(result[k]);
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 205,
    answer: "192.168.1.127",
    question: "아래 코드에 대한 출력 값을 작성하시오.",
    passageOrCode: "첫번째 네트워크 주소가 192.168.1.0/24일때 FLSM 3개로 분할했을때 두번째 네트워크 브로드캐스트 IP를 10진수로 변환한 값을 작성하시오.",
    options: null,
    imageUrl: null
  },
  {
    id: 206,
    answer: "ㄴ",
    alt: "Boundary Value Analysis",
    question: "아래 표를 확인하여 가장 적절한 것의 기호를 고르시오.",
    passageOrCode: null,
    options: ["ㄱ. Equivalence Partition", "ㄴ. Boundary Value Analysis", "ㄷ. Condition Test", "ㄹ. Cause-Effect Graph",
      "ㅁ. Error Guess Comparison Test", "ㅂ. Base Path Test", "ㅅ. Loop Test", "ㅇ. Data Flow Test"],
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fb68pHw%2Fbtsltj6knGl%2FAAAAAAAAAAAAAAAAAAAAANIFUQxjU-VWWmDLwydmZiSHb8PXSOKJrnBtOxTwNSnl%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DrcsYxHFNHtq98CoT8DDe64EgnwM%253D"
  },
  {
    id: 207,
    answer: "3 4",
    question: "아래 데이터 명령어를 적용할 경우 알맞는 출력값을 작성하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FH8BvW%2FbtsCX4kLwNa%2FAAAAAAAAAAAAAAAAAAAAAE1yuWHODH-48-95pyCaufeZeUiGHPPZ5mZ9B1sciVLd%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DpB4gDbqIqbmvvulVyIhBLPELOAc%253D"
  },
  {
    id: 208,
    answer: "사회공학 다크데이터",
    alt: "Social Engineering Dark Data",
    question: "아래 설명에 대한 알맞는 답을 작성하시오.",
    passageOrCode: `( 1 ) 은/는 보안학적 측면에서 기술적인 방법이 아닌 사람들간의 기본적인 신뢰를 기반으로 사람을 속여 비밀 정보를 획득하는 기법이다.
( 2 ) 은/는 빅데이터(Big Data)와 비슷하면서도 구조화돼 있지 않고, 더는 사용하지 않는 '죽은' 데이터를 의미한다. 일반적으로 정보를 수집해 저장한 이후 분석이나 특별한 목적을 위해 활용하는 데이터가 아니며, 저장공간만 차지하고 이러한 이유로 심각한 보안 위험을 초래할 수 있다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 209,
    answer: "[101, 102, 103, 104, 105]",
    question: "다음 파이썬 코드에 대한 출력값을 작성하시오.",
    passageOrCode: `TestList = [1, 2, 3, 4, 5]
TestList = list(map(lambda num: num + 100, TestList))
print(TestList)`,
    options: null,
    imageUrl: null
  },
  {
    id: 210,
    answer: "SIEM",
    question: "다음 보안 관련 설명으로 가장 알맞는 용어를 작성하시오.",
    passageOrCode: `( ) 은/는 머신러닝 기술을 이용하여 IT 시스템에서 발생하는 대량의 로그를 통합관리 및 분석하여 사전에 위협에 대응하는 보안 솔루션이다.
서로 다른 기종의 보안솔루션 로그 및 이벤트를 중앙에서 통합 수집하여 분석할 수 있으며, 네트워크 상태의 monitoring 및 이상징후를 미리 감지할 수 있다.
- 네트워크 이기종 장비 간 로그의 상관관계 분석
- 이상징후의 행위 기반 및 문맥 기반 분석 기능
- 각 로그의 상관관계를 조건식에 따라 검색하여 분석이 가능
- 이벤트 및 로그의 이상패턴을 인식해 잠재적 위협이 발생시 알림 기능`,
    options: null,
    imageUrl: null
  },
  {
    id: 211,
    answer: "CVS SVN GIT",
    alts: ["CVS GIT SVN", "SVN CVS GIT", "SVN GIT CVS", "GIT CVS SVN", "GIT SVN CVS"],
    question: "다음 보기 중, 형상 관리 항목을 3가지 고르시오.",
    passageOrCode: null,
    options: ["ATM", "CVS", "OLAP", "DDOS", "SVN", "Cyber Kill Chain", "OLTP", "GIT"],
    imageUrl: null
  },
  {
    id: 212,
    answer: "200 3 1",
    question: "STUDENT 테이블에서 컴퓨터과 학생 50명, 전기과 학생 100명, 인터넷과 학생 50명의 정보가 저장되어 있을 때, 다음 SQL문의 실행 결과에 따른 튜플의 수는? (단, DEPT 칼럼은 학과명이다.)",
    passageOrCode: `1) SELECT DEPT FROM STUDENT;
2) SELECT DISTINCT DEPT FROM STUDENT;
3) SELECT COUNT(DISTINCT DEPT) FROM STUDENT WHERE DEPT = '인터넷과';`,
    options: null,
    imageUrl: null
  },
  {
    id: 213,
    answer: "2",
    question: "다음 코드에 대한 출력 값을 작성하시오.",
    passageOrCode: `int n;
int k;
int s;
int el = 0;
for (n = 6; n <= 30; n++) {
    s = 0;
    k = n / 2;
    for (int j = 1; j <= k; j++) {
        if (n % j == 0) {
            s = s + j;
        }
    }
    if (s == n) {
        el++;
    }
}
printf("%d", el);`,
    options: null,
    imageUrl: null
  },
  {
    id: 214,
    answer: "Trustzone Typosquatting",
    question: "아래 설명에 대하여 알맞는 답을 보기에서 고르시오.",
    passageOrCode: `( 1 )은/는 프로세서(processor) 안에 독립적인 보안 구역을 따로 두어 중요한 정보를 보호하는 ARM사에서 개발한 하드웨어 기반의 보안 기술로 프로세서(processor) 안에 독립적인 보안 구역을 별도로 하여, 중요한 정보를 보호하는 하드웨어 기반의 보안 기술이다.
( 2 )은/는 사용자들이 사이트에 접속할 때 주소를 잘못 입력하거나 철자를 빠뜨리는 실수를 이용하기 위해 유사한 유명 도메인을 미리 등록하는 일로 URL 하이재킹(hijacking)이라고도 한다.`,
    options: ["Pharming", "Tvishing", "Trustzone", "APT", "Typosquatting", "Hacktivism", "Watering Hole", "Smurfing", "Ransomware", "CSRF"],
    imageUrl: null
  },
  {
    id: 215,
    answer: "SSO",
    alt: "Single Sign On",
    question: "아래 설명에 대하여 알맞는 용어를 작성하시오.",
    passageOrCode: `( )은/는 여러 개의 사이트에서 한번의 로그인으로 여러가지 다른 사이트들을 자동적으로 접속하여 이용하는 방법을 말한다.
일반적으로 서로 다른 시스템 및 사이트에서 각각의 사용자 정보를 관리하게 되는데 이때 하나의 사용자 정보를 기반으로 여러 시스템을 하나의 통합 인증을 사용하게 하는 것을 말한다.
즉 하나의 시스템에서 인증을 할 경우 타 시스템에서는 인증 정보가 있는지 확인하고 있으면 로그인 처리를 하도록 하고, 없는 경우 다시 통합 인증을 할 수 있도록 만드는 것을 의미한다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 216,
    answer: "SJF RR SRT",
    alts: ["SJF Round Robin SRT", "SJF 라운드로빈 SRT"],
    question: "다음은 스케줄링에 관한 내용이다. 괄호안에 알맞는 답을 작성하시오.",
    passageOrCode: `( 1 ) 스케줄링: Ready Queue에 있는 프로세스 중 CPU 처리 시간이 짧은 순서대로 CPU를 할당하는 비선점형 방식이며, 늦게 도착하더라도 CPU 처리 시간이 앞에 대기중인 프로세스보다 짧으면 먼저 CPU를 할당받을 수 있다.
( 2 ) 스케줄링: 프로세스가 도착한 순서대로 프로세스를 디스패치하지만 정해진 시간 할당량(또는 시간 간격)에 의해 실행을 제한한다. 즉, 시간 할당량을 매 프로세스에 주고 할당된 시간 안에 완료되지 못한 프로세스는 준비 큐의 맨 뒤에 배치되도록 하여 CPU를 독점하지 않고 공평하게 이용될 수 있게 한다.
( 3 ) 스케줄링: 선점 스케줄링 방식으로 변경한 기법이다. CPU를 점유중인 프로세스보다 남은 CPU 처리 시간이 짧은 프로세스가 Ready Queue에 들어올 경우 새로 들어온 프로세스가 CPU를 점유할 수 있다. 어떤 알고리즘보다 평균 대기 시간이 가장 짧은 알고리즘이지만, 기본적으로 선점형 방식이기 때문에 잦은 Context Switching이 일어나고 그에 따른 오버헤드가 커진다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 217,
    answer: "관계 클래스 인터페이스",
    question: "다음은 UML에 관한 설명이다. 괄호안에 알맞는 답을 작성하시오.",
    passageOrCode: `UML은 통합 모델링 언어로써, 시스템을 모델로 표현해주는 대표적인 모델링 언어이다.
구성 요소로는 사물, ( 1 ), 다이어그램으로 이루어져 있으며, 구조 다이어그램 중, ( 2 ) 다이어그램은 시스템에서 사용되는 객체 타입을 정의하고, 그들 간의 존재하는 정적인 관계를 다양한 방식으로 표현한 다이어그램이다.
또한 UML 모델링에서 ( 3 )은/는 클래스와 같은 기타 모델 요소 또는 컴포넌트가 구현해야 하는 오퍼레이션 세트를 정의하는 모델 요소이다.`,
    options: null,
    imageUrl: null
  },
  {
    id: 218,
    answer: "ㄴ ㄷ ㄱ ㄹ ㅁ",
    alt: "실선 관계집합 점선 관계집합의속성 개체집합",
    question: "다음은 E-R다이어그램에 관한 설명이다. 괄호 안에 알맞는 답을 작성하시오.",
    passageOrCode: null,
    options: null,
    imageUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FeiLWsb%2FbtslErbJVEX%2FAAAAAAAAAAAAAAAAAAAAAFngEXTHjtHZkiGo_oUbhdJmW_5vKTO0qrOe1fyvzpnT%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3D9TBFWWQtC9Ivz4VH0Gpwtq%252BH6R4%253D"
  },
  {
    id: 219,
    answer: "0123",
    question: "다음 자바 코드에 대한 출력 값을 작성하시오.",
    passageOrCode: `public class Main {
    static int[] MakeArray() {
        int[] tempArr = new int[4];
        for (int i = 0; i < tempArr.Length; i++) {
            tempArr[i] = i;
        }
        return tempArr;
    }
    public static void main(String[] args) {
        int[] intArr;
        intArr = MakeArray();
        for (int i = 0; i < intArr.Length; i++)
            System.out.print(intArr[i]);
    }
}`,
    options: null,
    imageUrl: null
  },
  {
    id: 220,
    answer: "993",
    question: "다음 자바 코드에 대한 출력 값을 작성하시오.",
    passageOrCode: `public class Exam {
    public static void main(String[] args) {
        int a = 0;
        for (int i = 1; i < 999; i++) {
            if (i % 3 == 0 && i % 2 != 0)
                a = i;
        }
        System.out.print(a);
    }
}`,
    options: null,
    imageUrl: null
  },
];
