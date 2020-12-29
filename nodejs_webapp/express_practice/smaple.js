const http = require("http");

const hostname = "127.0.0.1";
const port = 1337;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

// 같은 내용
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
});

// listening이 수립되고 웹서버에 사용자가 왔을 때 어떤 내용을 출력할 것인가
// req: 요청, res: 응답을 인자로
//

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// listen 작업은 시간이 걸리기 때문에 callback으로 비동기적 작용을 함
// listen이 완료되었을 때 콘솔 로그가 실행되도록
