var express = require('express');
var router = express.Router();
var util = require('util');
var fs = require('fs');
var extend = require('extend');

/* GET admin page */
router.get('/', function(req, res) {
    res.render('admin', {title: 'Administration'});
});

//TODO: add DELETE method for removing items from itemInfo.json! maybe list out each object in items array ... with DELETE button? on /delete route

module.exports = router;