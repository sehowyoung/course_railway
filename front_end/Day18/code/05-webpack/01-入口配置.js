// webpack 配置文件! 

let { resolve } = require("path");

module.exports = {
    // 相对路径 : 相对当前配置文件的路径; 
    entry: './src/index.js',
    // 配置webpack的编译模式 : 
    // production : 生产模式 , 生产模式的代码会以体积为最优先级的编译条件，编译出体积最小的文件; 
    // development : 开发模式 , 开发模式会以可调试为目标给我们提供没有压缩的代码吗，让我们编译出来的代码可读; 
    mode : "development" ,
    // 开启map模式, 这个时候编译的文件都会带有一个map调试文件; 
    devtool : "source-map" ,
    // 出口配置 : 
    output : {
        // 出口的路径必须是绝对路径; 
        path : resolve( __dirname , "./dist"),
        // 文件名 
        // 文件名可以有特殊的参数 : [hash] 表示路径之中加入哈希值; 
        // 我们一般在开发模式下是不适用哈希值的; 
        // filename : "index-[hash].js"
        // 多文件配置的时候 [name], 多文件的属性名; 
        filename : "index.js"
    }
};
