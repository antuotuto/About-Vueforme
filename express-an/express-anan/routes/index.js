var express = require('express');
var router = express.Router();


// config/database
var connection = require('../config/database.js');

var sha1 = require('sha1');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '我叫王安安' });
});

router.post('/login', function(req, res, next) {
    var username = req.body.username;
    var userpass = sha1(req.body.password);

    // 查 用户是否存在
    var sql = 'SELECT * FROM users WHERE user_name =' + connection.escape(username) + ' and user_pass =' + connection.escape(userpass);
    connection.query(sql, function(err, results, fields) {
        if (err) {
            throw err;
        } else {
            if (results.length) {
                // 写入session
                delete results[0].user_pass;
                req.session.user = results[0];
                // 返回数据
                res.send({data: true, message: '登录成功'});
            } else {
                res.send({data: false, message: '用户名或密码错误'});
            }
        }
    });
});

module.exports = router;
