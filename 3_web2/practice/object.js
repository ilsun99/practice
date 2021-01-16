var members = ["ilsun", "yun", "sunny"];
console.log(members[1]);

for (i = 0; i < members.length; i = i + 1) {
  console.log("array loop", members[i]);
}

var roles = {
  programmer: "ilsun",
  designer: "sunny",
  pm: "yun",
};
console.log(roles.programmer);
console.log(roles["designer"]);

for (var name in roles) {
  console.log("object ->", name, "values ->", roles[name]);
}
