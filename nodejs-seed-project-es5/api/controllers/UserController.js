var mongoose    = require('mongoose');
var moment      = require('moment');
var Validations = require('../utils/Validations');
var User        = mongoose.model('User');

module.exports = 
{
  signUp: async (req, res, next) =>
  {
    var userName     = req.body.username;
    var userEmail    = req.body.email;
    var userPassword = req.body.password;
    //var error        = false;
    var valid =
      userName &&
      Validations.isString(userName) &&
      userPassword &&
      Validations.isString(userPassword) &&
      userEmail;

    if (!valid) 
    {
      return res.status(422).json({
        err: null,
        msg: 'Username, password and email are required fields.',
        data: null
      });
    }

    const usernameAlreadyExists =  await User.findOne({ "username": userName });
      if(usernameAlreadyExists)
      {
        return res.status(422).json({
          err: null,
          msg: 'Username already exists',
          data: null
        });
      }
      
    const emailAlreadyExists =  await User.findOne({ "email": userEmail });
      if(emailAlreadyExists)
      {
        return res.status(422).json({
          err: null,
          msg: 'Email already exists.',
          data: null
        });
      }

    User.create(req.body, function(err, user) {
      if (err) {
        return next(err);
      }
      res.status(201).json({
        err: null,
        msg: 'SignUp was successfull.',
        data: user
      });
    });
  }
};
