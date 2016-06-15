var mongoose = require('mongoose');
var Party =require ('../models/partySchema'); 



exports.getData = function(req, res){
    console.log(req);
    Party.find({}).sort({ranking:-1}).limit(5).exec(function(err, docs){
        console.log("docs "+docs);
        res.json(docs);
        return;
    });
}
