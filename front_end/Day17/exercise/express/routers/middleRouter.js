const { log } = require('console')

const router = require('express').Router()

let middleware1 = (req, res, next)=>{
    // 通过 req.params 访问到我们传入的参数
    log(req.query)
    res.params
}
let middleware2 = (req, res, next)=>{
    log(req.params)
    res.params
}

module.exports = router