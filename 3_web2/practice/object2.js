var o = {
  v1: "v1",
  v2: "v2",
  f1: function () {
    console.log(this.v1);
  },
  f2: function () {
    console.log(this.v2);
  },
};

o.f1();
o.f2();

// 연관이 있는 변수와 메소드를 하나에 묶어놓는 방법
// 자신이 속한 객체를 참조할 수 있는 약속 this
