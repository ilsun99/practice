var pattern = /a/;

console.log(pattern.exec("abscdsnksnk"));

console.log(pattern.test("defwewwvwV"));

var str = "acfjdskjcnksjvcnasalkmalscASACVADGVA";

console.log(str.match(pattern));

var pattern1 = /a/gi;

console.log(str.match(pattern1));
console.log(str.replace(pattern, "A"));

var pattern2 = /(\w+)\s(\w+)/;
var str1 = "coding everybody";
var result = str1.replace(pattern2, "$2, $1");
console.log(result);
