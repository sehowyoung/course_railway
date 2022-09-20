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