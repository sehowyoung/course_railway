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


module.exports = {
    student_model
}
