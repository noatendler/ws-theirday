var mongoose = require('mongoose');
/*
var schema = mongoose.Schema;
    var wishSchema = new schema({
      user: {type:String, required : true},
      sub: {type:String, required:true},
      num: {type:Number},
    },{collection: 'wishlist'});
*/
var schema = mongoose.Schema;
    var wishSchema = new schema({
      user: {type:String, required : true},
      sub: {type:String, required:true},
      title: {type:String},
      description: {type:String},
      image: {type:String},
      price: {type:Number},
    },{collection: 'wishlist'});

var Wish = mongoose.model('Wish', wishSchema);
module.exports = Wish;