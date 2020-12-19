var id = prompt("put your id");
var password = prompt("put your password");

if (id === "ilsun99" && password === "990220") {
  console.log("yes");
} else {
  console.log("unsuccess");
}

// 2)
var id = prompt("your id");

if (id === "ilsun" || "dongsan" || "yun") {
  console.log("id success");
} else {
  console.log("unsuccess");
}

var password = prompt("your password");

if (password === "111111") {
  console.log("password succes");
  console.log("welcome" + " " + id + " " + "thank you for visit");
} else {
  console.log("password fail");
}

//3

var id = prompt("id please");

if (id === "ilsun") {
  // if 다음에 ; 붙이면 안 된다!
  var password = prompt("password please");
  if (password === "990220") {
    // 여기서 그냥 =를 쓰면 안 된다!
    alert("login success");
  } else {
    alert("login fail");
  }
} else {
  alert("logiin fail");
}

// loop
var i = 0;

while (i < 10) {
  document.write("hello world" + i + "<br />");
  i = i + 1;
}

var i = 0;

while (i < 10) {
  document.write("number" + i + "<br />");
  i = ++i;
}

for (var i = 0; i < 10; i = i + 1) {
  document.write("hellow!" + i + "<br />");

  for (var i = 0; i < 10; i++) {
    document.write("coding everybody" + i + "<br />");
  }
}
