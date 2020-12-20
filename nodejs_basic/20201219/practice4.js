function number(arg) {
  return arg * 10;
}

console.log(number(2));

function number2(arg1, arg2) {
  return arg1 + arg2;
}

console.log(number2(10, 20));

function hnam(arg) {
  return "배통통" + arg + "번!";
}

for (arg = 0; arg < 10; arg = arg + 1) {
  console.log(hnam(arg));
}

var t = prompt("배통통 몇 번?");

for (i = 1; i < t; i = i + 1) {
  document.write(i + "통통!" + "<br />");
}

var id = prompt("put your id");

if (id === "ilsun") {
  alert("id success");
  var password = prompt("put your password");

  if (password === "111111") {
    alert("login success");
  } else {
    alert("login fail");
  }
} else {
  alert("login fail");
}
