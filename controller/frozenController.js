var mongoose = require('mongoose');
var schema = mongoose.Schema;
var Activity = require('../models/activity');
var Create=require('../models/createSchema');
var Kits=require('../models/kitsSchema');
var Decortion=require('../models/decoretionSchema');
var Themes=require('../models/themes');




exports.getData = function(req, res){
    var t1,t2,t3,t4,t5;
        Activity.find({"theme":"frozen"},function(err, docs){
        if (err){
              throw err;
        }
        t1 = docs; 
         Create.find({"theme":"frozen"},function(err, docs){
        if(err){
          throw err;
        }
        t2 = docs;
        Kits.find({"theme":"frozen"},function(err, docs){
       if (err){
        throw err;
       }
       t3= docs;
        Decortion.find({"theme":"frozen"},function(err, docs){
        if(err){
         throw err;   
        }
        t4 = docs;
        Themes.find({"theme":"frozen"},function(err, docs){
        if(err){
         throw err;   
        }
         t5= docs;
         var resp = {
        Activity:t1,
        Create:t2,
        Kits:t3,
        Decortion:t4,
        Themes:t5
    };
    res.json(resp);
                     });
                });
             });
        });
    });
}

