const _ = require("underscore");
// underscore모듈을 가져온 다음에 그것을 사용할 수 있도록 객체를 리턴한다.
// underscore는 _를 쓰는 관습이 있다.

var arr = [3, 6, 9, 1, 12];

console.log(arr[0]);
console.log(_.first(arr));
// 3 -> 배열의 첫 번째 원소를 리턴한다.

console.log(arr[arr.length - 1]);
console.log(_.last(arr));
// 12 마지막 원소를 리턴한다.
