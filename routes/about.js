var express = require('express');
var router = express.Router();
var util = require('util');
var fs = require('fs');
var extend = require('extend');

/* GET admin page */
router.get('/', function(req, res) {
    res.render('about', {title: 'About'});
});


module.exports = router;