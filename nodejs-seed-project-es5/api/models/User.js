var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String, required: true, trim: true, unique: true},
    password: { type: String, required: true, trim: true},
    birthday: { type: Date,   required: true},
    email:    { type: String, lowercase: true, unique: true}
});
  
mongoose.model('User', userSchema);