var mongoose = require('mongoose'),
Themes = require('../models/themes');


exports.getData = function(req, res){
    console.log(req);
    Themes.find({},function(err, docs){
        console.log("docs "+docs);
        res.json(docs);
    });
}