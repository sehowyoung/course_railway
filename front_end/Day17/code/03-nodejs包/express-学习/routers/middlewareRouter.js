const e = require("express");

const router = require("express").Router();
let middleware1 = ( req , res , next )=>{
    // req : 里面提供了格式化好的参数 : 
    // get 携带数据格式 : url?key=value&key2=value2;
    // 在req之中被格式化到了 params 里面; 
    // 可以通过 req.params 访问到我们传入的参数; 
    // res.json( req.query );
    if( typeof req.query.name === "string" &&  typeof req.query.age === "string"){
        res.json({
            code : 1 ,
            message : "你传递的信息是正确的",
            info : req.query
        })
    }else{
        next();
    }
};
let middleware2 = ( req , res , next )=>{
    res.json({
        code : 0 ,
        message : "你传递了错误的信息给我"
    })
}
router.get("/test" , middleware1  , middleware2 );
module.exports = router;