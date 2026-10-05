// Reviewed teaching traces for the fixed exam snippets, not a general-purpose interpreter.
// Each step points to source text and records state AFTER the highlighted operation.
const step = (at, explanation, variables = {}, output, stack = [], occurrence = 0) => ({ at, explanation, variables, output, stack, occurrence });
const traces = {};
const add = (id, steps, note = '') => { traces[id] = { steps, note }; };

add(5, [
  step('int a=5', '정수 나눗셈의 피제수와 제수를 준비합니다.', { a: 5, b: 0 }),
  step('System.out.print(a/b)', '0으로 나누면 ArithmeticException이 발생하여 첫 번째 catch로 이동합니다.', { exception: 'ArithmeticException' }),
  step('System.out.print("출력1")', '일치하는 catch만 실행합니다.', {}, '출력1'),
  step('System.out.print("출력5")', '예외 처리 후 finally를 실행합니다.', {}, '출력1출력5'),
]);
add(10, [
  step('char Data[5]', '배열의 마지막 칸은 0으로 초기화됩니다.', { Data: ['B', 'A', 'D', 'E', '\\0'] }),
  step("c = 'C'", '삽입할 문자를 지정합니다.', { c: 'C' }),
  step('Data[3]-Data[1]', '문자 코드 차이 E − A = 4를 출력합니다.', {}, '4'),
  step('if(Data[i]>c)', 'B와 A를 지나 C보다 큰 D에서 멈춥니다.', { i: 2 }),
  step('Data[i] = c', 'D를 임시 저장하고 C를 넣습니다.', { temp: 'D', Data: ['B', 'A', 'C', 'E', '\\0'] }),
  step('Data[i] = temp', 'E를 한 칸 뒤로 이동할 준비를 하며 D를 넣습니다.', { i: 3, temp: 'E', Data: ['B', 'A', 'C', 'D', '\\0'] }),
  step('Data[i] = temp', '마지막 칸에 E를 넣습니다.', { i: 4, Data: ['B', 'A', 'C', 'D', 'E'] }),
  step('printf("%c"', '배열 순서대로 문자를 출력합니다.', {}, '4BACDE'),
], '원본 코드에는 첫 출력 뒤 줄바꿈이 없습니다. 채점은 기출 데이터의 정답 표기를 따릅니다.');
add(11, [
  step('int data[]', '3×3 배열에 넣을 데이터를 준비합니다.', { data: [5, 2, 7, 4, 1, 8, 3, 6, 9], rows: 3, cols: 3, sum: 0 }),
  ...[5, 2, 7, 4, 1, 8, 3, 6, 9].map((value, i, data) => {
    const arr = Array.from({ length: 3 }, () => Array(3).fill('미설정'));
    for (let j = 0; j <= i; j++) arr[Math.floor((j + 1) / 3) % 3][(j + 1) % 3] = data[j];
    return step('arr[((i + 1)', `data[${i}]를 arr[${Math.floor((i + 1) / 3) % 3}][${(i + 1) % 3}]에 저장합니다.`, { i, arr });
  }),
  ...[9, 5, 2, 7, 4, 1, 8, 3, 6].map((value, i, values) => step('sum += arr', '행 우선 순서로 짝수 인덱스는 더하고 홀수 인덱스는 뺍니다.', { i, sum: values.slice(0, i + 1).reduce((sum, n, j) => sum + n * (j % 2 ? -1 : 1), 0) })),
  step('printf("%d", sum)', '최종 합을 출력합니다.', {}, '13'),
]);
add(13, [
  step('static int total', '공유 변수 total과 부모 필드를 초기화합니다.', { total: 0, 'Parent.v': 1 }, undefined, ['main', 'Child()', 'Parent()']),
  step('total += (++v)', '부모의 v를 먼저 증가시킨 뒤 total에 더합니다.', { total: 2, 'Parent.v': 2 }, undefined, ['main', 'Child()', 'Parent()']),
  step('total += total * 2', '부모 생성자에서도 재정의된 Child.show()가 호출됩니다. total은 3배가 됩니다.', { total: 6 }, undefined, ['main', 'Child()', 'Parent()', 'Child.show()']),
  step('v += 2', '부모 생성자 종료 후 자식 필드를 초기화하고 2를 더합니다.', { 'Child.v': 12 }, undefined, ['main', 'Child()']),
  step('total += v++', '12를 더한 다음 자식 v가 13이 됩니다.', { total: 18, 'Child.v': 13 }, undefined, ['main', 'Child()']),
  step('total += total * 2', '다시 Child.show()를 호출하여 total이 54가 됩니다.', { total: 54 }, undefined, ['main', 'Child()', 'Child.show()']),
  step('System.out.println(Parent.total)', '공유 변수 total을 출력합니다.', {}, '54', ['main']),
]);
add(16, [
  step('int[] data', '배열의 중간 원소를 더하며 더 큰 재귀 결과를 선택합니다.', { data: [3, 5, 8, 12, 17] }),
  step('int mid', '최상위 구간의 중간 인덱스는 2입니다.', { st: 0, end: 4, mid: 2 }, undefined, ['main', 'func(0, 4)']),
  step('if (st >= end)', '원소 하나인 구간은 0을 반환합니다.', { st: 0, end: 0, return: 0 }, undefined, ['main', 'func(0, 4)', 'func(0, 2)', 'func(0, 1)', 'func(0, 0)']),
  step('return a[mid]', '구간 (0, 1)은 3, 구간 (0, 2)는 5 + max(3, 0) = 8입니다.', { left: 8 }, undefined, ['main', 'func(0, 4)', 'func(0, 2)']),
  step('return a[mid]', '구간 (3, 4)는 12 + max(0, 0) = 12입니다.', { right: 12 }, undefined, ['main', 'func(0, 4)', 'func(3, 4)']),
  step('System.out.println', '8 + max(8, 12) = 20을 출력합니다.', { return: 20 }, '20', ['main']),
]);
add(17, [
  step('li =', '완전 이진 트리에 넣을 값을 준비합니다.', { li: [3, 5, 8, 12, 15, 18, 21] }),
  step('nodes[(i - 1)', '부모 인덱스 (i − 1) // 2로 연결합니다.', { tree: ['3 → [5, 8]', '5 → [12, 15]', '8 → [18, 21]'] }),
  step('return (node.value', '짝수 깊이인 루트는 합에 포함하지 않습니다.', { level: 0, value: 3, contribution: 0 }, undefined, ['calc(3, 0)']),
  step('return (node.value', '깊이 1인 노드 5를 포함하고 깊이 2 자식들은 제외합니다.', { level: 1, value: 5, contribution: 5 }, undefined, ['calc(3, 0)', 'calc(5, 1)']),
  step('return (node.value', '다른 깊이 1 노드인 8도 포함합니다.', { value: 8, contribution: 8 }, undefined, ['calc(3, 0)', 'calc(8, 1)']),
  step('print(calc(root))', '홀수 깊이의 합 5 + 8 = 13을 출력합니다.', { sum: 13 }, '13'),
]);
add(18, [
  step('head = insert', '새 노드를 항상 맨 앞에 넣어 역순 연결 리스트가 됩니다.', { head: '5 → 4 → 3 → 2 → 1 → NULL' }),
  step('while (curr', '값 3의 노드를 찾습니다.', { prev: '노드 4', curr: '노드 3' }),
  step('prev->next = curr->next', '4에서 3을 건너뛰고 2로 연결합니다.', { chain: '5 → 4 → 2 → 1 → NULL' }),
  step('curr->next = head', '찾은 노드 3을 기존 머리에 연결합니다.', { chain: '3 → 5 → 4 → 2 → 1 → NULL' }),
  step('head = curr', '머리를 노드 3으로 바꿉니다.', { head: '3 → 5 → 4 → 2 → 1 → NULL' }),
  step('printf("%d", curr->value)', '연결 순서대로 출력합니다.', {}, '35421'),
]);
add(19, [
  step('Student s[2]', '각 점수에 비트 마스크 0xA5를 적용합니다.', { mask: '0xA5 = 10100101₂', scores: [[160, 165, 219], [160, 237, 129]] }),
  step('return enc &', 'Kim의 점수에서 마스크가 1인 비트만 남깁니다.', { decoded: [160, 165, 129], result: 454 }, undefined, ['main', 'sum(Kim)', 'dec()']),
  step('result += sum', 'Lee의 결과도 160 + 165 + 129 = 454입니다.', { result: 908 }, undefined, ['main', 'sum(Lee)']),
  step('printf("%d", result)', '두 학생의 합을 출력합니다.', {}, '908'),
]);
add(20, [
  step('calc("5")', '문자열 인수이므로 calc(String)을 선택합니다.', { str: '5' }, undefined, ['main', 'calc(String "5")']),
  step('Integer.valueOf', '문자열을 정수 5로 변환합니다.', { value: 5 }),
  step('return calc(value - 1) + calc(value - 3)', '정수 인수의 재귀는 calc(int)를 호출합니다.', { calls: ['calc(int 4)', 'calc(int 2)'] }, undefined, ['main', 'calc(String "5")']),
  step('return calc(value - 1) + calc(value - 2)', '정수 오버로드는 피보나치 계산으로 각각 3과 1을 반환합니다.', { results: [3, 1] }, undefined, ['main', 'calc(String "5")', 'calc(int)']),
  step('System.out.println', '3 + 1 = 4를 출력합니다.', {}, '4'),
]);
add(25, [
  step('String data[]', '배열과 문자열 참조를 준비합니다.', { data: ['A'], 'main.s': 'B' }),
  step('data[0] = s', '전달받은 참조로 원본 배열의 원소를 바꿉니다.', { data: ['B'], 'change.s': 'B' }, undefined, ['main', 'change()']),
  step('s = "Z"', '지역 매개변수만 새 문자열을 가리킵니다.', { 'change.s': 'Z', 'main.s': 'B' }, undefined, ['main', 'change()']),
  step('System.out.print', '바뀐 배열 원소 B와 main의 s인 B를 연결합니다.', {}, 'BB'),
]);
add(29, [
  step('if (x > 2)', '첫 람다에 3을 전달하면 예외가 발생합니다.', { x: 3 }, undefined, ['main', 'run(f)', 'f.apply(3)']),
  step('return 7', 'catch에서 7을 반환합니다.', { first: 7 }, undefined, ['main', 'run(f)']),
  step('run((int n)', '두 번째 람다는 3 + 9 = 12를 반환합니다.', { n: 3, second: 12 }, undefined, ['main', 'run(n → n + 9)']),
  step('System.out.print', '두 반환값의 합을 출력합니다.', {}, '19'),
]);
add(30, [
  step('Parent ref', '선언 타입은 Parent, 실제 객체는 Child입니다.', { ref: 'Parent → Child 객체' }),
  step('return i + 3', '인스턴스 메서드는 Child.x(int)를 실행합니다.', { i: 2, result: 5 }, undefined, ['main', 'Child.x(2)']),
  step('System.out.println', '정적 id()는 선언 타입인 Parent에서 선택합니다.', { id: 'P' }, '5P'),
]);
add(32, [
  step('Queue q', '원형 큐를 초기화합니다.', { a: [0, 0, 0], front: 0, rear: 0 }),
  step('enq(&q,1)', '1과 2를 넣고 첫 원소 1을 꺼낸 뒤 3을 넣습니다.', { a: [1, 2, 3], front: 1, rear: 0 }),
  step('int first', 'front=1의 값 2를 꺼냅니다.', { first: 2, front: 2 }),
  step('int second', 'front=2의 값 3을 꺼내고 인덱스를 0으로 순환합니다.', { second: 3, front: 0 }),
  step('printf', '꺼낸 값을 출력합니다.', {}, '2 그리고 3'),
]);
add(34, [
  step('struct dat a[]', '구조체 배열과 이중 포인터를 초기화합니다.', { a: [[1, 2], [3, 4], [5, 6]], ptr: 'a[0]', pptr: '&ptr' }),
  step('(*pptr)[1]', '*pptr은 ptr입니다. a[2]의 구조체 전체를 a[1]에 복사합니다.', { a: [[1, 2], [5, 6], [5, 6]] }),
  step('printf', 'a[1]의 x와 y를 출력합니다.', {}, '5 그리고 6'),
]);
add(35, [
  step('BO[] arr', '배열은 객체 자체가 아닌 참조를 저장합니다.', { 'a.v': 1, 'b.v': 2, 'c.v': 3, arr: ['a', 'b', 'c'] }),
  step('arr[2] = t', '배열의 첫 번째와 마지막 참조를 교환합니다.', { arr: ['c', 'b', 'a'] }),
  step('arr[1].v', 'arr[1]은 b, arr[0]은 c이므로 b.v가 3이 됩니다.', { 'b.v': 3 }),
  step('System.out.println', '원래 변수 a, b, c가 가리키는 객체의 값을 출력합니다.', {}, '1a3b3'),
]);
add(36, [
  step('a.n = &b', '처음에는 a → b → c로 연결합니다.', { chain: 'a(1) → b(2) → c(3) → NULL' }),
  step('c.n = &a', 'c → a → b가 되도록 연결을 바꿉니다.', { chain: 'c(3) → a(1) → b(2) → NULL' }),
  step('struct node* head', 'head는 c를 가리킵니다.', { head: 'c' }),
  step('printf', 'head부터 세 노드의 값을 출력합니다.', {}, '3 1 2'),
]);
add(37, [
  step('s = set', '딕셔너리 값으로 별도의 집합을 만듭니다.', { lst: [1, 2, 3], dst: '{1: 2, 2: 4, 3: 6}', s: [2, 4, 6] }),
  step('dst[2]=7', '리스트와 딕셔너리를 변경해도 기존 집합은 그대로입니다.', { lst: [99, 2, 3], dst: '{1: 2, 2: 7, 3: 6}' }),
  step('s.add(99)', '집합에 99를 추가합니다.', { s: [2, 4, 6, 99] }),
  step('print', '교집합은 {2, 6}이므로 원소 수는 2입니다.', { intersection: [2, 6] }, '2'),
]);
add(38, [
  ...['B', 'E', 'S', 'T'].map((c, i) => step('h = n', '읽은 문자를 새 머리 노드로 넣습니다.', { c, h: ['B', 'E', 'S', 'T'].slice(0, i + 1).reverse().join(' → ') + ' → NULL' })),
  step('putchar', '머리부터 순회하므로 입력 문자열의 역순이 출력됩니다.', {}, 'TSEB'),
]);

