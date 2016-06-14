var mongoose = require('mongoose');
var schema = mongoose.Schema;


var kitsSchema = new schema({
  title: {type:String, required:true},
  description: {type:String, required:true},
  price:Number,
  image: {type:String, required:true},
  theme: String
},{collection: 'kits'});


var Kits = mongoose.model('Kits', kitsSchema);
module.exports = Kits;
