let express = require('express');
let router = express.Router();
let md5 = require('md5')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/rigister', (req, res, next) => {
  if (!req.body.username || !req.body.password || !req.body.rpassword || !req.body.nickname) {
    return next(0)
  }
  if (req.body.password !== req.body.rpassword) {
    return next(0)
  }
  let {users} = require('../db/db')

  let user = new users({
    username: req.body.username,
    password: md5(req.body.password),
    nickname: req.body.nickname
  })

  user.save(err => {
    if (err) {
      return next(0)
    }
    res.json({
      code: 1,
      message: "注册成功"
    })
  })
})

router.post('/login', (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    next(0)
  }

  let {users} = require('../db/db')
  let options = {
    username: req.body.username,
    password: md5(req.body.password)
  }

  users.find(options, (err, data) => {
    console.log(data);
    if (err) {
      return next(0)
    }
    if (data.length === 0) {
      return next(0)
    }
    res.json({
      code: 1,
      message: "登陆成功",
      // info: data[0]
    })
  })
})

module.exports = router;
