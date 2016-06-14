var mongoose = require('mongoose');

var schema = mongoose.Schema;
var partySchema = new schema({
  title: {type:String, required : true},
  description  : {type:String, required:true},
  imageUrl: {type:String,required:true},
 ranking:Number
},{collection: 'party'});

var Party = mongoose.model('Party', partySchema);
module.exports = Party;