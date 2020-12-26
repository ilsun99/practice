// 프로그래머라는 생성자를 통해서 만든 객체가 person에 의해 만들어진 객체와 동일한 기능을 갖도록

function Person(name) {
  this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function () {
  return "My name is " + this.name;
};

function Programmer(name) {
  this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function () {
  return "hello world";
};

var p1 = new Programmer("ilsun");
document.write(p1.introduce());
document.write(p1.coding());
// 여기서 프로그래머라는 객체에는 introduce라는 메소드가 정의되지 않았다.
// 프로그래머라는 생성자가 person을 상속하고 있기 때문이다.
// 프로그래머의 prototype이라는 속성으로 new Person을 준 것
// 객체를 생성할 때 prototype이라는 속성을 생성자 함수가 가지고 있는지 확인
// 그 함수 안에 들어 있는 객체와 똑같은 객체를 만들어서 생성자의 결과로 리턴함
// new Person을 통해 만든 객체는 prototype이라는 속성을 가짐

function Designer(name) {
  this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.design = function () {
  return "beutiful";
};

var p2 = new Designer("yun");
document.write(p2.introduce());
document.write(p2.design());

// person이라는 공통의 부모가 있고, 프로그래머와 디자이너는 이를 상속
// 자기소개라는 기능은 그대로 상속, 각각 새로운 기능을 추가할 수 있음
