let fs = require("fs");

// 1. writeFile("文件路径","文件内容"[,"文件编码格式"] , 回调函数 );  创建文件写入内容 | 修改文件内部内容; 

// fs.writeFile("./test.txt" , "hello fs" , "utf-8" , err =>{
//     // err : 如果创建文件时出错，那么err就是一个对象,如果创建文件正常err就是undefined; 
//     if( err ){
//         // 失败 
//         throw err;
//     }else{
//         console.log("文件创建成功");
//     }
// })

// - 想要创建十个文件怎么写 ? 
// for(let i = 0 ; i < 10 ; i ++){
//     fs.writeFile(`./test${ i }.txt` , "hello fs" , "utf-8" , err =>{
//     // err : 如果创建文件时出错，那么err就是一个对象,如果创建文件正常err就是undefined; 
//     if( err ){
//         // 失败 
//         throw err;
//     }else{
//         console.log("文件创建成功");
//     }
// })
// }

// 2. 文件内容读取语法 : 
// readFile( 文件路径 [,编码格式], 回调函数 );
// fs.readFile("./02-module1.js" , "utf-8" ,( err , data )=>{
//     if( err ){
//         throw err;
//     }else{
//         console.log( data );
//     }
// });

// 3. 文件删除功能 : 

// fs.unlink("文件路径" , 回调函数)

// fs.unlink("./test.txt" , err => {
//     if(err){
//         throw err;
//     }else{
//         console.log("文件删除成功");
//     }
// })
