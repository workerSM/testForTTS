// for(let i = 0; i < 10; i++){
//     console.log('hi')
// }


//---------process와 argv---------
// console.log(process.argv)

// let args = process.argv.slice(2);
// for(let arg of args){
//     console.log(`my favorite animal is ${arg}`);
// }

//---------파일시스템 모듈의 충돌과정---------
//node로 FSprocess라는 폴더를 생성하고 내부에 index.html, app.css, app.js를 생성해보기


//---------module.export 사용하기---------
// 모듈이 아닌 파일을 불러 올 때는 파일명 앞에 ./를 붙여야하고 파일 확장자는 적어주지 않아도 된다
// ./는 현재 같은 디렉토리 내에서 참조한다는 뜻이다.
let callAppJs = require('./app');
console.log(callAppJs);
//지금은 require를 써도 제대로 출력되지 않는다. 최신문법이 아니라 안된다는?얘기인듯. 그렇다고 import를 쓴다고 제대로 나오는 것도 아니다.. ;