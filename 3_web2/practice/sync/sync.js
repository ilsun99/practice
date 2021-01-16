var fs = require("fs");

/*
console.lof('A');
var result = fs.readFileSunc('practice/sync/sample.txt', 'utf8');
console.log(result);
console.log('C');
A, B, C
*/

console.lof("A");
fs.readFile("practice/sync/sample.txt", "utf8", function (err, result) {
  console.log(result);
});
console.log("C");
// A, C, B
// 파일을 읽는 작업이 끝나면 함수를 실행시킨다.
