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