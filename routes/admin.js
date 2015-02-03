var express = require('express');
var router = express.Router();
var util = require('util');
var fs = require('fs');
var extend = require('extend');

/* GET admin page */
router.get('/', function(req, res) { /* make password and login , but keep it on server side restricted code & don't upload to GitHub...
                                      store correct login in local storage, and restrict routes to /admin /upload /delete etc (see http://stackoverflow.com/questions/9609325/node-js-express-js-user-permission-security-model) */
    res.render('admin', {title: 'Administration'});
});


module.exports = router;