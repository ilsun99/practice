// entry application, 최초의 진입점

const express = require("express");
var app = express();
// 기본 형식

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
