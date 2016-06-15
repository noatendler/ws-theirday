var mongoose = require('mongoose'),
Activity = require('../models/activity');

exports.getData = function(req, res){
    console.log(req);
    Activity.find({},function(err, docs){
        console.log("docs "+docs);
        res.json(docs);
    });
}
