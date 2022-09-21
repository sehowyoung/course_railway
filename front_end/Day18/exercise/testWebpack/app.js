let {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// webpack 配置文件
module.exports = {
    // 相对当前配置文件的路径
    entry: './src/index.js',
    // 配置 webpack 的编译模式
    //  - development ：开发模式，开发模式会议可调式为目标给我们提供没有压缩的代码，让我们可以阅读编译的代码
    //  - production ：生产模式，生产模式的代码会议体积为最优先级的
    mode: 'production',
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test',
            template: './src/index.html',
            inject: 'body'
        })
    ],
    devServer: {
        port: 5000,
        hot: true
    }
}