# nodejs 

> nodejs是一个大的 "平台" , nodejs 无所不能! 

## nodejs 的功能

- 1. 辅助前端开发，搭建前端工程 ; 
- 2. nodejs可以作为服务端语言，快速搭建一个服务端功能完成增删改查接口建立; 

## nodejs开发准备 

- 安装nodejs环境 : 
  - nodejs.org  找到LTS版本进行下载; 

- 测试安装是否成功 : 
  - node -v 版本测试，如果计算机可以识别 node指令则表示安装成功; 

## nodejs代码执行 

- 1. 在任意位置创建 .js 后缀的文件 , 文件名不能是 node , 和 node 的模块名; 
- 2. 在这个文件之中我们可以直接使用JavaScript语法 , 但是涉及浏览器dom操作的所有API都失效; 
    - JavaScript是运行在浏览器之中的脚本， 为浏览器服务的; 
    - nodejs 是运行在操作系统之中， 操作操作系统的;
- 3. 执行nodejs代码  
    - 进入待执行代码所在文件夹 
    - 在路径之中输入cmd，打开命令行操作工具; (检查待执行文件是否存在命令行目录之下 [可以使用dir指令测试])
- 4. 使用 `node 文件名` 执行nodejs代码; 

## nodejs 模块 

- COMMONJS 规范 
- COMMONJS 模块化规范 
  - 把代码拆分出去，再进行引入的语法! 

- 1. 定义模块 : 定义一个对象
  - `module.exports = {} `

- 2. 模块的引入 : 获取模块定义的对象; 
  - `let 变量名 = require("文件路径")` 
  - require的返回值就是引入的模块定义的对象; 

## nodejs 内置模块 
> nodejs能实现的功能非常多，因此nodejs给我们提供了非常多的模块，这些模块都没有直接内置在语言之中, 我们需要按需引入! 

- 目标 : 搭建一个nodejs服务器! 
  - 需要的模块有 : 
    - fs   模块 : 文件系统模块( 操作文件的模块 )
    - http 模块 : 提供http功能的模块 
    - path 模块 : 路径拼接模块 

- 使用语法 : 
  - 1. 引入内置模块 : require("模块名")
  - 2. 使用内置模块 : 内置模块普遍是工具集合 , 我们会根据文档使用内部的工具完成功能开发; 

## http 模块 
> http模块可以让nodejs快速创建一个小型服务器 

- 1. 创建服务 : 
  - 定义好请求响应规则! 

- 2. 监听端口 : 
  - 定义一个端口号 3000 3001 ....

## nodejs 包 
> 又称 , 第三方模块, 一般情况下是个人或组织开发的!

- 1. 全局包 : 在cmd命令行之中可以直接通过指令访问 , 比如 `sass`
- 2. 局部包 : 完成的部分功能，可以被我们在项目开发中应用 

- [npmjs](https://www.npmjs.com/)  所有的第三方包的平台; 

- 重要 : 所有的nodejs依赖都需要下载到本地的; 

## npm 包管理器 

- 安装指令 : `npm install 包名称 包的安装环境` 
  - 包名称 : npmjs.com 上找到的包名称; 
  - 安装环境 : -D :局部依赖安装   -g 全局依赖安装;  
- 卸载指令 : `npm uninstall 包名称 包的安装环境` 

- 全局包的安装直接输入指令即可; 
- 局部包安装需要先让cmd的路径到达目标文件夹再进行安装; 


- 局部包安装之后会出现 :  
  - node_modules : 代码存储位置; 
  - package.json : 表示当前项目之中依赖是什么; 
    - 依赖 : 下载或者使用了哪些第三方包; 
  - package.lock.json : 包的版本号， 我们在下载使用环境的时候会更加准确的获取依赖版本，不至于出错; 

## yarn | cnpm 这类的第三方包管理器

- yarn : 使用 `npm i -g yarn` 安装第三方下载插件 yarn ; 以后安装程序可以直接使  用 yarn add 方式进行加载

- cnpm :`npm i -g cnpm --registry=https://registry.npmmirror.com` 
  - 把原本的npm指令替换成cnpm指令即可; 

注意 : 各种下载器不要混用! 


## express 
> 搭建服务器的nodejs框架

- 1. 安装express : `npm i -D express`
- 2. 使用express要在哪里使用 ? 
  - 在node_modules 同级进行使用 
- 3. 创建 `app.js` 文件
- 4. 开始编写nodejs代码 

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

## 爬虫
> 要做到的事情就是根据请求路径返回响应数据; 

1. 知道请求地址 
2. 伪造请求头 

- 爬虫要依赖一个插件 : axios 

## socketio 
> 教大家如何复制粘贴! 