add(41, [
  step('Connection conn1', '최초 호출만 객체를 생성합니다.', { conn1: 'Connection #1', count: 0 }),
  step('conn1.count()', '첫 객체의 count를 증가시킵니다.', { count: 1 }),
  step('conn2.count()', 'conn2도 같은 싱글턴 객체를 참조합니다.', { conn2: 'Connection #1', count: 2 }),
  step('conn3.count()', 'conn3 역시 같은 객체입니다.', { conn3: 'Connection #1', count: 3 }),
  step('System.out.print', 'conn1.count()를 한 번 더 실행한 뒤 4를 출력합니다.', { count: 4 }, '4'),
]);
add(42, [
  step('int v1', '초기 값을 준비합니다.', { v1: 0, v2: 35, v3: 29 }),
  step('if(v1 > v2', 'v1 > v2가 거짓이므로 조건식은 v1=0입니다. else로 이동합니다.', { condition: 0 }),
  step('v3 = v3 <<', '29를 왼쪽으로 2비트 이동하여 116으로 만듭니다.', { v3: 116 }),
  step('printf', '35 + 116을 출력합니다.', {}, '151'),
]);
add(44, [
  step('char str[100]', '문자열 양 끝에서 포인터를 시작합니다.', { str: 'ABCDEFGH' }),
  ...['HBCDEFGA', 'HGCDEFBA', 'HGFDECBA', 'HGFEDCBA'].map((str, i) => step('*p2 = temp', '양 끝의 문자를 교환하고 포인터를 안쪽으로 이동합니다.', { str, p1: i + 1, p2: 6 - i })),
  step('printf("%c"', '인덱스 1, 3, 5, 7의 문자를 출력합니다.', { indices: [1, 3, 5, 7] }, 'GECA'),
]);
add(50, [
  step('Parent parent', '번호 ⑥에서 new Child(3)를 호출합니다.', { x: 3 }, undefined, ['⑤ main', '⑥ new Child(3)']),
  step('Child (int x)', '③ 자식 생성자에서 ① 부모 생성자를 먼저 실행합니다.', { 'Parent.x': 4, 'Parent.y': 3 }, undefined, ['⑤ main', '③ Child(3)', '① Parent(4, 3)']),
  step('this.x=x;', '부모 생성자 종료 후 자식 필드를 지정합니다.', { 'Child.x': 3 }, undefined, ['⑤ main', '③ Child(3)'], 1),
  step('parent.getT()', '⑦에서 매개변수가 없는 ② getT()를 호출합니다. ④는 오버로드여서 선택되지 않습니다.', { sequence: ['⑥', '③', '①', '⑦', '②'], return: 12 }, '12'),
], '번호가 붙은 기출 의사 코드의 호출 순서를 설명합니다. 원문의 this y, extend는 Java 문법에 맞게 해석했습니다.');
add(51, [
  step('initAcc(&myAcc', '계좌를 초기화합니다.', { accNum: 9981, bal: 2200, amount: 100 }),
  step('acc -> bal = acc -> bal-*en', '양수 금액이 잔고보다 작으므로 출금합니다.', { bal: 2100 }),
  step('r = r*base', '1.1을 세 번 곱하여 3년의 복리 계수 1.331을 계산합니다.', { base: 1.1, r: 1.331 }),
  step('acc -> bal = acc -> bal *', '2100 × 1.331 = 2795.1입니다.', { bal: 2795.1 }),
  step('printf', '잔액을 소수점 두 자리로 출력합니다.', {}, '9981 and 2795.10'),
]);
add(52, [
  step('str = "S"', '누적 문자열을 S로 시작합니다.', { str: 'S' }),
  ...['Seoul', 'Kyeonggi', 'Incheon', 'Daejun', 'Daegu', 'Pusan'].map((city, i, cities) => step('str = str +', '각 도시의 두 번째 문자를 이어 붙입니다.', { i: city, str: 'S' + cities.slice(0, i + 1).map(c => c[1]).join('') })),
  step('print', '누적 문자열을 출력합니다.', {}, 'Seynaau'),
]);
add(56, [
  step('classOne one', '부모 타입의 참조에 자식 객체를 담습니다.', { one: 'classOne → classTwo 객체' }),
  step('super(i, i+1)', '부모 생성자를 통해 a=10, b=11을 초기화합니다.', { a: 10, b: 11, po: 3 }),
  step('System.out.println(po*po)', '재정의된 자식 print()가 po²를 출력합니다.', {}, '9', ['main', 'classTwo.print()']),
]);
add(59, [
  step('char*p', '대문자·소문자·숫자에 서로 다른 이동 규칙을 적용합니다.', { p: 'It is 8' }),
  step("result[i] = (p[i]-'A'", '대문자 I는 5만큼 이동하여 N이 됩니다.', { result: 'N' }),
  step("result[i] = (p[i]-'a'", '소문자를 10만큼 순환 이동합니다. 공백은 유지합니다.', { result: 'Nd sc ' }),
  step("result[i] = (p[i]-'0'", '숫자 8은 (8 + 3) % 10 = 1이 됩니다.', { result: 'Nd sc 1' }),
  step('printf', '완성한 문자열을 출력합니다.', {}, 'Nd sc 1'),
]);
add(61, [
  step('int[] a', '내용이 같아도 new로 만든 배열은 서로 다른 객체입니다.', { a: '배열 #1 [1,2,3,4]', b: '배열 #2 [1,2,3,4]', c: '배열 #3 [1,2,3]' }),
  step('if (a==b)', 'check(a, b): 참조가 다르므로 N을 출력합니다.', {}, 'N'),
  step('if (a==b)', 'check(a, c): 참조가 다르므로 N을 출력합니다.', {}, 'NN'),
  step('if (a==b)', 'check(b, c): 참조가 다르므로 N을 출력합니다.', {}, 'NNN'),
]);
add(66, [
  step('a =', '각 인덱스에서 길이 2의 부분 문자열을 비교합니다.', { a: 'abdcabcabca' }),
  step('if temp == y', 'ab는 인덱스 0, 4, 7에서 일치합니다.', { y: 'ab', matches: [0, 4, 7], result: 3 }),
  step('if temp == y', 'ca는 인덱스 3, 6, 9에서 일치합니다.', { y: 'ca', matches: [3, 6, 9], result: 3 }),
  step('print', 'f-string에 두 개수를 넣어 출력합니다.', {}, 'ab3ca3'),
]);
add(73, [
  step('int arr[3][3]', '2차원 배열을 행 우선으로 초기화합니다.', { arr: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] }),
  step('int* parr', 'parr[0]은 두 번째 행, parr[1]은 세 번째 행을 가리킵니다.', { parr: ['arr[1] → [4,5,6]', 'arr[2] → [7,8,9]'] }),
  step('printf', 'parr[1][1]=8, *(parr[1]+2)=9, **parr=4입니다.', { operands: [8, 9, 4] }, '21'),
]);
add(74, [
  step('int a[]', '1부터 9까지의 배열을 준비합니다.', { a: [1, 2, 3, 4, 5, 6, 7, 8, 9] }),
  step('result += a[i]', 'odd=true이면 홀수만 더합니다.', { odd: true, selected: [1, 3, 5, 7, 9], result: 25 }, undefined, ['main', 'sum(a, true)']),
  step('result += a[i]', 'odd=false이면 짝수만 더합니다.', { odd: false, selected: [2, 4, 6, 8], result: 20 }, undefined, ['main', 'sum(a, false)']),
  step('System.out.print', '두 합을 차례로 출력합니다.', {}, '25, 20'),
]);
add(75, [
  step('char str2', '복사 대상 버퍼를 준비합니다.', { str1: 'first', str2: 'teststring', result: 0 }),
  step('*d = *s', '원본 문자열을 대상에 복사합니다.', { str2: 'firsttring' }, undefined, ['main', 'sumFn()']),
  step("*d = '\\0'", '다섯 글자 뒤에 종료 문자를 써서 문자열 길이가 5가 됩니다.', { str2: 'first' }),
  step('result += i', '0 + 1 + 2 + 3 + 4를 더합니다.', { result: 10 }),
  step('printf', '인덱스의 합을 출력합니다.', {}, '10'),
]);
add(77, [
  step('String str', '오른쪽 끝에서 재귀 호출하고 반환할 때 왼쪽부터 중복 여부를 확인합니다.', { str: 'abacabcd' }),
  step('String result = calculFn', 'index=0까지 내려갑니다.', { index: 0 }, undefined, ['calculFn(7)', 'calculFn(6)', '…', 'calculFn(0)']),
  ...['a', 'ba', 'ba', 'cba', 'cba', 'cba', 'cba', 'dcba'].map((result, index) => step('if(!seen[c])', '처음 만난 문자는 반환 문자열 앞에 붙이고 중복 문자는 건너뜁니다.', { index, c: 'abacabcd'[index], result }, undefined, [`calculFn(${index}) 반환`])),
  step('System.out.print', '최종 반환 문자열을 출력합니다.', {}, 'dcba'),
]);
add(78, [
  step('int a = 11', 'main의 변수를 준비합니다.', { 'main.a': 11, 'main.b': 19 }),
  step('b = t', '값을 복사한 매개변수만 교환합니다. main의 변수는 그대로입니다.', { 'swap.a': 19, 'swap.b': 11 }, undefined, ['main', 'swap(11, 19)']),
  step('b += 2', 'a=11이므로 case 11을 실행합니다.', { 'main.b': 21 }),
  step('b += 3', 'break가 없으므로 default도 실행합니다.', { 'main.b': 24 }),
  step('printf', '11 − 24를 출력합니다.', {}, '-13'),
]);
add(79, [
  step('struct node *head', 'head는 첫 번째 노드를 가리킵니다.', { head: 'a(10)' }),
  step('b.n2 = &c', '노드를 a → b → c로 연결합니다.', { chain: 'a(10) → b(20) → c(30) → NULL' }),
  step('printf', 'head의 다음 노드 b의 n1을 읽습니다.', {}, '20'),
]);
add(80, [
  step('String str', 'T를 구분자로 문자열을 나눕니다.', { str: 'ITISTESTSTRING' }),
  step('String[] result', '분할 결과의 인덱스는 0부터 시작합니다.', { result: ['I', 'IS', 'ES', 'S', 'RING'] }),
  step('System.out.print', 'result[3]을 출력합니다.', {}, 'S'),
]);
add(81, [
  step('func(s, 3)', '모든 원소의 문자열 내용이 A입니다.', { s: ['A (리터럴)', 'A (리터럴)', 'A (새 객체)'] }),
  step('if (s[i - 1].equals', 'equals는 참조가 아닌 내용을 비교하므로 두 비교가 모두 참입니다.', {}, 'OO'),
  step('for (String m', '각 원소의 내용을 출력합니다.', {}, 'OOAAA'),
]);
add(82, [
  step('lst =', '리스트를 준비합니다.', { lst: [1, 2, 3, 4, 5, 6] }),
  ...[[6, 2, 3, 4, 5, 1], [6, 5, 3, 4, 2, 1], [6, 5, 4, 3, 2, 1]].map((lst, i) => step('lst[i], lst[-i - 1]', '앞뒤 원소를 교환합니다.', { i, lst })),
  step('print', '짝수 인덱스 합 12에서 홀수 인덱스 합 9를 뺍니다.', { even: [6, 4, 2], odd: [5, 3, 1] }, '3'),
]);
add(87, [
  step('int sum = 0', 'main의 x와 func의 정적 x는 별개입니다.', { 'main.x': 1, 'func.x': 0, sum: 0 }),
  ...[2, 4, 6, 8].map((x, i) => step('sum += func()', '정적 x는 호출 사이에도 유지되어 매번 2씩 증가합니다.', { 'main.x': i + 2, 'func.x': x, sum: (i + 1) * (i + 2) }, undefined, ['main', 'func()'])),
  step('printf', '2 + 4 + 6 + 8을 출력합니다.', {}, '20'),
]);
add(90, [
  step("a = '100.0'", '값이 비슷해도 타입은 서로 다릅니다.', { a: 'str: 100.0', b: 'float: 100.0', c: 'tuple: (100,200)' }),
  step('return len(value)', '문자열 a는 길이 5를 반환합니다.', { 'func(a)': 5 }),
  step('return 20', 'float b와 tuple c는 else에서 각각 20을 반환합니다.', { 'func(b)': 20, 'func(c)': 20 }),
  step('print', '5 + 20 + 20을 출력합니다.', {}, '45'),
]);
add(91, [
  step('Base a', 'a와 b 모두 실제 객체 타입은 Derivate입니다.', { a: 'Base → Derivate 객체', b: 'Derivate → Derivate 객체' }),
  step('return x * 3', '두 getX() 호출 모두 재정의된 메서드가 실행되어 21을 반환합니다.', { 'a.getX()': 21, 'b.getX()': 21 }),
  step('System.out.print', '필드는 참조의 선언 타입에 따라 a.x=3, b.x=7입니다.', { 'a.x': 3, 'b.x': 7 }, '52'),
]);
add(92, [
  step('n3.next = &n2', 'n1 → n3 → n2로 연결합니다.', { chain: 'n1(1) → n3(3) → n2(2) → NULL' }),
  step('node->next->value = t', '앞의 두 노드 값을 교환합니다.', { chain: 'n1(3) → n3(1) → n2(2) → NULL', t: 1 }),
  step('node = node->next->next', '두 칸 전진하면 마지막 노드라 더 교환하지 않습니다.', { node: 'n2' }),
  step('printf', '연결 순서대로 값을 출력합니다.', {}, '312'),
]);
add(96, [
  step('int arr[]', '이중 포인터 pp → p → arr로 같은 배열에 접근합니다.', { arr: [3, 1, 4, 1, 5], pp: '&p', p: 'arr[0]' }),
  ...[3, 2, 1, 4, 4].map((value, i, result) => step('*(*arr + i) =', '(기존 값 + 인덱스) % 5로 해당 원소를 바꿉니다.', { i, arr: result.slice(0, i + 1).concat([3, 1, 4, 1, 5].slice(i + 1)) })),
  step('num = arr[2]', '변경된 세 번째 원소를 num에 저장합니다.', { num: 1 }),
  step('printf', 'num을 출력합니다.', {}, '1'),
]);
add(98, [
  step('int sum', '합을 0으로 초기화합니다.', { sum: 0 }),
  step('throw new NullPointerException', 'func에서 예외를 던집니다.', { exception: 'NullPointerException' }, undefined, ['main', 'func()']),
  step('sum = sum + 1', '가장 먼저 일치한 catch에서 1을 더합니다.', { sum: 1 }),
  step('sum = sum + 100', 'finally에서 100을 더합니다.', { sum: 101 }),
  step('System.out.print', '합을 출력합니다.', {}, '101'),
]);
add(99, [
  step('new Collection<>(0)', 'Integer 값을 담지만 제한 없는 T의 정적 상한은 Object입니다.', { value: 0, 'T 상한': 'Object' }),
  step('new Printer().print(value)', '오버로드 선택은 컴파일 시점에 이루어져 print(Object)가 선택됩니다.', { method: 'print(Object)' }, undefined, ['main', 'Collection.print()', 'Printer.print(Object)']),
  step('System.out.print("B"', 'Object 오버로드의 접두사 B와 값을 출력합니다.', {}, 'B0'),
]);

