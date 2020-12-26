function person(name) {
  this.name = name;
  this.introduce = function () {
    return "my name is " + this.name;
  };
}

var per1 = new person("ilsun");
console.log(per1.introduce());
var per2 = new person("yun");
console.log(per2.introduce());
