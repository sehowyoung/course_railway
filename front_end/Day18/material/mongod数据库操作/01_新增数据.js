// 使用mongoose操作 mongodb数据库需要 : 
// 1. 启动数据库 !
// 2. 下载 mongoose模块; 
// 3. 创建Schma 
// 4. 创建model 
// 5. 使用model 操作数据库; 

const mongoose = require("mongoose");

// 获取Schema 构造函数; 
const { Schema } = mongoose;

// 链接数据库 : 
mongoose.connect("mongodb://localhost/2207");

// 建立查询规则 : 

const student_schema = new Schema({
    username : {
        type : String , 
        unique : true
    },
    score : Number,
    avatar : {
        type : String,
        default : function(){
            return "1.jpg"
        }
    }
});


// 创建model : 
const student_model = mongoose.model("students" , student_schema );

// 我们现在写了一坨代码， 我么希望得到什么 ? 
// - 我们刚刚创建出的model; 

// 存储数据就是 new model( { 对应字段的数据 } ); 
// key : 字段  value : 字段值; 
const student = new student_model({
    username : "班长",
    score : 6 , 
    avatar : "2.jpg"
});

// 保存 : 
student.save(function( err ){
    if( err ){ return console.log(err) };
    console.log("数据保存成功");
})
