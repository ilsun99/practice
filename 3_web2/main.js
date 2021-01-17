const http = require("http");
const fs = require("fs");
const url = require("url");
// 여기서 url은 모듈을 받아온 것
const qs = require("querystring");
const template = require("./lib/template.js");
const path = require("path");
const sanitizeHtml = require("sanitize-html");

const app = http.createServer(function (req, res) {
  var _url = req.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  // console.log(queryData.id); id 값을 받아옴
  // _url은 요청받은 url이라는 뜻
  // url.parse는 url문자열을 url객체로 반환해준다.
  // true일 경우 .query, .pathname을 객체로 반환한다.

  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./data", function (err, filelist) {
        var title = "welcome Homepage";
        var description = "hello node.js";
        var list = template.list(filelist);
        var html = template.HTML(
          title,
          list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>`
        );
        res.writeHead(200);
        res.end(html);
      });
    } else {
      fs.readdir("./data", function (err, filelist) {
        var filteredId = path.parse(queryData.id).base;
        // 보안을 위한 코드, ../ 이 부분이 세탁되고 path만 남음
        fs.readFile(`data/${filteredId}`, "utf8", function (err, data) {
          var title = queryData.id;
          var sanitizedTitle = sanitizeHtml(title);
          var sanitizedDescription = sanitizeHtml(description);
          var list = template.list(filelist);
          var description = data;

          var html = template.HTML(
            sanitizedTitle,
            list,
            `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
            `<a href="/create">create</a> 
            <a href="/update?id=${sanitizedTitle}">update</a>
            <form action="delete_process" method="post">
              <input type="hidden" name="id" value="${sanitizedTitle}">
              <input type="submit" value="delete">
            </form>`
          );
          res.writeHead(200);
          res.end(html);
        });
      });
    }
  } else if (pathname === "/create") {
    fs.readdir("./data", function (err, filelist) {
      var title = "WEB create";
      var list = template.list(filelist);
      var html = template.HTML(
        title,
        list,
        `<form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"/></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
      `,
        ""
      );
      res.writeHead(200);
      res.end(html);
    });
  } else if (pathname === "/create_process") {
    var body = "";
    req.on("data", function (data) {
      body = body + data;
    });
    // 전송되는 데이터가 많은 경우 사용하는 방법,
    req.on("end", function () {
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      fs.writeFile(`data/${title}`, description, "utf8", function (err) {
        res.writeHead(302, { location: `/?id=${title}` });
        res.end("success");
      });
    });
  } else if (pathname === "/update") {
    fs.readdir("./data", function (err, filelist) {
      var filteredId = path.parse(queryData.id).base;
      fs.readFile(`data/${filteredId}`, "utf8", function (err, data) {
        var title = queryData.id;
        var list = template.list(filelist);
        var description = data;

        var html = template.HTML(
          title,
          list,
          `
          <form action="/update_process" method="post">
          <input type="hidden" name="id" value="${title}">
          <p><input type="text" name="title" placeholder="title" value="${title}"></p>
          <p>
            <textarea name="description" placeholder="description">${description}</textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form> 
          `,
          `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
          // id 는 유지하면서 타이틀을 바뀐 값으로 전송
        );
        res.writeHead(200);
        res.end(html);
      });
    });
  } else if (pathname === "/update_process") {
    var body = "";
    req.on("data", function (data) {
      body = body + data;
    });
    req.on("end", function () {
      var post = qs.parse(body);
      var id = post.id;
      var title = post.title;
      var description = post.description;
      fs.rename(`data/${id}`, `data/${title}`, function (error) {
        fs.writeFile(`data/${title}`, description, "utf8", function (err) {
          res.writeHead(302, { location: `/?id=${title}` });
          res.end();
        });
      });
    });
  } else if (pathname === "/delete_process") {
    var body = "";
    req.on("data", function (data) {
      body = body + data;
    });
    req.on("end", function () {
      var post = qs.parse(body);
      var id = post.id;
      var filteredId = path.parse(id).base;
      fs.unlink(`data/${filteredId}`, function (err) {
        res.writeHead(302, { location: `/` });
        res.end();
      });
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
