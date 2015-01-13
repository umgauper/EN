var express = require('express');
var admin = require('./admin');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: admin.imgName, image: admin.imgName});
});

module.exports = router;