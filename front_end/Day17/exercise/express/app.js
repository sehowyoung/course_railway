const { log } = require("console")
let express = require("express")
let path = require('path')

let app = express()

// app.use('/', (req, res)=>{
// })
app.use(express.static(path.resolve(__dirname, './public')))

// app.use('/hello', (req, res)=>{
//     res.end("hello, welcome to express")
// })
// app.use('/world', (req, res)=>{
//     res.end("hello, world")
// })

let testRouter = require('./routers/testRouter')
app.use('/test1', testRouter)
let testRouter = require('./routers/middleRouter')
app.use('/middleRouter', testRouter)

app.listen(5000, ()=>{
    log("http://localhost:5000")
})