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
