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

router.post("/", function(req, res, next){
        //console.log(util.inspect(req.files)); //TODO: add code to handle when files, title, or description is missing.


    fs.readFile('./data/itemInfo.json', 'utf8', function(err, data) {
        if (err) {
            throw err;
        }

        var itemInfo = JSON.parse(data);
        var newItem = {};
        var title = req.body.title;                 /*Parse out title and description from posted form, and save as properties on newItem object*/
        newItem[title] = {};
        newItem[title].description = req.body.description;
        newItem[title].photos = [];

        function addPhotos() {                     /*Add uploaded photos to photos array*/
            var allFiles = req.files.myFile;
            if (req.files.myFile.length > 0) {
                allFiles.forEach(function (file) {
                    newItem[title].photos.push(file.name);
                });
            }
            else {

            }
        }

        if (req.files.myFile) {
            addPhotos();
        }
        extend(itemInfo, newItem); /*extend current JSON with newItem object*/
        console.log(itemInfo);
        fs.writeFile('./data/itemInfo.json', JSON.stringify(itemInfo), function () { /*Write extended object to JSON file*/
            res.end();

        });

    });
});


module.exports = router;