//* 인터넷 동작 방법
// 인터넷은 컴퓨터들을 연결하여 협력 작업을 할 수 있게 해준다.
// 클라이언트: 웹브라우저가 설치되어 있는 컴퓨터, 정보를 요청
// 서버: 요청된 자료를 제공

// 서버 http://a.com
// 데이터베이스 서버, 채팅 서버, 게임 서버, 웹 서버 등 여러 서버가 있다.
// 어떻게 컴퓨터 안에 여러 개의 서버 에플리케이션 중 하나가 응답하게 하는가?
// -> 포트: 특정 포트를 리스닝 하게 한다.
// http://a.com:80 이 경우 80번 포트와 연결되어 있다.
// 웹브라우저에서 틀어온 접속이 80번 포트를 리스닝하는 웹서버를 호출하여 응답하게 된다.
// http를 통해 접속하는 경우 80번 포트를 쓰자는 약속이 되어 있음
// 1337이라고 적고 들어오는 요청을 처리하려면 1337포트를 연결해야 한다.
// 도메인 네임: 컴퓨터가 인식하는 주소인 IP주소를 사람이 알아볼 수 있는 주소로 만든 것

const http = require("http");
// 아래 있는 애플리케이션을 구동하기 위해 nodejs에서 제공하는 http 모듈 사용
// const는 상수, 한 번 할당되면 바뀌지 않음

const hostname = "127.0.0.1";
const port = 1337;
// http라는 모듈에서 createServer함수를 호출하면 server라는 객체를 리턴
// 이는 listen이라는 함수를 갖는다.

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

// 웹서버가 되는 코드
// nodejs를 통해서 웹서버 코드를 실행시킨 것
// 이 코드가 실행되면 요청이 들어오길 기다린다.
// createServer: 서버를 생성
// listen: 서버가 리스닝을 하게 한다. 첫 번째 인자로 포트, 두 번째 인자로 호스트 네임을 받음
// 호스트 네임: ip

// 웹 서버를 만들고 이 웹 서버가 1337 포트를 리스닝하도록 시키는 코드
// 접속자가 127.0.0.1로 접속하면 응답
// 응답 결과 헬로 월드를 출력하라는 것이 목적

// nodejs는 서버쪽에 위치하면서 빠르고 편리하게 서버로 들어오는 요청을 응답하는
// 애플리케이션을 만드는 기반 시스템을 제공하는 데에 초점
