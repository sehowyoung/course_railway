let express = require('express')
let router = express.Router()
let axios = require('axios')

router.get('/baidu', async (req, res) => {
    let options = {
        Headers : {
            'User-agent' :  `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36`
        }
    }
    let {data} = await axios("https://www.baidu.com", options)
    res.end(data)
})

module.exports = router