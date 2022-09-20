// 引入语法和内部模块一样 : 
// - 查找机制是从当前文件夹之中开始查找 node_modules 文件夹， 如果其中存在express同名文件或者文件名就进行加载; 
// - 如果是文件夹，那么会查找文件夹之中 index.js 并默认执行; 
let express = require("express");

// 创建一个express应用 : 
let app = express();
let path = require("path");

// 路由 : 
// - 1. 全局路由 
// - 2. 局部路由 

// express机制是所有的请求都会经过 / 路径; 
// - 到了这个/路径之后,我们就终止了请求，所以后续的路径都不生效; 
// app.use("/" , ( req , res )=>{ 
//     res.end("welcome express");
// }) 

// 针对有业务逻辑的接口请求我们需要使用路由，但是没有业务逻辑的请求，我们要返回静态资源的请求，都是直接使用静态资源的; 

app.use( express.static( path.resolve(__dirname ,"./public") ))

// app.use("/hello" , ( req , res )=>{ 
//     res.end("hello world");
// }) 

// app.use("/world" , ( req , res )=>{ 
//     res.setHeader("content-type","text/html;charset=utf8")
//     res.end("你好世界");
// }) 

// 路由时负责处理业务 , 业务代码可能非常复杂， 对于这种复杂代码不可能放在一个文件之中执行; 

// 我们应该定义独立的路由文件处理接口请求; 

// 如果我们需要引入独立文件的路由 :
// 1. 进行路由引入 

let testRouter = require("./routers/testRouter");

// 定义主路由 : 
// 一般情况下都是两步到达我们的响应处理函数 app.use 负责第一步，路由文件之中规定第二部; 
// /test/first 

// app.use();
app.use("/test" , testRouter );

// 引入中间件测试路由 

app.use("/middleware" , require("./routers/middlewareRouter") )


app.listen( 3000 , ()=>{ console.log("服务已经在3000端口上开启!"); } );