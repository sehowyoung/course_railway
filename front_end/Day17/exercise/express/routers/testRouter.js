const router = require('express').Router()

router.get('/test1', (req, res)=>{
    res.end("test1")
})
router.get('/', (req, res)=>{
    res.end("welcome")
})

module.exports = router