// express, jade, bodyparser, prettty

const express = require("express");
const fs = require("fs");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", "./views_file");
app.set("view engine", "jade");
app.locals.pretty = true;

app.get("/topic/new", function (req, res) {
  fs.readdir("data", function (err, files) {
    if (err) {
      console.log(err);
      res.status(500).send("internal server error");
    }
    res.render("new", { topics: files });
  });
});

app.get(["/topic", "/topic/:id"], function (req, res) {
  fs.readdir("data", function (err, files) {
    if (err) {
      console.log(err);
      res.status(500).send("internal server error");
    }
    var id = req.params.id;
    if (id) {
      // id 값이 있을 때
      fs.readFile("data/" + id, "utf8", function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send("internal server error");
        }
        res.render("view", {
          topics: files,
          title: id,
          description: data,
        });
      });
    } else {
      // id 값이 없을 때
      res.render("view", {
        topics: files,
        title: "Welcome",
        discription: "Hello Javascript",
      });
    }
  });
});

/*
app.get("/topic/:id", function (req, res) {
  var id = req.params.id;
  fs.readdir("data", function (err, files) {
    if (err) {
      console.log(err);
      res.status(500).send("internal server error");
    }
    fs.readFile("data/" + id, "utf8", function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send("internal server error");
      }
      res.render("view", {
        topics: files,
        title: id,
        description: data,
      });
    });
  });
});
*/

app.post("/topic", function (req, res) {
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile("data/" + title, description, function (err) {
    if (err) {
      console.log(err);
      res.status(500).send("internal server error");
    }
    res.redirect("/topic/" + title);
  });
});

app.listen(3000, function () {
  console.log("Now, we are listening to 3000");
});