add(101, [
  step('Static st', '지역 a, 객체의 a, 공유 b를 구분합니다.', { a: 10, 'st.a': 20, 'Static.b': 10 }),
  step('System.out.println(Static.b++)', '후위 증가는 기존 값 10을 출력한 뒤 b를 11로 만듭니다.', { 'Static.b': 11 }, '10\n'),
  step('System.out.println(st.b)', '객체를 통해 접근해도 b는 공유 변수입니다.', {}, '10\n11\n'),
  step('System.out.println(a)', '지역 변수 a는 그대로 10입니다.', {}, '10\n11\n10\n'),
  step('System.out.print(st.a)', '객체 필드 a를 출력합니다.', {}, '10\n11\n10\n20'),
]);
add(102, [
  step('p = a', '포인터가 배열 첫 문자를 가리킵니다.', { a: ['A', 'r', 't', '\\0'], p: '&a[0]' }),
  step('printf("%s", a)', '%s는 종료 문자까지 읽습니다.', {}, 'Art'),
  step('printf("%c", *p)', '%c는 첫 문자 하나만 읽습니다.', {}, 'ArtA'),
  step('printf("%c", *a)', '*a 역시 첫 문자 A입니다.', {}, 'ArtAA'),
  step('printf("%s", p)', 'p부터 문자열 전체를 읽습니다.', {}, 'ArtAAArt'),
  step('printf("%c", a[i])', '반복문에서 각 문자를 이어 출력합니다.', {}, 'ArtAAArtArt'),
], '원본 printf에는 줄바꿈이 없습니다. 채점 데이터는 출력 항목을 줄바꿈으로 구분합니다.');
add(103, [
  step('char* b', '두 문자열의 각 문자를 중첩 반복문으로 비교합니다.', { a: 'qwer', b: 'qwtety' }),
  ...['q', 'qw', 'qwe'].map((output, i) => step('printf', 'a의 문자가 b에 있으면 출력합니다.', { i, match: 'qwe'[i] }, output)),
  step('if (a[i] == b[j])', 'r은 b에 없으므로 출력하지 않습니다.', { i: 3, match: '없음' }),
]);
add(109, [
  step('int input', '빈칸을 % 10으로 채워 마지막 십진 자릿수를 추출합니다.', { input: 101110, di: 1, sum: 0 }),
  ...[0, 1, 1, 1, 0, 1].map((digit, i, digits) => step('sum = sum +', '추출한 비트에 2의 자리 가중치를 곱해 누적합니다.', { digit, di: 2 ** i, input: Math.floor(101110 / 10 ** i), sum: digits.slice(0, i + 1).reduce((n, d, j) => n + d * 2 ** j, 0) })),
  step('printf', '101110₂ = 46을 출력합니다.', {}, '46'),
], '빈칸을 정답 연산자로 채운 상태의 해설입니다.');
add(114, [
  step('int[] item', '첫 빈칸은 idx2, 두 번째 빈칸은 배열 길이 nx입니다.', { item: [5, 3, 8, 1, 2, 7], nx: 6 }),
  ...[[3, 5, 1, 2, 7, 8], [3, 1, 2, 5, 7, 8], [1, 2, 3, 5, 7, 8]].map((item, i) => step('swap(array, j, j + 1)', '인접 원소를 비교하여 큰 값을 오른쪽으로 보냅니다. 한 바깥 반복의 결과입니다.', { i, item })),
  step('System.out.print', '정렬된 배열을 출력합니다.', {}, '1 2 3 5 7 8 '),
], '빈칸을 채운 뒤의 버블 정렬을 바깥 반복 단위로 보여줍니다.');
add(115, [
  step('a =', '집합은 중복 원소를 보관하지 않습니다.', { a: ['한국', '중국', '일본'] }),
  step("a.add('베트남')", '베트남을 추가합니다.', { a: ['한국', '중국', '일본', '베트남'] }),
  step("a.add('중국')", '이미 있는 중국을 추가해도 집합은 같습니다.'),
  step("a.remove('일본')", '일본을 제거합니다.', { a: ['한국', '중국', '베트남'] }),
  step('a.update', '중복인 한국은 한 번만 남고 홍콩·태국이 추가됩니다.', { a: ['한국', '중국', '베트남', '홍콩', '태국'] }),
  step('print', '집합의 내용을 출력합니다. 출력 순서는 보장되지 않습니다.', {}, "{'한국', '중국', '베트남', '홍콩', '태국'}"),
], '집합 출력은 가능한 순서 중 하나입니다.');
add(117, [
  step('Vehicle obj', 'Car 객체를 만들고 상속된 name 필드를 초기화합니다.', { obj: 'Vehicle → Car 객체', name: 'Spark' }),
  step('obj.getName()', '매개변수 없는 메서드는 Vehicle에서 상속됩니다. 다른 오버로드는 선택되지 않습니다.', { method: 'Vehicle.getName()' }, undefined, ['main', 'Vehicle.getName()']),
  step('return "Vehicle name:', '상속된 name을 문자열에 연결합니다.', {}, 'Vehicle name: Spark'),
]);
add(120, [
  step('Child obj', '자식 기본 생성자가 this(5000)을 호출합니다.', {}, undefined, ['main', 'Child()', 'Child(5000)']),
  step('this(500)', '암시적 super()가 부모 기본 생성자와 Parent(500)을 호출합니다.', { 'Parent.x': 500 }, undefined, ['main', 'Child()', 'Child(5000)', 'Parent()', 'Parent(500)']),
  step('this.x = x', '자식 필드는 별도로 5000이 됩니다.', { 'Child.x': 5000 }, undefined, ['main', 'Child(5000)']),
  step('return x', '상속된 getX()는 부모 클래스의 x를 읽습니다.', {}, '500', ['main', 'Parent.getX()']),
]);
add(121, [
  step('int n[5]', '입력값을 상징적으로 n0~n4로 표시합니다.', { n: ['n0', 'n1', 'n2', 'n3', 'n4'] }),
  ...[0, 1, 2, 3, 4].map(i => step('printf("%d", ( )', '정답 n[(i+1) % 5]는 다음 칸을 읽고 마지막에서 처음으로 순환합니다.', { i, index: (i + 1) % 5 }, Array.from({ length: i + 1 }, (_, j) => `n${(j + 1) % 5}`).join(' '))),
], '입력값이 지정되지 않아 실제 수치 대신 배열 원소의 이동 순서를 보여줍니다.');
add(122, [
  step('m = 4620', '큰 화폐부터 몫을 구하고 나머지를 넘깁니다.', { m: 4620 }),
  step('a =', '4620 / 1000의 정수 몫은 4입니다.', { a: 4, remainder: 620 }),
  step('b =', '(4620 % 1000) / 500 = 1입니다.', { b: 1, remainder: 120 }),
  step('c =', '(4620 % 500) / 100 = 1입니다.', { c: 1, remainder: 20 }),
  step('d =', '(4620 % 100) / 10 = 2입니다.', { d: 2, remainder: 0 }),
  step('System.out.println(d)', '정답 식을 채우면 각 화폐 개수를 출력합니다.', {}, '4\n1\n1\n2'),
], '빈칸을 채운 의사 코드의 계산 과정입니다.');
add(123, [
  step('char n[30]', 'test()는 호출할 때마다 동일한 전역 버퍼에 입력합니다.', { n: '공유 입력 버퍼' }),
  step('test1 = test()', 'test1은 전역 n의 주소를 저장합니다.', { test1: '&n[0]' }),
  step('test2 = test()', 'test2도 같은 주소를 저장합니다.', { test2: '&n[0]' }),
  step('test3 = test()', '마지막 입력이 버퍼를 덮어씁니다.', { test3: '&n[0]', n: '박영희' }),
  step('printf("%s",test3)', '세 포인터 모두 마지막 입력을 읽습니다.', {}, '박영희박영희박영희'),
], '문제 조건의 마지막 입력을 사용합니다. 원본 출력에는 줄바꿈이 없습니다.');
add(125, [
  step('sum += n[i]', '배열의 합은 73 + 95 + 82 = 250입니다.', { n: [73, 95, 82], sum: 250 }),
  step('switch(sum/30)', '정수 나눗셈 250 / 30 = 8이므로 case 8부터 실행합니다.', { case: 8 }),
  step('case 8:', 'B를 출력합니다.', {}, 'B'),
  step('case 6:', 'break가 없으므로 C도 출력합니다.', {}, 'BC'),
  step('default:', 'default까지 이어서 실행합니다.', {}, 'BCD'),
]);
add(127, [
  step('int c', '1~2023에서 4의 배수를 셉니다.', { c: 0 }),
  step('if(i%4 == 0)', '첫 번째 4의 배수에서 c가 1이 됩니다.', { i: 4, c: 1 }),
  step('if(i%4 == 0)', '마지막 4의 배수는 2020입니다. 2020 / 4 = 505개입니다.', { i: 2020, c: 505 }),
  step('printf', '나머지 2021~2023은 조건이 거짓입니다. 최종 개수를 출력합니다.', {}, '505'),
], '반복문 중간의 동일한 계산을 생략하고 처음과 마지막 일치를 표시합니다.');
add(129, [
  step('into(5); into(2)', '스택에 5, 2를 넣습니다. 오른쪽이 top입니다.', { stack: [5, 2], point: 1 }),
  step('printf("%d", take());', 'top인 2를 꺼냅니다.', { stack: [5], point: 0 }, '2'),
  step('into(4); into(1)', '4, 1을 넣고 1을 꺼냅니다.', { stack: [5, 4], point: 1 }, '21'),
  step('into(3);', '3을 넣은 뒤 3과 4를 차례로 꺼냅니다.', { stack: [5], point: 0 }, '2134'),
  step('into(6);', '6을 넣고 6, 5를 꺼내 스택이 비게 됩니다.', { stack: [], point: -1 }, '213465'),
]);
add(134, [
  step('String str3', '리터럴 둘은 같은 풀 객체, new String은 별도 객체입니다.', { str1: '풀 객체 #1', str2: '풀 객체 #1', str3: '새 객체 #2' }),
  step('println(str1 == str2)', '동일한 객체 참조입니다.', {}, 'true\n'),
  step('println(str1 == str3)', '내용이 같아도 참조는 다릅니다.', {}, 'true\nfalse\n'),
  step('println(str1.equals', 'equals는 문자열 내용을 비교합니다.', {}, 'true\nfalse\ntrue\n'),
  step('print(str2.equals', 'str2와 str3의 내용도 같습니다.', {}, 'true\nfalse\ntrue\ntrue'),
], '기출의 축약된 println/print를 System.out 호출로 해석합니다.');
add(138, [
  step('int E[]', '빈칸 >는 앞 원소가 더 클 때 교환합니다.', { E: [64, 25, 12, 22, 11] }),
  ...[[11, 64, 25, 22, 12], [11, 12, 64, 25, 22], [11, 12, 22, 64, 25], [11, 12, 22, 25, 64]].map((E, i) => step('E[j] = tmp', '한 바깥 반복을 완료하여 앞쪽 최소값을 확정합니다.', { i, E })),
  step('printf', '오름차순 배열을 출력합니다.', {}, '11 12 22 25 64 '),
], '빈칸을 채운 뒤 바깥 반복 단위의 상태입니다.');
for (const [id, a] of [[139, 'engineer information processing'], [266, '_THIS_IS_KIM_SPEAKING']]) {
  const ranges = id === 139 ? [[0, 3], [4, 6], [28]] : [[0, 4], [6, 8], [18]];
  const [b, c, d] = ranges.map(range => a.slice(...range));
  add(id, [
    step('a =', '슬라이스는 시작 인덱스를 포함하고 끝 인덱스는 제외합니다.', { a }),
    step('b =', '앞부분을 잘라 b에 저장합니다.', { b }),
    step('c =', '중간 부분을 잘라 c에 저장합니다.', { c }),
    step('d =', '지정 인덱스부터 끝까지 d에 저장합니다.', { d }),
    step('e =', '세 문자열을 연결합니다.', { e: b + c + d }),
    step('print', '결과를 출력합니다.', {}, b + c + d),
  ]);
}
add(141, [
  step('A b = new B', '실제 타입 B의 paint()를 실행합니다.', { b: 'A → B 객체' }, undefined, ['main', 'B.paint()']),
  step('super.draw()', '부모 draw()의 첫 출력은 B입니다.', {}, 'B', ['main', 'B.paint()', 'A.draw()']),
  step('        draw();', '부모 draw() 내부의 가상 호출은 B.draw()를 선택합니다.', {}, 'BD', ['main', 'B.paint()', 'A.draw()', 'B.draw()'], 1),
  step('System.out.print("C")', 'B.paint()로 돌아와 C를 출력합니다.', {}, 'BDC', ['main', 'B.paint()']),
  step('this.draw()', 'B.draw()가 D를 출력합니다.', {}, 'BDCD', ['main', 'B.paint()', 'B.draw()']),
  step('b.draw()', 'main의 마지막 호출도 B.draw()입니다.', {}, 'BDCDD', ['main', 'B.draw()']),
]);

