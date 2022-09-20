let http = require("http");
let path = require("path");
let fs   = require("fs");
// createServer( 定义请求响应规则的函数 )
// 注意 : 如果修改代码，那么请务必重新执行cmd之中的指令! 否则新代码不生效! 

let server = http.createServer( ( req , res )=>{
    // req : request 所有的请求信息都在这里; 
    // res : response 所有的响应处理方式都在这里; 

    // console.log( req.url );
    // url 是除了协议域名端口之外的信息 

    // res.write("数据") 向响应体之中放入数据; 
    // res.end() 结束请求，返回响应数据; 
    if( req.url === "/favicon.ico" ) return res.end();
    // console.log( decodeURI(req.url) );
    // 服务器其实就是根据请求信息找到服务器上的文件， 把这个文件的数据返回出去; 

    // 根据用户的url信息，找到对应路径的文件， 把对应路径文件信息返回出去; 
    // - 根目录 ; 
    // - 1. 绝对路径 : __dirname 
    let user_url = path.resolve(__dirname ,"./public" ,"." + req.url);
    
    fs.readFile( user_url , ( err , data ) => {
        if( err ) return error( res );
        // 如果正确 : 把文件内容写入响应体; 
        // 终止响应;
        res.write(data)
        res.end();
    });
    // res.write("hello http");
    // res.end();
});
// 错误处理函数； 
function error( res ){
    res.setHeader("content-type" , "text/html;charset=utf8");
    res.statusCode = 404;
    res.write("您请求的路径不存在");
    res.end();
}

server.listen( 3000 , ()=>{ console.log("服务开启成功 : 在 http://127.0.0.1:3000 地址访问");})