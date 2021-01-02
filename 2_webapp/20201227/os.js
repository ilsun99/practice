/*const http = require("http");

const hostname = "127.0.0.1";
const port = 1337;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }); */

//* 모듈: 부품이라고 생각
// nodejs가 이미 마련한 웹서버를 가져다 쓰는 방법
// require: 모듈을 불러오는 것, 리턴값을 불러와서 http에 담은 것
// constant: 상수
// http라는 모듈에 속한 server라는 객체를 리턴한다.

var o = require("os");
console.log(o.platform());
// os라는 모듈은 platform이라는 메소드를 가진다.
// require라는 함수는 os 모듈을 리턴한다.
