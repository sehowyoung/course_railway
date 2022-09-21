var express = require('express');
var router = express.Router();
// 测试基本路由 : 

// mongoose 操作数据库 : 
// 1. 创建 Schema : 约束了数据整体的结构，和结构内容; 
// 2. 通过 Schema 创建 model , 这个model是可以直接操作数据的对象; 

// 3. 操作model
router.get("/" , (req, res)=>{
    res.end("hello mongo");
})

router.get("/test" , ( req ,res )=>{

    let { Schema }  = mongoose; 

    // 链接数据库

    mongoose.connect("mongodb://localhost/xitieDB");

    // 定义结构模型 : 
    let student_schema = new Schema({
        // 规定对象里面的属性有什么; 
        name : {
            type : String,
            // name字段数值必须唯一，如果重复则报错! 
            unique : true 
        },
        age  : String
    });

    // 创建model : 
    let student = mongoose.model( "student" , student_schema );
    // 使用model 的工具查询数据; 
    
    // student.find( { name : "吴彦祖" } , "name" ,function(err , data ){
    //     if(err) { return console.log(err)};
    //     console.log(data);

    //     res.json( data ) 
    // })

    let s = new student({
        name : "坤坤",
        age : "17"
    });

    s.save( function( err ){
        if( err ){
            res.send("数据库错误");
        }else{
            res.send("数据插入成功")
        }
    })
})


router.get("/chaifen" , ( req ,res )=>{

    let { student } = require("../db/student");

    // 我们接口的数据一定是来自于互联网的,用户输入的信息; 
    // req.query 
    // - name 为 name 值; 
    // - age  为 age  值; 
    let s = new student({
        name : req.query.name,
        age : req.query.age
    });

    s.save( function( err ){
        res.setHeader("Access-Control-Allow-Origin" , "*");
        if( err ){
            res.json({
                code : 0 ,
                message : "数据库插入错误"
            })
        }else{
            res.json({
                code : 1 ,
                message : "信息插入成功"
            })
        }
    })
})


module.exports = router;
