var mongoose = require('mongoose');
var Wish =require ('../models/wishSchema'); 
var Themes = require('../models/themes');
var Party =require ('../models/partySchema'); 
var Activity = require('../models/activity');
var async = require("async");


exports.saveData = function(request, response){

    if(request.body.sub=='party' || request.body.sub == 'theme')
    {
        var saveAP = new Wish({
        user : request.body.cookie,
        sub :request.body.sub,
        title:request.body.title,
        description: request.body.description,
        image: request.body.image
        });

        Wish.find({user : request.body.cookie, sub :request.body.sub, description: request.body.description}, function(err, docs){
            if (docs.length){
                 console.log('it was choosen before');
            }else{
                saveAP.save(function(error, result) {
                    if (error) {
                        console.error(error);
                    } else {
                          console.log("saved!");
                    };
                })
            }
        });
    }
    if(request.body.sub=='activity')
    {
        var saveActivity = new Wish({
        user : request.body.cookie,
        sub :request.body.sub,
        title:request.body.title,
        description: request.body.description,
        image: request.body.image,
        price:request.body.price
        });

        Wish.find({user : request.body.cookie, sub :request.body.sub, description: request.body.description, price:request.body.price}, function(err, docs){
            if (docs.length){
                 console.log('it was choosen before');
            }else{
                saveActivity.save(function(error, result) {
                    if (error) {
                        console.error(error);
                    } else {
                          console.log("saved!");
                    };
                })
            }
        });
    }
}


exports.getData = function(request, response) {
    userEmail = request.params.email;
    console.log(userEmail);

    var w1,w2,w3;
        Wish.find({"sub":"party", "user":userEmail},function(err, docs){
        if (err){
              throw err;
        }
        w1 = docs; 
         Wish.find({"sub":"activity", "user":userEmail},function(err, docs){
        if(err){
          throw err;
        }
        w2 = docs;
        Wish.find({"sub":"theme", "user":userEmail},function(err, docs){
       if (err){
        throw err;
       }
       w3= docs;
        var resp = {
        Party:w1,
        Activity:w2,
        Themes:w3,
    };
    response.json(resp);
                     });
                });
             });
}

exports.delData = function(request, response){

   var user =request.body.user;
   var sub=request.body.sub;
   var title = request.body.title;
   var des = request.body.description;

   console.log(request.body.user);
   console.log(request.body.sub);
   console.log(request.body.title);
   console.log(request.body.description);

   Wish.remove({"user":user, "sub":sub, "title":title, "description":des}, function(err, doc){
            if(err){
                console.log(err)
            }else{
                console.log("was deleted");
            }
   });

}
