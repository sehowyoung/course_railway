var express = require('express');
var router = express.Router();

let axios = require("axios");

router.get("/test" , async ( req , res )=>{
    // 1. 接收前端发送的全局函数名 : req.query.cb

    let data = { message : "西铁的帅哥美女们你们好!"}

    if( req.query.cb ){
        res.setHeader("content-type" , "text/html;charset=utf8")
        res.end(`${req.query.cb}(${ JSON.stringify(data) })`);
    }else{
        res.json( data ) 
    }

})

module.exports = router;
