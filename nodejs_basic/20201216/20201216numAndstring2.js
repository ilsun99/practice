//* 숫자의 사용 

console.log(
    
    Math.pow(3,2),
    /// 제곱
    /// 여기서 . 은 객체라는 개념으로 나중에 할 것 
    /// Math라는 것 안에 pow라는 명령이 있음

    Math.round(10.6),
    /// 반올림 

    Math.ceil(10.2),
    /// 정수로 올림 

    Math.floor(10.2),
    /// 정수로 내림 

    Math.sqrt(9),
    /// 제곱근 

    Math.random(),
    /// 랜덤한 숫자 

    100 * Math.random(),
    /// 100 이하의 임의의 수 
    /// random은 1 이하의 랜덤 수 

    Math.round(100 * Math.random())

);

console.log('박지현 바보') ;
console.log('이준엽 멍청이') ;



//* 문자의 사용 

console.log('hello world'); 
// 문자는 작은따옴표 사이나 큰따옴표 사이에 적어야 한다. 
// 역슬래쉬를 사용하면 따옴표 사이에 따옴표를 사용할 수 있음 ('ilsun\'s coding')
// 역슬래쉬 뒤에 있는 기호는 정보로 해석한다. -> escape 라고 함 


1 
"1" 
// 이 둘은 다른 데이터 형식이다. 
typeof 1
// 데이터 형식을 알려줌 


//* 문자의 연산 

console.log('coding\neverybody'); 
// \n 은 줄바꿈이라는 의미 

console.log("coding" + "everybody");

console.log("coding" + " " + "everybody");

console.log("coding everybody".length);
//문자의 개수를 세어 준다.


"code".indexOf("o")
// 앞에서부터 0, 1, 2, 3 순서임 
// indexof를 사용하면 몇 번째 문자인지 알려준다. 
