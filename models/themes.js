var mongoose = require('mongoose');
var schema = mongoose.Schema;


var themesSchema = new schema({
  theme: {type:String},
  age  : {type:Number},
  description: {type:String},
  image: {type:String}
},{collection: 'themes'});


var Themes = mongoose.model('Themes', themesSchema);
module.exports = Themes;