var person = {
  name: "ilsun",
  introduce: function () {
    return "my name is " + this.name;
  },
};
console.log(person.introduce());

var ob1 = {
  name: "ilsun",
  year: "23",
  school: "snu",
};

console.log(ob1.name);
console.log(ob1["year"]);
console.log(ob1.school);

var ob2 = {};
ob2.name = "yun";
ob2.year = "7";

console.log(ob2.name);

var ob3 = {};
ob3["name"] = "sunny";
ob3["year"] = "19";
ob3["school"] = "snu";

console.log(ob3["year"]);
