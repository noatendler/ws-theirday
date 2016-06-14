var mongoose = require('mongoose'),
Activity = require('../models/activity');
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

exports.getData = function(req, res){
    console.log(req);
    Activity.find({},function(err, docs){
        console.log("docs "+docs);
        res.json(docs);
    });
}
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

        req = client.putStream(stream, hash+'.png',
            {
                'Content-Type': mimetype,
                'Cache-Control': 'max-age=604800',
                'x-amz-acl': 'public-read',
                'Content-Length': file.size
            },
            function(err, result) {
             var saveActivity = new Activity({
                title : request.body.title,
                age : Number(request.body.age),
                description: request.body.description,
                theme: request.body.theme,
                price:request.body.price,
                image: req.url
              });
              saveActivity.save(function(error, result) {
                if (error) {
                  console.error(error);
                } else {
                  response.redirect('http://localhost:8080/showActivity.html');
                };
              })
          });
       } else {
            console.log(err);
        }
 }