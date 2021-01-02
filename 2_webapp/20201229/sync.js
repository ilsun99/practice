var fs = require("fs");

console.log(1);

var data = fs.readFileSync("sample", { encoding: "utf8" });

console.log(data);
// 이 방식을 사용하면 파일을 읽는 데에 10분이 걸리면 그동안 가만히 있다가 출력됨

console.log(2);
var data2 = fs.readFile("smaple", { endocing: "utf8" }, function (err, data) {
  console.log(3);
  console.log(data2);
});

console.log(4);
// 2, 4, 3 순서로 출력
// 3은 비동기로 처리
