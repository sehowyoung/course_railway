var express = require('express');
var router = express.Router();
// 1. 引入axios 
// - 下载axios : npm i --save axios 
// - 在文件之中使用require引入 axios
let axios = require("axios");
// cheerio : 处理脏数据的插件; 
let cheerio = require("cheerio");

router.get("/baidu" ,async ( req , res )=>{

    // 发请求 : 向百度发起请求; 
    // axios : 返回一个promise对象; 
    let options = {
        headers : {
            "User-Agent" : `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36`
        }
    };

    let { data } = await axios("https://www.baidu.com" , options );

    res.end( data );
})


router.get("/douban" , async ( req , res )=>{

    //  发请求 : 向百度发起请求; 
    // axios : 返回一个promise对象; 

    let options = {
        headers : {
            "User-Agent" : `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36`
        }
    };  
    let url = "https://movie.douban.com/subject/35507172/?tag=%E7%83%AD%E9%97%A8&from=gaia"

    let { data } = await axios(url , options );
    // 脏数据处理 : 
    // 1. 把所有的结构让cheerio进行解释; 
    const $ = cheerio.load(data);
    // 2. 获取到里面类名为 short 的文本内容; 
    res.setHeader("content-type" , "text/html;charset=utf8")
    res.end( $(".tab-bd").html() );
})

module.exports = router;
