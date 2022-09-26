var express = require('express');
var router = express.Router();

/* GET home page. */
let axios = require("axios");
router.get('/daxue',async function(req, res, next) {
    res.setHeader("Access-Control-Allow-origin","*");
    let {data} = await axios("https://api.i-lynn.cn/college");
  
    res.json( data );
});

module.exports = router;
