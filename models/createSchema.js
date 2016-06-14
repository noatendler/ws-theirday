var mongoose = require('mongoose');
var schema = mongoose.Schema;

var createSchema = new schema({
  title: {type:String, required:true},
  description: {type:String, required:true},
  image: {type:String, required:true},
  theme: String
},{collection: 'create'});


var Create = mongoose.model('Create', createSchema);
module.exports = Create;
