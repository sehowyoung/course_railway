# webpack 
> 前端的工程基本上都是基于webpack进行开发的, 因为webpack提供非常强大的拆分功能和 import , export 语法的使用 。 同时webpack可以进行各种模式的代码压缩和代码编译。


## webpack环境的安装 

- 全局环境安装 : `npm i -g webpack webpack-cli webpack-dev-server`
- 局部环境安装 : `npm i -D webpack webpack-cli webpack-dev-server`

## 开发环境搭建 

- src  : 开发目录 ，我们的源码全部会写在这里，我们开发是在这个文件夹下进行的; 
- dist : 发布目录，这里面所有的代码都是由webpack从开发目录之中生成的，所有的代码都会被随时覆盖 , 不要在这里面写任何代码! 

## 配置执行指令 

- webpack --config 配置文件名称 

## webpack-loader配置 
> 针对于不同后缀名的文件，使用不同的加载工具 

- 引入模块的时候可以使用import 进行引入 , 但是在定义模块的时候我们需要使用 nodejs 的commonjs规范进行定义 需要使用 `module.exports = {}`; 

- loader 核心作用就是让我们的webpack识别更多的语法类型，不止识别js类型; 

- 使用loader : 
- 1. 下载loader :   
  - cssloader : `npm i -D css-loader style-loader`
- 2. 配置loader 

## webpack 插件 

- 1. HtmlWebpackPlugin : 帮我们创建一个html结构, 这个结构自动引入依赖; 

### 使用插件 
- 1. 下载插件 : `npm i -D html-webpack-plugin`
- 2. 我们需要在配置文件之中引入插件 !  `const HtmlWebpackPlugin = require("html-webpack-plugin")`;


### 依赖使用 

- 1. npm i -S 文件名下载依赖 
- 比如我们需要使用axios : `npm i -S axios`