var http = require("http");
var fs = require("fs");
var url = require("url");
// 여기서 url은 모듈을 받아온 것

var app = http.createServer(function (req, res) {
  var _url = req.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var title = queryData.id;
  // console.log(queryData.id); id 값을 받아옴
  // _url은 요청받은 url이라는 뜻
  // url.parse는 url문자열을 url객체로 반환해준다.
  // true일 경우 .query, .pathname을 객체로 반환한다.

  if (pathname === "/") {
    fs.readFile(`data/${queryData.id}`, "utf8", function (err, data) {
      var description = data;
      var template = `
    <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    <ul>
      <li><a href="/?id=html">HTML</a></li>
      <li><a href="/?id=css">CSS</a></li>
      <li><a href="/?id=javascript">Javascript</a></li>
    </ul>
    <h2>${title}</h2>
    <p>${description}</p>
  </body>
  </html>`;
      res.writeHead(200);
      res.end(template);
    });
  } else {
    res.writeHead(200);
    res.end("cannot find");
  }
});
// res.writeHead: res를 헤더에 담아 내보낸다.
// write: 바디 부분, 보낼 것이 더 있으면 여러 번 작성 가능
// res.end: 응답 종료. 인수값을 내보낸 후 콘텐츠 응답을 완료한다.
// -> 이 세개로 요청에 응답하는 것

if (app.listen(3000)) {
  console.log("listening to port 3000");
}