for (const id of [144, 213]) add(id, [
  step(id === 144 ? 'int i, sum = 0;' : 'int el = 0;', '자신을 제외한 약수 합이 자기 자신인 완전수를 찾습니다.', { perfect: [] }),
  step(id === 144 ? 'if (n == sum)' : 'if (s == n)', '6의 약수 1 + 2 + 3 = 6이므로 완전수입니다.', { n: 6, divisors: [1, 2, 3], perfect: [6] }),
  step(id === 144 ? 'if (n == sum)' : 'if (s == n)', '28의 약수 1 + 2 + 4 + 7 + 14 = 28입니다.', { n: 28, divisors: [1, 2, 4, 7, 14], perfect: [6, 28] }),
  step('printf', id === 144 ? '100 이하 완전수 6과 28의 합입니다.' : '6~30의 완전수는 두 개입니다.', { result: id === 144 ? 34 : 2 }, id === 144 ? '34 ' : '2'),
], '약수 검사의 반복 중간을 생략하고 조건을 만족하는 수를 표시합니다.');
add(145, [
  step('int num', '정수와 구조체 변수를 준비합니다.', { num: 10, d1: '구조체 값', d2: '구조체 주소' }),
  step('d1.numPtr', '구조체 값은 점 연산자로 접근합니다.', { 'd1.numPtr': '&num' }),
  step('d2( ) numPtr', '구조체 포인터는 ->로 접근합니다. d2->numPtr = &num입니다.', { 'd2->numPtr': '&num' }),
  step('printf("%d", *d2', '두 포인터가 가리키는 정수는 모두 10입니다.', {}, '1010'),
], '빈칸을 ->로 채운 상태입니다.');
for (const [id, n, name] of [[148, 7, 'f'], [174, 5, 'func']]) {
  add(id, [
    step(id === 148 ? 'f(7)' : 'scanf', '팩토리얼 재귀를 시작합니다.', { n }, undefined, ['main', `${name}(${n})`]),
    ...Array.from({ length: n - 1 }, (_, i) => step(id === 148 ? 'return n * f' : 'return a * func', '인수를 1씩 줄여 재귀 호출합니다.', { n: n - i - 1 }, undefined, ['main', ...Array.from({ length: i + 2 }, (_, j) => `${name}(${n - j})`)])),
    step(id === 148 ? 'return 1' : 'if (a <= 1)', '기저 조건에서 1을 반환합니다.', { return: 1 }),
    ...Array.from({ length: n - 1 }, (_, i) => {
      const k = i + 2;
      const value = Array.from({ length: k }, (_, j) => j + 1).reduce((a, b) => a * b, 1);
      return step(id === 148 ? 'return n * f' : 'return a * func', '호출을 되돌아가며 곱셈을 완료합니다.', { n: k, return: value }, undefined, ['main', `${name}(${k}) 반환`]);
    }),
    step('printf', '최종 반환값을 출력합니다.', {}, n === 7 ? '5040' : '120'),
  ]);
}
add(150, [
  step('char* p', '문자열의 시작을 가리킵니다.', { p: 'KOREA의 K', characters: ['K', 'O', 'R', 'E', 'A'] }),
  step('printf("%s", p)', '문자열 전체를 출력합니다.', {}, 'KOREA'),
  step('printf("%s", p + 1)', '두 번째 문자부터 문자열을 출력합니다.', {}, 'KOREAOREA'),
  step('printf("%c", *p)', '첫 문자를 역참조합니다.', {}, 'KOREAOREAK'),
  step('printf("%c", *(p + 3))', '포인터를 세 칸 이동한 위치의 E를 출력합니다.', {}, 'KOREAOREAKE'),
  step('printf("%c", *p + 4)', '문자 K의 코드에 4를 더해 O를 출력합니다.', {}, 'KOREAOREAKEO'),
], '원본 코드에는 줄바꿈이 없습니다. 마지막 식은 포인터 이동이 아닌 문자 코드 덧셈입니다.');

