// const http = require("http");
// const { runInNewContext } = require("vm");
// const app = http.createServer((req, res)=>{

//     res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});

//     if( req.url == '/' )
//         res.end("root 입니다.");
//     else if(req.url == '/login')
//         res.end("login 입니다.")
//     //console.log(req.url);
// });


// app.listen(3001, ()=>{
//     console.log("http 서버 입니다.");
// });


// 모듈
const express = require("express");
//const { allowedNodeEnvironmentFlags } = require("process");
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./src/routes/home");

// 앱 셋팅
// 주의) views폴더는 반드시 app.js와 동일 노드선상에 존재해야 한다.(???? 다른폴더는 계속 error)
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드


module.exports = app;
