# Day 17

## nodejs 功能

- 辅助前端开发，搭建前端工程
- `nodejs` 可以作为服务端语言，快速搭建一个服务端功能完成增删改查接口建立

## nodejs 代码执行

- 在任意位置创建`.js` 后缀的文件，文件名不能是 `node` 和 node 的模块名
- 在这个文件之中我们可以直接使用 `JavaScript` 语法，但是涉及浏览器 `dom` 操作的所有 `API` 都失效
  - JavaScript 是运行在浏览器中的脚本，为了浏览器服务
  - nodejs 是运行在操作系统中，操作操作系统的
- 执行 nodejs 代码
  - 进入带执行代码所在文件夹
  - 打开命令行操作工具，进行测试
- 使用 `node 文件名` 执行 nodejs 代码

## nodejs 模块

- COMMONJS 规范
- COMMONJS 模块化规范
  - 把代码拆分出去，在进行引入的语法

1. 定义模块：定义一个对象

   ```js
   module.exports = {}
   ```

2. 引入模块

   ```js
   let m = require([url])
   m.[func()|attr]
   ```

## nodejs 内置模块

> nodejs 能实现的功能非常多，因此 nodejs 给我们提供了非常多的模块，这些模块都没有直接内置在语言之中

- **目标：搭建 nodejs 服务器**
  - 需要模块：
    - fs 模块：文件系统模块
    - HTTP 模块：提供 http 功能的模块
    - path 模块：路径拼接模块

### 搭建

- 使用语法：

  - 引入内置模块：require('模块名')
  - 使用内置模块：内置模块是工具集合，根据文档使用内部工具完成开发

- fs 模块

  - `let fs = require('fs')`
  - `writeFile("路径", '内容'[, '编码格式'], 回调函数)`
  - `readFile('路径' [, '编码格式'], 回调函数)`
  - `unlink('路径', 回调函数)`

  ```js
  const { log } = require('console');
  let fs = require('fs')
  
  // 创建文件，插入内容
  fs.writeFile('./test.txt', 'hello world', 'utf-8', err => {
      if (err) {
          throw err;
      } else {
          console.log("success!");
      }
  })
  
  // 文件读取
  fs.readFile('./test.js', 'utf-8', (err, data) => {
      if (err) {
          throw err
      } else {
          log(data)
      }
  })
  
  // 文件删除
  fs.unlink('./test.txt', err => {
      if (err) {
          throw err
      } else {
          log('delete!')
      }
  })
  ```

- http 模块

  >可以让 nodejs 旷宿创建一个小型服务器

  - 创建服务：定义好相应规则
  - 监听端口：定义一个端口号

```js
const { log } = require('console')
let http = require('http')
let fs = require('fs')
let path = require('path')

// createServer(定义请求响应规则)
// 注意：如果修改代码，请重新执行指令
let server = http.createServer((req, res)=>{
    // req：request 所有的请求信息都在这里
    // res：response 所有的相应信息都在这里
    // log(req.url)
    if (req.url === "/favicon.ico") {
        return res.end()
    }
    let user_url = path.resolve(__dirname, './public', '.'+req.url)
    fs.readFile(user_url, (err, data)=>{
        if(err) return error(res)
        res.write(data)
        res.end()
    })

    // res.write("hello guest!")
    // res.end()
})

function error(res) {
    res.statusCode = 404
    res.setHeader("content-type", 'text/html;charset=utf8')
    res.write('您请求路径不存在')
    res.end()
}

server.listen(5000, ()=>{
    log("服务开启成功：在 http://localhost:5000 地址访问")
})
```

## nodejs 包

- 又称第三方包，一般有个人或组织开发
- 分类：
  - 全局包：在 `cmd` 命令行之中可以通过指令访问，比如 `sass`
  - 局部包：完成的部分功能，可以被我们在项目开发中使用
- [npmjs](https://npmjs.com)
- 所有的 nodejs 依赖都需要下载到本地

## npm 包管理器

- 安装命令：`npm install [package-name] [environment]`
  - 包名称：npmjs.com 上下载的包名称
  - 安装环境：-D：局部依赖安装   -g 全局依赖安装
- 卸载命令：`npm uninstall [package-name] [environment]`



- 全局包的安装直接输入指令即可
- 局部包的安装需要先让 cmd 的路径到达目标文件夹在进行安装
  - 局部包安装之后出现：
    - node_modules：代码存储位置
    - package.json：当前项目使用了什么依赖
    - package.lock.json：报的版本号

### yarn、cnpm 第三方包管理器

- yarn：[https://www.yarnpkg.cn/getting-started/install](https://www.yarnpkg.cn/getting-started/install)
- cnpm：[https://npmmirror.com/](https://npmmirror.com/)

## express

- 搭建服务器的 nodejs 框架

```js
const { log } = require("console")
let express = require("express")
let path = require('path')

let app = express()

app.use(express.static(path.resolve(__dirname, './public')))

app.use('/hello', (req, res)=>{
    res.end("hello, welcome to express")
})
app.use('/world', (req, res)=>{
    res.end("hello, world")
})

app.listen(5000, ()=>{
    log("http://localhost:5000")
})
```

- 安装express : `npm i -D express`
- 使用express要在哪里使用 ? 
  - 在node_modules 同级进行使用 
- 创建 `app.js` 文件
- 开始编写nodejs代码 

- express 中间件 
  - 其实中间件就是请求处理函数; 
  - 因为请求处理函数是可以定义多个的， 我们对于多个函数同时处理一个业务的情况叫做连续处理。 连续处理之中的函数我们称之为中间件; 

## express-generator

- 使用指令 `npx express-generator --view=ejs` ;(需要网络)

- 在文件之中根据 `package.json` 去下载项目依赖 : `npm i`

- 环境不要嵌套 ! 这样可能导致依赖混乱! 
- 建立同级别的文件夹。 

## package.json里面的scripts指令 

> 因为环境的启动指令都不一样，所以我们在使用环境的时候需要一个统一的指令方便启动项目

- 这个指令我们就可以在package.json 里面是scripts里面设置 : 

```json
  "script":{ "指令名" : "cmd命令行执行的命令"}
```

- 如果需要使用指令 : `npm run 指令名`

## 跨域 

> 主要是对ajax技术的限制 : xhr , fetch 

- 请求源 : xhr 或者 fetch API 发送请求时打开页面的地址; 
- 目标地址 : xhr 配置之中的请求路径信息 

- 对于请求源和目标地址浏览器有硬性要求 : 同源策略 要求请求源和目标地址 协议，域名，端口三者完全相同才可以发送 ajax请求，否则请求会被判定为跨域; 

实例 

```js
    let origin = "http://127.0.0.1:80"
    let target = "http://localhost:80"

    // origin向target发起请求跨域么?  会! 
```

## 解决跨域 

- CORS : 服务端解决跨域 ;  server 
- 服务器代理跨域 : 和爬虫原理很像;
- jsonp : 用script标签发起请求;