function recurrenceTrace(id, n, name, at, printAt) {
  const steps = [step(printAt, 'n−1과 n−3을 더하는 재귀를 시작합니다. 음수도 기저 조건의 반환값입니다.', { n }, undefined, ['main', `${name}(${n})`])];
  const solve = (value, stack) => {
    if (value <= 1) {
      steps.push(step('if (', 'n ≤ 1이면 해당 n을 그대로 반환합니다.', { n: value, return: value }, undefined, stack, id === 151 ? 1 : 0));
      return value;
    }
    const a = solve(value - 1, [...stack, `${name}(${value - 1})`]);
    const b = solve(value - 3, [...stack, `${name}(${value - 3})`]);
    steps.push(step(at, `${a} + ${b} = ${a + b}를 반환합니다.`, { n: value, left: a, right: b, return: a + b }, undefined, stack));
    return a + b;
  };
  const result = solve(n, ['main', `${name}(${n})`]);
  steps.push(step(printAt, '최종 반환값을 출력합니다.', {}, String(result), ['main']));
  add(id, steps);
}
recurrenceTrace(151, 7, 'Child.compute', 'return compute(num - 1) + compute(num - 3)', 'System.out.print');
recurrenceTrace(278, 5, 'c', 'return c(n - 1)', 'printf');
add(153, [
  step('private String name', 'name은 객체마다 존재하는 인스턴스 필드입니다.', { name: '인스턴스 필드' }),
  step('public static String get', 'static 메서드는 특정 객체에 속하지 않습니다.', { get: '정적 메서드' }),
  step('return name', '객체 참조 없이 인스턴스 필드 name을 접근하므로 컴파일 오류입니다.', { errorLine: 7 }, '컴파일 오류: static 컨텍스트에서 name 접근'),
]);
add(154, [
  step('input().___()', 'split()이 공백으로 나눈 문자열 목록을 반환합니다.', { exampleInput: '10 20', tokens: ['10', '20'] }),
  step('num2 = int', '각 토큰을 정수로 변환합니다.', { num1: 10, num2: 20 }),
  step('num3 =', '두 정수를 더합니다.', { num3: 30 }, '파이썬 입출력에 대한 문제입니다.\n10 20\n'),
  step('print(num1 +', '원문의 마지막 줄은 정수와 문자열을 +로 연결하여 TypeError가 발생합니다.', { error: 'int + str' }, '파이썬 입출력에 대한 문제입니다.\n10 20\nTypeError'),
], 'split 빈칸을 채우고 예시 입력 10 20을 사용했습니다. 마지막 줄은 f-string 등의 수정이 필요합니다.');
add(163, [
  step('m.a = 100', '객체의 a를 초기화합니다.', { 'm.a': 100, 'm.b': 0 }),
  step('m.a *= 10', '같은 객체를 참조하므로 원본 a가 1000이 됩니다.', { 'm.a': 1000 }, undefined, ['main', 'func1(m)']),
  step('m.b = m.a', 'b에 현재 a 값을 복사합니다.', { 'm.b': 1000 }),
  step('m.a += m.b', 'a에 b를 더합니다.', { 'm.a': 2000 }, undefined, ['main', 'func2(m)']),
  step('System.out.printf', '객체의 a를 출력합니다.', {}, '2000'),
]);
add(166, [
  step('exam(20)', '첫 매개변수만 전달했습니다.', { num1: 20 }),
  step('def exam', '생략한 num2는 기본값 2를 사용합니다.', { num2: 2 }, undefined, ['exam(20, 2)']),
  step('print', 'print의 기본 공백 구분자를 사용합니다.', {}, 'a= 20 b= 2'),
]);
add(171, [
  step('class Car', 'Car는 Runnable을 구현합니다.', { implementation: 'Car implements Runnable' }),
  step('Thread t1', '빈칸 Car를 채워 Runnable 객체를 Thread에 전달합니다.', { t1: 'Thread(new Car())' }),
  step('t1.start()', '새 스레드에서 Car.run()을 호출합니다.', { state: 'run() 실행' }, 'message', ['Thread', 'Car.run()']),
], '원문의 system.out은 System.out으로 해석했습니다.');
add(175, [
  step('int number', '빈칸은 >, %, /입니다. 마지막 자릿수를 꺼내 결과 뒤에 붙입니다.', { number: 1234, result: 0 }),
  ...[[123, 4], [12, 43], [1, 432], [0, 4321]].map(([number, result]) => step('number = number', 'result = result × 10 + number % 10 이후 number를 정수 나눗셈으로 줄입니다.', { number, result })),
  step('printf', '뒤집은 정수를 출력합니다.', {}, '4321'),
]);
add(179, [
  step('int number', '13195의 소인수 중 최댓값을 찾습니다.', { number: 13195, max_div: 0 }),
  ...[5, 7, 13, 29].map(i => step('max_div = i', '소수이면서 나누어떨어지는 i를 만나면 최댓값을 갱신합니다.', { i, max_div: i })),
  step('printf', '마지막 갱신값을 출력합니다.', {}, '29'),
], '조건을 만족하는 반복만 표시합니다.');
add(187, [
  step('int i', 'switch는 i=3에 해당하는 case부터 시작합니다.', { i: 3, k: 1 }),
  step('case 3:', 'k를 0으로 대입합니다.', { k: 0 }),
  step('case 4:', 'break가 없어 3을 더합니다.', { k: 3 }),
  step('case 5:', '10을 뺍니다.', { k: -7 }),
  step('default:', '1을 더 뺍니다.', { k: -8 }),
  step('System.out.print', '최종 k를 출력합니다.', {}, '-8'),
]);
add(188, [
  step('A a =', '두 구조체 형태의 객체를 만듭니다.', { a: [[0, 0], [0, 0]] }),
  step('a[i].n', 'n=i, g=i+1로 초기화합니다.', { a: [[0, 1], [1, 2]] }),
  step('System.out.printf', 'a[0].n + a[1].g = 0 + 2입니다.', {}, '2'),
], 'C와 Java 문법이 혼합된 기출 의사 코드입니다. Java 출력 형태를 기준으로 분류했습니다.');
add(193, [
  step('a =', '문자열을 준비합니다.', { a: 'REMEMBER NOVEMBER' }),
  step('b =', 'a[:3]은 REM, a[12:16]은 EMBE입니다.', { b: 'REMEMBE' }),
  step('c =', '%s에 STR을 넣어 포맷합니다.', { c: 'R AND STR' }),
  step('print', 'b와 c를 연결합니다.', {}, 'REMEMBER AND STR'),
]);
add(195, [
  step('char* p2', '종료 문자까지 포인터를 전진하며 길이를 셉니다.', { p1: '2022', p2: '202207' }),
  step('int a = len', '첫 문자열은 네 글자입니다.', { a: 4 }, undefined, ['main', 'len("2022")']),
  step('int b = len', '두 번째 문자열은 여섯 글자입니다.', { b: 6 }, undefined, ['main', 'len("202207")']),
  step('printf', '두 길이의 합입니다.', {}, '10'),
]);
add(196, [
  step('int a[4]', '인접 원소 차이와 현재 원소를 누적합니다.', { a: [0, 2, 4, 8], b: [0, 0, 0], sum: 0 }),
  step('sum = sum +', 'i=1: (2−0)+2=4를 더합니다.', { i: 1, b: [2, 0, 0], sum: 4 }),
  step('sum = sum +', 'i=2: (4−2)+4=6을 더합니다.', { i: 2, b: [2, 2, 0], sum: 10 }),
  step('sum = sum +', 'i=3: (8−4)+8=12를 더합니다.', { i: 3, b: [2, 2, 4], sum: 22 }),
  step('printf', '합을 출력합니다.', {}, '22'),
]);
add(197, [
  step('Conv obj', '생성자는 a=3을 저장합니다.', { a: 3 }),
  step('obj.a = 5', '호출 전에 a를 5로 바꿉니다.', { a: 5, b: 1 }),
  ...[6, 16, 31, 51].map((b, i) => step('b = a * i + b', 'b에 5 × i를 누적합니다.', { i: i + 1, b }, undefined, ['main', 'func()'])),
  step('return a + b', 'func()는 5 + 51 = 56을 반환합니다.', { return: 56 }),
  step('system.out.print', '원본 출력 식은 obj.a + b이므로 5 + 56 = 61입니다.', {}, '61'),
], 'system.out은 System.out으로 해석했습니다. 저장된 정답 56은 func() 반환값이며 원본 최종 출력 식은 61입니다.');
add(201, [
  step('field {{', '지뢰가 있는 칸은 자신과 주변 8칸의 카운트를 증가시킵니다.', { field: [[0, 1, 0, 1], [0, 0, 0, 1], [1, 1, 1, 0], [0, 1, 1, 1]], mines: Array.from({ length: 4 }, () => [0, 0, 0, 0]) }),
  ...(() => {
    const field = [[0, 1, 0, 1], [0, 0, 0, 1], [1, 1, 1, 0], [0, 1, 1, 1]];
    const mines = Array.from({ length: 4 }, () => [0, 0, 0, 0]);
    const steps = [];
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) if (field[y][x]) {
      for (let i = y - 1; i <= y + 1; i++) for (let j = x - 1; j <= x + 1; j++) if (i >= 0 && i < 4 && j >= 0 && j < 4) mines[i][j]++;
      steps.push(step('mines[i][j] += 1', `지뢰 (${y}, ${x}) 주변의 유효한 칸을 갱신합니다.`, { y, x, mines: mines.map(row => [...row]) }));
    }
    return steps;
  })(),
  step('printf("%d", mines', '계산한 2차원 배열을 표시합니다.', {}, '1 1 3 2\n3 4 5 3\n3 5 6 4\n3 5 5 3'),
], '기출 의사 코드입니다. 배열 형태가 보이도록 출력의 행과 열을 구분했습니다.');
add(204, [
  step('int[] arr', '각 값보다 큰 원소의 수 + 1이 등수입니다.', { arr: [77, 32, 10, 99, 50], result: [0, 0, 0, 0, 0] }),
  ...[2, 4, 5, 1, 3].map((rank, i, ranks) => step('result[i]++', '해당 원소의 비교가 끝난 뒤 등수입니다.', { i, result: ranks.slice(0, i + 1).concat(Array(4 - i).fill(0)) })),
  step('printf', '입력 원소 순서대로 등수를 출력합니다.', {}, '24513'),
], '배열 표기가 섞인 C 계열 기출 의사 코드의 알고리즘을 보여줍니다.');
add(209, [
  step('TestList = [', '원본 리스트입니다.', { TestList: [1, 2, 3, 4, 5] }),
  step('TestList = list', 'map이 각 원소에 100을 더하고 list가 결과를 모읍니다.', { TestList: [101, 102, 103, 104, 105] }),
  step('print', '변환한 리스트를 출력합니다.', {}, '[101, 102, 103, 104, 105]'),
]);
add(219, [
  step('int[] tempArr', '길이 4의 배열을 만듭니다.', { tempArr: [0, 0, 0, 0] }),
  ...[0, 1, 2, 3].map(i => step('tempArr[i] = i', '각 칸에 인덱스를 저장합니다.', { i, tempArr: [0, 1, 2, 3].map((n, j) => j <= i ? n : 0) })),
  step('return tempArr', '배열 참조를 호출자에 반환합니다.', { intArr: [0, 1, 2, 3] }),
  step('System.out.print', '각 원소를 이어 출력합니다.', {}, '0123'),
], '원문의 Length는 Java 배열의 length로 해석했습니다.');
add(220, [
  step('int a', '3의 배수이면서 홀수인 마지막 수를 저장합니다.', { a: 0 }),
  step('a = i', '첫 일치값은 3입니다.', { i: 3, a: 3 }),
  step('a = i', '일치값은 3, 9, 15, …처럼 6 간격으로 나옵니다. 마지막은 993입니다.', { i: 993, a: 993 }),
  step('System.out.print', '999 미만에서 더 큰 일치값이 없어 993을 출력합니다.', {}, '993'),
], '조건을 만족하는 처음과 마지막 반복을 표시합니다.');

