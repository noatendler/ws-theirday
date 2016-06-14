var mongoose = require('mongoose');
var Party =require ('../models/partySchema'); 
var fs = require('fs')
    , knox = require('knox');
var mime = require('mime');

function hasher(){
  var AUID = [],
      CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (var i = 0; i < 6; i++) {
    AUID.push(CHARS[Math.floor(Math.random()*62)]);
  }
  return AUID.join('');
};

var client = knox.createClient({
  key: ''
  , secret: ''
  , bucket: ''
});


exports.saveData = function(request, response){
    var file = request.files.file;
    var hash = hasher();

    var stream = fs.createReadStream(file.path)
    var mimetype = mime.lookup(file.path);
    var req;

    if (mimetype.localeCompare('image/jpeg')
        || mimetype.localeCompare('image/pjpeg')
        || mimetype.localeCompare('image/png')
        || mimetype.localeCompare('image/gif')) {

        req = client.putStream(stream, hash+'-party.png',
            {
                'Content-Type': mimetype,
                'Cache-Control': 'max-age=604800',
                'x-amz-acl': 'public-read',
                'Content-Length': file.size
            },
            function(err, result) {
             var saveParty = new Party({
                title: request.body.title,
                description  : request.body.description,
                imageUrl: req.url+hash+"-party.png",
              });
              saveParty.save(function(error, result) {
                if (error) {
                  console.error(error);
                } else {
                  response.redirect('http://localhost:8080/addParty.html');
                };
              })
          });
       } else {
            console.log(err);
        }
}


exports.getData = function(req, res){
    console.log(req);
    Party.find({}).sort({ranking:-1}).limit(5).exec(function(err, docs){
        console.log("docs "+docs);
        res.json(docs);
        return;
    });
}
