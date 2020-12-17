var a = 1;

if (2 === a) {
  console.log("true");
  // 만약 a가 2이면 'true'를 산출하라
} else {
  console.log("true 2");
}
// 그렇지 않다면 'true 2'를 산출하라

var b = "yes";

if (b === "no") {
  console.log(1);
  // 만약 b가 'no'라면 1을 산출하라
} else if (b === "dont know") {
  console.log(2);
  // 그렇지 않고 만약 b가 'dont know'라면 2를 산출하라
} else {
  console.log(3);
}
// 그렇지 않다면 3을 산출하라
