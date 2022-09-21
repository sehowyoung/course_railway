
let mongoose = require("mongoose");

let { Schema }  = mongoose; 

// 链接数据库

mongoose.connect("mongodb://localhost/xitieDB");

// 定义结构模型 : 
let users_schema = new Schema({
    // 规定对象里面的属性有什么; 
    username : {
        type : String,
        // name字段数值必须唯一，如果重复则报错! 
        unique: true
    },
    password  : String||Number,
    nickname : String
});

// 创建model : 
let users = mongoose.model( "user" , users_schema );


module.exports = {
    users
}