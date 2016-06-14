var mongoose = require('mongoose');
 var User =require ('../models/userSchema'); 

exports.saveData = function(request, response){
  console.log(request.body.imageUrl);
    User.find({email : request.body.email },function(err, docs){
       if (docs.length){
            console.log('User exists already');
          }else{
            if(request.body.imageUrl={'$exists':false})
            {
               var saveUser = new User({
                id : request.body.id,
                name :request.body.name,
                imageUrl: request.body.imageUrl,
                email: request.body.email 
              });
            }
            else
            {
             var saveUser = new User({
                id : request.body.id,
                name :request.body.name,
                imageUrl: request.body.imageUrl,
                email: request.body.email 
              });
           }
              saveUser.save(function(error, result) {
                if (error) {
                  console.error(error);
                } else {
                  console.log("saved!");
                };
              })
            }
          });    
}