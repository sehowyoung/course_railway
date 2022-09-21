var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin" , "http://127.0.0.1:5501");
  res.render('index', { title: 'Express' });
});

module.exports = router;
