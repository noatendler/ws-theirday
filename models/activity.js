var mongoose = require('mongoose');
var schema = mongoose.Schema;


var activitySchema = new schema({
  title: {type:String, required:true},
  age  : {type:Number, required:true},
  description: {type:String, required:true},
  theme: String,
  price: Number,
  image: {type:String, required:true}
},{collection: 'acivities'});


var Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;