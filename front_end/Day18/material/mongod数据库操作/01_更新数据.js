const { student_model } = require("./db/student");

// 先查询再更新; 
// updateOne( 查询条件 , 更新内容 )
// student_model
//     .updateOne( { username : "wuli坤坤" } , { score : 88 })
//     // 数据库操作返回值是Promise对象可以直接以promise对象的形式进行操作; 
//     .then( function( message ){
//         console.log( message ) 
//     })

// updateMany 和 updateOne 用法一样 : 
student_model
    .updateMany( { username : "班长" } , { username : "班长帅过吴彦祖" })
    // 数据库操作返回值是Promise对象可以直接以promise对象的形式进行操作; 
    .then( function( message ){
        console.log( message ) 
    })