var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
const bcrypt = require('bcryptjs');

var userSchema = new Schema({
    username: { type: String, required: true, trim: true, unique: true},
    password: { type: String, required: true, trim: true},
    email:    { type: String, lowercase: true, unique: true}
});

userSchema.pre('save', async function(next) {
    try {
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
      // Generate a password hash (salt + hash)
      const passwordHash = await bcrypt.hash(this.password, salt);
      // Saving the hash in the password attribute
      this.password = passwordHash;
      next();
    } catch(error) {
      next(error);
    }
  });
  
mongoose.model('User', userSchema);