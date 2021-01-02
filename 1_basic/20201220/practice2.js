// 함수와 배열을 사용해서 대문자로 나오게

function get_members() {
  return ["ilsun", "yun", "n_snow"];
}

var members = get_members();

for (i = 0; i < members.length; i++) {
  console.log(members[i].toUpperCase());
}
