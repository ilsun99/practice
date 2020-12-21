// 객체지향

var grades = {
  list: { ilsun: 10, yun: 8, sunny: 20 }, // key
};
alert(grades["list"]); // { 'ilsun': 10, 'yun': 8, 'sunny': 20 }
alert(grades["ilsun"]); // 10

// grades라는 변수 안에는 list라는 key가 있다.
// 이 list라는 key 안에 담긴 값은 또 다른 객체이다.

var grades = {
  list: { ilsun: 10, yun: 8, sunny: 20 }, // key
  show: function () {
    // 객체 안에 담기는 다른 값
    alert("hellow");
  },
};
grades["show"](); // 이것이 가리키는 대상은 show 함수의 선언
// 객체 안에 함수도 저장될 수 있다. 함수도 일종의 값이고 변수에 저장될 수 있기 때문에

//this 는 약속된 변수이다. 함수가 속해있는 객체를 가리킨다.

var grades = {
  list: { ilsun: 10, yun: 8, sunny: 20 }, // key
  show: function () {
    // 객체 안에 담기는 다른 값
    alert(this.list);
  },
};
// this: grades 를 가리킨다. 함수가 소속된 객체를 가리킨다.
// this.list: list의 값을 알려준다.

var grades = {
  list: { ilsun: 10, yun: 8, sunny: 20 }, // key
  show: function () {
    for (var name in this.list) {
      console.log(name, this.list[name]); // 콤마를 통해 여러 개의 값을 출력할 수 있다.
    }
  },
};
grades.show();

// grades 라는 객체가 있고, 그 안에 데이터들이 있다.
// 그리고 그 데이터를 사용하는 함수가 들어있다.
// 그 함수를 호출할 때는 객체 이름을 적고 .show 를 하면 그 객체에 소속된 함수를 호출하여 일을 처리
// grades는 list라는 데이터와 show라는 함수를 가진 하나의 객체이다.
// 서로 관련성이 있는 것들끼리 그루핑을 할 수 있다.
// 이런 것을 객체지향 프로그래밍이라고 한다.
// 서로 연관된 값과 연관된 데이터의 처리를 하나의 그릇 안에 모아놓는 프로그래밍 기법
