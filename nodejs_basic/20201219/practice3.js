for (i = 0; i < 10; i = i + 1) {
  console.log("hellow world");
}

var k = 0;

while (k < 10) {
  if (k === 5) {
    break;
  }
  console.log("while use" + k);
  k = k + 1;
}

for (j = 0; j < 10; j = j + 1) {
  for (m = 0; m < 10; m = m + 1) {
    console.log("hello" + j + m);
  }
}
