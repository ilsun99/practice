function get_members() {
  return ["egoing", "k8805", "sorialgi"];
}
// 함수 get_members()는 저 배열을 리턴값으로 갖는다.
var members1 = get_members();
// 함수를 호출한 결과를 members1 이라는 변수에 담는다.
console.log(members1[0].toUpperCase() + "<br />");
console.log(members1[1].toUpperCase() + "<br />");
console.log(members1[2].toUpperCase() + "<br />");

// members1[0]은 members에 담긴 값 중 첫 번째 값을 불러온다.
// members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
// 하나를 추가하면 그것은 출력되지 않는다.
// 하나를 지우면 toUpperCase를 불러오지 못한다. 정의되지 않은 데이터에서 함수를 호출했기 때문에
// toUpperCase 같은 건 내장 함수이고, 우리가 정의한 것은 사용자 정의 함수이다.

var a = ["ilsun", "sunny", "yun"];
console.log(a.length); // 3
// length는 a에 몇 개의 값이 담겨있는지는 알려준다.

function get_members() {
  return ["egoing", "k8805", "sorialgi"];
}
var members = get_members();
for (var i = 0; i < members.length; i++) {
  console.log(members[i].toUpperCase());
  console.log("<br />");
}
// 우리가 처리하고자 하는 배열의 원소 개수만큼 반복하도록 하는 것
