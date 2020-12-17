//* 비교

// 비교는 조건문과 결합되었을 때 효용을 발휘한다.
// 연산자: 어떤 작업을 컴퓨터에 지시하기 위한 기호 ex. =
// 비교연산자: 주어진 값들이 같은지, 다른지, 큰지, 작은지 구분 -> 결과는 true or false
// boolean: true와 false의 데이터 형식

//* 비교연산자
// 1) == : 동등 연산자로 좌항과 우항을 비교해서 값이 같다면 true, 아니면 false 가 된다.
// 여기서 =가 두 개이다. 하나는 대입 연산자로 좌항 값을 우항의 변수에 대입할 때 사용하는 것이므로 의미가 다르다.
alert(1 == 2); // false
alert("one" == "one"); // true

// 2) === : 일치 연산자. 좌항과 우항이 정확하게 같을 때 true 아니면 false
// 정확하다는 의미를 이해해보자.
alert(1 == 1); // true
alert(1 === "1"); // false
alert(1 == "1"); // true
// -> == 보다는 === 를 사용하는 것이 좋다. 데이터타입을 고려하자!

alert(null == undefined); // true
alert(null === undefined); //false
// var a; undefined: 정의되어있지 않은, a라는 변수가 존재하긴 하는데 어떤 값도 들어있지 않다.
// var a = null; null: 값이 없는, a라는 변수의 값이 없다. 프로그래머의 의도로 값이 없다.
// boolean: true / false 의 데이터타입
// undefined: undefined라는 데이터타입
// null: null이라는 데이터타입

alert(true == 1); //true
alert(true === 1); //false
alert(true == "1"); //true
alert(true === "1"); //false
// == 에서는 숫자나 문자  1을 true로 간주한다.

alert(0 === -0); //true
alert(NaN === NaN); //false
// NaN는 0을 0으로 나눈 값, NaN 이라는 데이터타입
// NaN은 계산할 수 없음, 숫자가 아님, 즉 동일하지 않다.

// 3) ! : 부정을 의미한다. 같다의 부정은 같지 않다 이다. 기호로는 != 로 표시
// 느낌표 != 는 ==의 반대값을 나타낸다.
alert(1 != 2); //true
alert(1 != 1); //false
alert("one" != "two"); //true
alert("one" != "one"); //false
// 느낌표 !== 는 ===의 반대값을 나타낸다. 정확하게 같지 않다.

// 4) >, < 숫자들의 크기를 비교
alert(10 > 20); //false
alert(10 > 1); //true
alert(10 > 10); //false

// 5) >=, =< 이상, 이하 관계
alert(10 >= 20); //false
alert(10 >= 1); //true
alert(10 >= 10); //true

//* 조건문 conditional statement

// 조건문이란 주어진 조건에 따라 에플리케이션을 다르게 동작하도록 하는 것이다.

// 1) if
// 조건문은 if로 시작한다. if 뒤의 괄호에 조건이 오고 조건이 될 수 있는 값은 Boolean이다.
// Boolean의 값이 true라면 조건이 담겨진 괄호 다음의 중괄호 구문이 실행된다.
// 즉 괄호 안의 조건이 true가 된다면 중괄호 안의 동작이 실행된다.

// 아래 예시의 실행 결과는 result: true이다. if 뒤에 true가 왔기 때문에
if (true) {
  alert("result : true");
}
// 아래 예시는 아무것도 출력하지 않는다. if 뒤에 false가 왔기 때문에
if (false) {
  alert("result : true");
}

if (true) {
  alert(1);
  alert(2);
  alert(3);
  alert(4);
}

alert(5);

// 2) else

//ex 1)

if (true) {
  alert(1); // if 의 이 부분이 실행이 되면 뒤에 else부분은 실행되지 않는다.
} else {
  alert(2);
}

//ex 2)

if (false) {
  alert(1);
} else {
  alert(2);
}

// 3) else if

//ex 1)
if (false) {
  alert(1);
} else if (true) {
  alert(2); // 이 구간이 실행된다.
} else if (true) {
  alert(3);
} else {
  alert(4);
}
// 결과 : 2

//ex 2)
if (false) {
  alert(1);
} else if (false) {
  alert(2);
} else if (true) {
  alert(3);
} else {
  alert(4);
}
//결과 3

//ex 3
if (false) {
  alert(1);
} else if (false) {
  alert(2);
} else if (false) {
  alert(3);
} else {
  alert(4);
}
