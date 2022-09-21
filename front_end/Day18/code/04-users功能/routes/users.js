var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/" , (req , res )=>{
  res.send("hello users");
});

// 注册功能 : 

router.get("/register" , ( req , res , next )=>{
  // 要求前端用正确的字段传递数据 username , password , nickname ; 

  if( !req.query.username || !req.query.password || !req.query.nickname ){
    // next 如果传递参数则表示直接跳入到最后一个路由之中; 
    return  next(0);
  }

  let { users } = require("../db/users");

  // 使用mongoose的users 的modle存储数据; 
  let md5 = require("md5");

  let u = new users({
    username : req.query.username,
    password : md5(req.query.password ),
    nickname : req.query.nickname,
  });

  u.save( err =>{ 
    if( err ) return next(0);
    res.json({
      code : 1,
      message : "注册成功"
    })
  })

})

// 登录功能 : 
router.get("/login" , ( req , res , next )=>{
  // username
  // password

  if( !req.query.username || !req.query.password){
    next(0)
  }

  let { users } = require("../db/users");

  // 查询数据 : 
  // 查询的时候mongoose的model直接可以进行查询; 

  let md5 = require("md5");

  let options = { 
    username : req.query.username,
    password : md5(req.query.password) 
  };

  users.find( options , ( err , data )=>{
    if( err ) return next(0);
    // 没查询到数据也直接走到错误处理部分; 
    if( data.length === 1) return next(0);

    res.json( {
      code : 1,
      message : "登录成功",
      info : data[0] 
    });
  })

})


// post 请求: 
router.post("/test" , ( req , res )=>{

  // req.body 
  console.log( req.body.username , req.body.password );

  res.json({
    username : req.body.username,
    password : req.body.password
  });
})


router.use( function( req , res ){
  // 负责报错 : 
  res.json({
    code : 0 , 
    message : "发生错误!"
  })
})

// 登录业务 : 
// - 思路 : 查询账号密码， 如果有一个账号密码相同并且查询出结果了那么登录成功; 


module.exports = router;
