var express = require('express');
var router = express.Router();
var util = require('util');
var fs = require('fs');
var extend = require('extend');

router.imgName = '';
/* GET admin page */
router.get('/', function(req, res) {
    res.render('admin', {title: 'Administration'});
});

//TODO: add DELETE method for removing items from itemInfo.json! maybe list out each object in items array ... with DELETE button? on /delete route


router.post("/", function(req, res, next){
        //TODO: move this to separate /upload route!
        //console.log(util.inspect(req.files)); //TODO: add code to handle when files, title, or description is missing.


    fs.readFile('public/data/itemInfo.json', 'utf8', function(err, data) {
        if (err) {
            throw err;
        }

        var itemInfo = JSON.parse(data);
        var itemInfoArr= itemInfo.items;
        var newItem = {};
        newItem.title = req.body.title;                 /*Parse out title and description from posted form, and save as properties on newItem object*/
        newItem.description = req.body.description;
        newItem.photos = [];

        function addPhotos() {                     /*Add uploaded photos to photos array*/
            var allFiles = req.files.myFile;
            if (req.files.myFile.length > 0) {
                allFiles.forEach(function (file) {
                    newItem.photos.push(file.name);
                });
            }
            else {

            }
        }

        if (req.files.myFile) {
            addPhotos();
        }

        itemInfoArr.push(newItem);

        console.log(itemInfo);
        fs.writeFile('public/data/itemInfo.json', JSON.stringify(itemInfo), function () { /*Write extended object to JSON file*/
            res.end();

        });

    });
});


module.exports = router;