var mongoose = require('mongoose');
var schema = mongoose.Schema;


var decortionSchema = new schema({
  title: {type:String, required:true},
  price:Number,
  image: {type:String, required:true},
  theme: String
},{collection: 'decortions'});


var Decortion = mongoose.model('Decortion', decortionSchema);
module.exports = Decortion;