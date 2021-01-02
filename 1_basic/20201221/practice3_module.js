// 호스트 환경에 따라 모듈화하는 방식이 다르다.
// 따라하지 않아도 됨
// 읽음을 당하는 쪽이 있고, 읽는 쪽이 있다.
// node.circle.js가 읽히는 쪽, node.demo.js 가 읽는 쪽
// require라는 함수를 사용하면 읽히는 쪽을 circle이라는 변수에 저장

// node.circle.js
var PI = Math.PI;

exports.area = function (r) {
  return PI * r * r;
};

exports.circumfernce = function (r) {
  return 2 * PI * r;
};

// node.demo.js
var circle = require("./node.circle.js");
console.log("The area of a circle of radious 4 is" + circle.area(4));

// 위의 로직 중에서 export.are 부분을 사용할 수 있게 된다.
