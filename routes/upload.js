var express = require('express');
var router = express.Router();
var util = require('util');
var fs = require('fs');
var extend = require('extend');

router.post('/', function(req, res, next) { // re-add part for appending data to JSON file.. and image resize!

    fs.readFile('public/data/itemInfo.json', 'utf8', function(err, data) {
        if (err) {
            throw err;
        }

        var itemInfo = JSON.parse(data);
        var itemInfoArr= itemInfo.items;
        var newItem = {};
        newItem.title = req.body.title;                 /*Parse out title and description from posted form, and save as properties on newItem object*/
        newItem.description = req.body.description;
        newItem.isRefrig = req.body.isRefrig;
        newItem.price = req.body.price;
        newItem.photos = [];
        function addPhotos() {                     /*Add uploaded photos to photos array*/
            var allFiles = req.files.file;
            if (req.files.file.length > 0) {
                allFiles.forEach(function (file) {
                    newItem.photos.push(file.name);
                });
            }
            else {

            }
        }

        if (req.files.file) {
            addPhotos();
        }

        itemInfoArr.push(newItem);

        fs.writeFile('public/data/itemInfo.json', JSON.stringify(itemInfo), function () { /*Write extended object to JSON file*/
            res.end();

        });

    });







    //res.writeHead(200, {'Content-Type': 'text/plain'}); // fix why view isn't updating to the response... even though response is being sent!
    //res.end('okay');

});


//TODO: add DELETE method for removing items from itemInfo.json! maybe list out each object in items array ... with DELETE button? on /delete route

module.exports = router;