var express = require('express');
var router = express.Router();
var util = require('util');
var fs = require('fs');

router.imgName = '';
/* GET admin page */
router.get('/', function(req, res) {
    res.render('admin', {title: 'Administration'});
});

router.post("/", function(req, res, next){
    if (req.files) {
        console.log(util.inspect(req.files));
        if (req.files.myFile.size === 0) {
            return next(new Error("Hey, first would you select a file?"));
        }
        fs.exists(req.files.myFile.path, function(exists) {
            if(exists) {
                router.imgName = (util.inspect(req.files.myFile.name));
                res.end("Got your file!");
            } else {
                res.end("Well, there is no magic for those who don’t believe in it!");
            }
        });
    }
});

module.exports = router;