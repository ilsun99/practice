// entry application, 최초의 진입점

const express = require("express");
var bodyParser = require("body-parser");
var app = express();
// 기본 형식
app.set("view engine", "jade");
app.set("views", "./views");
app.locals.pretty = true;
// 템플릿엔진 연결
app.use(express.static("public"));
// 미들웨어 함수를 사용
app.use(bodyParser.urlencoded({ extended: false }));
// 바디파서 사용

app.get("/topic/:id", function (req, res) {
  var topics = ["javascript is ...", "nodejs is...", "express is..."];
  var output = `
  <a href="/topic?id=0">javascript</a><br>
  <a href="/topic?id=1">nodejs</a><br>
  <a href="/topic?id=2">express</a><br>
  ${topics[req.params.id]}
  `;

  res.send(output);
});
// 쿼리스트링 부분
// 요청인 req값으로 요청 정보가 들어오게 된다.
// 쿼리값은 url에서 &로 구분

app.get("/topic/:id/:mode", function (req, res) {
  res.send(req.params.id + "," + req.params.mode);
});
// 시멘틱 url은 query를 params로 변경

app.get("/form", function (req, res) {
  res.render("form");
});
app.get("/form_receiver", function (req, res) {
  var title = req.query.title;
  var description = req.query.description;
  res.send(title + "," + description);
});
// jade와 연동해서 form을 받고, url을 생성하는 역할
// jade의 메소드를 get으로 바꾸어야 한다.

app.post("/form_receiver", function (req, res) {
  var title = req.body.title;
  var description = req.body.description;
  res.send(title + "," + description);
});
// post 방식으로 전달했을 때 받아주는 코드

app.get("/template", function (req, res) {
  res.render("temp", { time: Date(), _title: "Jade" });
});
// 템플릿이라는 경로로 들어온 사용자에게 temp라는 파일을 렌더링한다.

app.get("/dynamic", function (req, res) {
  var lis = "";
  for (var i = 0; i < 5; i++) {
    lis = lis + "<li>coding</li>";
  }
  var time = Date();
  var output = `
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    hello, Dynamic !
    <ul>
    ${lis}
    </ul>
    ${time}
  </body>
</html>`;
  res.send(output);
});
// html 여러 줄을 쓰는 건 역슬래시를 붙이면 가능하다.
// 하지만 가독성이 좋지 않아서 잘 쓰지 않는다.
// 포매티드 텍스트라는 기능 사용 ``
// 동적으로 파일을 처리하는 경우 접속을 끊었다가 다시 연결해야 함
// 문자 안에 중괄호를 넣는 방법 ${}

app.get("/route", function (req, res) {
  res.send('hellow Router, <img src="/윤.PNG">');
});
// public에 정적인 파일을 가져다 놓으면 사용할 수 있게 된다

app.get("/", function (req, res) {
  res.send("Hello home page");
});
// url로 들어오는 방식은 get 방식
// 이중에서 홈페이지로 들어온 사용자
// 사용자가 홈으로 접속하면 두 번째 인자로 전달된 함수 실행
// 이때 콜백함수는 req res를 파라미터로 받음
app.get("/login", function (req, res) {
  res.send("login please");
});
// /login으로 접속했을 때 무엇을 보여줄지 결정
// get: 사용자가 어떠한 경로로 들어왔을 때 어떤 것이 실행될지 결정해주는 역할
// -> 이런 것들을 라우터라고 함, 라우팅한다.
// 라우트: 길을 찾는다.

app.listen(3000, function () {
  console.log("connected 3000 port");
});
// 포트를 리스닝하도록
// 리스닝이 성공하면 함수가 실행된다.
