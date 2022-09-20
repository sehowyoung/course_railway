// 我们在这里写路由，需要注意 : 实际上我们在定义一个路由模块，这个模块会在app.js 里面引用; 
const router = require("express").Router();

// 正经路由 : 
// - 规定了请求方式的路由 ; 

router.get("/" , ( req , res )=>{
    res.end("welcome test Router");
});

router.get("/first" , ( req , res )=>{
    res.end("hello test");
});

// second 路由 ;
// 返回json对象 { message : "hello"} 
// api : res.json( {} );

// thired 路由 ; 
module.exports = router;
