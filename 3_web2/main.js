var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (req, res) {
  var _url = req.url;
  var queryData = url.parse(_url, true).query;
  var title = queryData.id;
  // console.log(queryData.id); id 값을 받아옴

  if (url == "/favicon.ico") {
    res.writeHead(404);
    res.end();
    return;
  }

  if (_url == "/") {
    var title = "welcome";
  }

  res.writeHead(200);

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
    res.end(template);
  });
});

if (app.listen(3000)) {
  console.log("listening to port 3000");
}