add(225, [
  step('struct Test test[]', '구조체 배열을 준비합니다.', { test: ['{1, AB}', '{2, DC}', '{3, EB}'] }),
  step('struct Test *p', 'p는 인덱스 1인 {2, DC}를 가리킵니다.', { 'p->i': 2, 'p->g': 'DC' }),
  step('printf', '문자열 주소를 2−1=1칸 이동하여 C부터 출력합니다.', {}, 'C'),
]);
add(226, [
  step('char str[]', '종료 문자 전까지의 길이를 셉니다.', { str: 'REPUBLICOFKOREA', a: 0 }),
  step('++a', '문자열 길이는 15입니다.', { a: 15 }),
  step('putchar', '인덱스 13의 문자 E를 출력합니다.', { index: 13 }, 'E'),
]);
add(227, [
  step('struct Node* curr', '11 → 7 → 5 순서로 순회합니다.', { chain: 't3(11) → t2(7) → t1(5)', sum: 0 }),
  ...[11, 40, 125].map((sum, i) => step('sum = sum * 3', '기존 합을 3배하고 현재 노드의 값을 더합니다.', { x: [11, 7, 5][i], sum })),
  step('sum = (sum ^ 42u)', '125 XOR 42 = 87에 100을 더합니다.', { xor: '01111101 XOR 00101010 = 01010111', sum: 187 }),
  step('printf', '최종 값을 출력합니다.', {}, '187'),
]);
add(228, [
  step('interface Machine', '인터페이스가 run() 계약을 정의합니다.', { contract: 'Machine.run()' }),
  step('class WashingMachine', '빈칸 implements로 인터페이스를 구현합니다.', { implementation: 'WashingMachine implements Machine' }),
  step('wm.run()', '구현체의 run()을 실행합니다.', {}, 'Washing machine running'),
], '인터페이스 빈칸을 채운 상태의 해설입니다.');
for (const id of [229, 234]) add(id, [
  step('result = {}', '행 인덱스를 키로 (합, 길이)를 저장합니다.', { result: '{}' }),
  ...[[15, 5], [10, 3], [18, 5], [9, 2]].map(([sum, length], index, rows) => step('result[index] =', '현재 행의 합과 원소 수를 튜플로 저장합니다.', { index, list_sum: sum, list_len: length, result: '{' + rows.slice(0, index + 1).map((r, i) => `${i}: (${r[0]}, ${r[1]})`).join(', ') + '}' })),
  step('print', '딕셔너리 전체를 출력합니다.', {}, '{0: (15, 5), 1: (10, 3), 2: (18, 5), 3: (9, 2)}'),
], '채점 데이터는 딕셔너리 값만 나열하는 형식입니다. 콘솔은 원본 print(result) 형식입니다.');
add(232, [
  step('Square sq', '한 변의 길이 10으로 자식 객체를 생성합니다.', { a: 10 }),
  step('____(a,a)', 'super(a, a)가 부모 생성자를 호출하여 가로·세로를 초기화합니다.', { width: 10, height: 10 }, undefined, ['main', 'Square(10)', 'Rectangle(10, 10)']),
  step('return width * height', '면적은 10 × 10입니다.', {}, '100'),
], '빈칸 super를 채운 뒤의 실행입니다.');
add(237, [
  step('Tri t', 'Tri.A.name()은 A이므로 길이가 1입니다.', { name: 'A', index: 1 }),
  step('Tri.values()', '선언 순서 배열 [A, B, C]의 인덱스 1은 B입니다.', { values: ['A', 'B', 'C'], t: 'Tri.B' }),
  step('System.out.print', 'B에 연결된 code 문자열 AB를 출력합니다.', {}, 'AB'),
]);
add(241, [
  step('int arr[10]', '두 함수는 같은 배열의 평균을 계산합니다.', { arr: [80, 20, 50, 55, 45, 95, 55, 10, 40, 80], len: 10 }),
  step('return av / len', '인덱스로 접근한 합 530을 길이 10으로 나눕니다.', { sum: 530, 'arr1()': 53 }, undefined, ['main', 'arr1()']),
  step('av += (double)( *', '포인터 접근 *(p+i)는 p[i]와 동일합니다.', { 'arr2()': 53 }, undefined, ['main', 'arr2()']),
  step('printf', '두 평균의 합을 소수점 두 자리로 출력합니다.', {}, '106.00'),
]);
add(247, [
  step('A a =', 'A 타입 참조가 B 객체를 가리킵니다.', { a: 'A → B 객체' }),
  step('return f("a")', 'A.g()의 컴파일 문맥에서는 f(Object)만 후보입니다.', { signature: 'f(Object)' }, undefined, ['main', 'A.g()']),
  step('return "2"', '실제 객체 B에서 재정의한 f(Object)를 실행합니다.', { return: '2' }, undefined, ['main', 'A.g()', 'B.f(Object)']),
  step('System.out.println', 'B.f(String)의 3이 아니라 2를 출력합니다.', {}, '2'),
]);
add(248, [
  step('i = input()', '문제에서 지정한 입력 HumanDev를 사용합니다.', { i: 'HumanDev' }),
  step("y = ''.join(x)", '공백으로 분리하고 다시 합쳐도 이 입력은 같습니다.', { x: ['HumanDev'], y: 'HumanDev' }),
  step("z = ''.join", '뒤집은 veDnamuH에서 o, n, g를 제외합니다.', { reversed: 'veDnamuH', z: 'veDamuH' }),
  step('print', '필터링한 문자열을 출력합니다.', {}, 'veDamuH'),
]);
add(252, [
  step('int n[]', '정수 배열과 함수 포인터를 준비합니다.', { n: [16, 32], 'mine.fn': 'dummy' }),
  step('return d + 1', 'dummy는 두 번째 원소를 가리키는 주소를 반환합니다.', { return: '&n[1]' }, undefined, ['main', 'dummy(n)']),
  step('printf', '역참조 결과 32를 %x로 출력하므로 16진수 20입니다.', { decimal: 32, hex: '0x20' }, '20'),
]);
add(253, [
  step('lst =', '0~9 리스트를 준비합니다.', { lst: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }),
  step('for c in', '끝에서 시작하여 두 칸씩 뒤로 이동합니다.', { selected: [9, 7, 5, 3, 1] }),
  ...[9, 7, 5, 3, 1].map((c, i, values) => step("print(c, end='A')", '각 숫자 뒤에 A를 붙입니다.', { c }, values.slice(0, i + 1).map(v => `${v}A`).join(''))),
  step('print()', '마지막에 줄바꿈합니다.', {}, '9A7A5A3A1A\n'),
]);
add(254, [
  step('m =', '각 원소를 내부 리스트로 감쌉니다.', { m: [[1], [2], [3], [4]] }),
  step('b = m[:]', '바깥 리스트만 복사됩니다. 내부 리스트는 m과 b가 공유합니다.', { b: 'm과 같은 내부 리스트 참조' }),
  ...[[[1], [2, 1], [3], [4]], [[1], [2, 1], [3, 2, 1], [4]], [[1], [2, 1], [3, 2, 1], [4, 3, 2, 1]]].map((m, i) => step('b[i+1] += b[i]', '+=는 내부 리스트를 직접 확장하므로 m에도 반영됩니다.', { i, m })),
  step('return sum', '내부 리스트 길이 1 + 2 + 3 + 4를 더합니다.', { lengths: [1, 2, 3, 4] }, '10'),
]);
add(257, [
  step('String x3', '정수와 문자열을 준비합니다.', { x1: 9, x2: 2, x3: '3' }),
  step('System.out.println', '왼쪽부터 9 + 2 = 11을 먼저 계산합니다.', { expression: 11 }),
  step('System.out.println', '문자열 2를 만나면 이후 +는 문자열 연결입니다.', { expression: '112' }),
  step('System.out.println', '마지막 문자열 3을 붙입니다.', { expression: '1123' }, '1123'),
]);
add(262, [
  step('B obj', 'B 생성자가 부모 생성자에 10을 전달합니다.', { 'A.a': 10 }, undefined, ['main', 'B(10, 20)', 'A(10)']),
  step('this.b = b', '자식 필드 b를 20으로 초기화합니다.', { 'B.b': 20 }),
  step('super.print()', '부모 print()가 10a를 출력합니다.', {}, '10a', ['main', 'B.print()', 'A.print()']),
  step('System.out.print(b', '자식 print()가 20b를 이어 출력합니다.', {}, '10a20b', ['main', 'B.print()']),
]);
add(265, [
  step('str01 =', '딕셔너리 삽입 순서대로 키와 값을 순회합니다.', { str01: '' }),
  ...[['NYC', 'New York'], ['LON', 'London'], ['PAR', 'Paris'], ['TKY', 'Tokyo']].map(([key, location], i, pairs) => step('str01 +=', '키의 마지막 문자와 도시의 첫 문자를 연결합니다.', { key, location, str01: pairs.slice(0, i + 1).map(([k, v]) => k.at(-1) + v[0]).join('') })),
  step('print', '누적 결과를 출력합니다.', {}, 'CNNLRPYT'),
]);
add(267, [
  step('pst(&na)', '왼쪽 → 오른쪽 → 자신 순서의 후위 순회입니다.', { tree: ['21 → [12, 64]', '12 → [35, 53]'], c: 0, ans: 0 }),
  ...[35, 53, 12, 64, 21].map((value, i) => step('if (++c == 3)', '방문 수를 먼저 늘린 뒤 세 번째 방문의 값을 저장합니다.', { visit: value, c: i + 1, ans: i >= 2 ? 12 : 0 }, undefined, ['main', `pst(${value}) 반환`])),
  step('printf', '세 번째 방문 노드의 값을 출력합니다.', {}, '12'),
], '원본 printf 문자열 안의 개행은 줄바꿈 이스케이프 의도로 해석합니다.');
add(269, [
  step('int i = 30', '정수와 배열을 준비합니다.', { 'main.i': 30, list: [2, 4, 6, 8, 10] }),
  step('fn1(&i)', '주소를 전달하므로 원본 i를 50으로 변경합니다.', { 'main.i': 50 }, undefined, ['main', 'fn1(&i)']),
  step('printf("1.', '첫 출력은 50입니다.', {}, '1. 50\n'),
  step('fn2(i)', '값으로 전달된 지역 매개변수만 60이 됩니다.', { 'fn2.i': 60, 'main.i': 50 }, undefined, ['main', 'fn2(50)']),
  step('printf("2.', 'main의 i는 여전히 50입니다.', {}, '1. 50\n2. 50\n'),
  step('printf("3.', '*p는 배열 첫 원소 2입니다.', { p: '&list[0]' }, '1. 50\n2. 50\n3. 2\n'),
  step('printf("4.', '*(p+3)은 인덱스 3의 원소 8입니다.', {}, '1. 50\n2. 50\n3. 2\n4. 8\n'),
], '채점은 출력 번호를 제외한 값만 사용합니다. 원본 문자열의 개행을 의도된 줄바꿈으로 표시합니다.');
add(275, [
  step('aaa.set', '부모 객체의 필드를 초기화합니다.', { 'aaa.a': 1, 'aaa.b': 5, 'aaa.c': 3 }),
  step('bbb.set', '자식 객체도 상속된 set()으로 필드를 초기화합니다.', { 'bbb.a': 10, 'bbb.b': 30, 'bbb.c': 50 }),
  step('int hap()', 'A.hap()은 세 필드를 더하여 9를 반환합니다.', { 'aaa.hap()': 9 }),
  step('public int hap()', 'B.hap()은 a × c를 계산하여 500을 반환합니다.', { 'bbb.hap()': 500 }),
  step('System.out.print', '9 + 500을 출력합니다.', {}, '509'),
]);

export function hasCodeTrace(question) {
  return Boolean(traces[question?.id]);
}

export function getCodeTrace(question) {
  const trace = traces[question?.id];
  if (!trace) return null;
  const lines = question.passageOrCode.split('\n');
  let variables = {};
  let output = '';
  return {
    note: trace.note,
    steps: [
      { line: null, explanation: '시작 전입니다. 다음 단계로 코드의 동작을 따라가세요.', variables: {}, output: '', stack: [] },
      ...trace.steps.map(item => {
        const lineIndex = lines.map((line, index) => line.includes(item.at) ? index : -1).filter(index => index >= 0)[item.occurrence];
        variables = { ...variables, ...item.variables };
        if (item.output !== undefined) output = item.output;
        return { ...item, line: lineIndex === undefined ? null : lineIndex + 1, variables, output };
      }),
    ],
  };
}
