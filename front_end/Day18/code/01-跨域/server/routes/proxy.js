var express = require('express');
var router = express.Router();

let axios = require("axios");

router.get("/duitang" , async ( req , res )=>{

    let url = "https://www.duitang.com/napi/blog/list/by_filter_id/";

    let response = await axios( url , {
        params : req.query 
    }) 
    
    res.json(  response.data );
})

module.exports = router;
