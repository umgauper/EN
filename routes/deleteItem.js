var express = require('express');
var router = express.Router();
var util = require('util');
var fs = require('fs');
var extend = require('extend');

router.post('/', function (req, res) {
    fs.readFile('public/data/itemInfo.json', 'utf8', function (err, data) {
        if (err) {
            throw err;
        }

        var itemInfo = JSON.parse(data);
        itemInfo.items = itemInfo.items.filter(function(elm) {
            return elm.title !== req.body.itemTitle;

        });
        console.log(itemInfo.items);


        fs.writeFile('public/data/itemInfo.json', JSON.stringify(itemInfo), function () { /*Write extended object to JSON file*/
            res.end();

        });

    });
});

module.exports = router;