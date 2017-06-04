var express = require('express');
var router = express.Router();

// config/database
var connection = require('../config/database.js');

router.get('/', function(req, res, next) {
    var sql = 'SELECT * FROM articles';
    connection.query(sql, function(err, results, fields) {
        if (err) {
            throw err;
        } else {
            if (results.length) {
                res.send(results);
            } else {
                res.send({data: false, message: '数据库为空'});
            }
        }
    });
});


module.exports = router;
