var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new schema({
  id: String,
  name  : String,
  imageUrl: String,
  email: String,
},{collection: 'users'});
var User = mongoose.model('User', userSchema);
module.exports = User;