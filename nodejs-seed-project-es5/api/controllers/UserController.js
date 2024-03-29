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
        msg: 'SignUp successful.',
        data: user
      });
    });
  },

  logIn: async (req, res, next) =>
  {
      var username = req.body.username;
      var password = req.body.password;
      var valid    = username && Validations.isString(username) && 
                     password && Validations.isString(password);

      if(!valid)
          return res.status(403).json({ error: "Error while logging in" });
        

      var user =  await User.findOne({ "username": username });
      if(user)
      {
          var validPassword = await user.isValidPassword(password);
          if(validPassword)
          {
              req.session.user = user.username;
              console.log(req.session.user);
              return res.status(201).json({
                        err: null,
                        msg: 'LogIn successful.',
                        data: username
                      });
          }
          else 
              return res.status(403).json({ error: "Password is Not Correct" });    
      }
      else 
          return res.status(403).json({ error: "Username is Not Correct" });    
  },

  logOut: async (req, res, next) =>
  {
      req.session.reset();
      return res.status(201).json({
                err: null,
                msg: 'LogOut successful.',
              });
  },

  isLoggedIn : async (req, res, next) =>
  {
    console.log(req.session.user);
    if(req.session.user)
        return res.status(201).json({
          err: null,
          msg: 'Logged In.',
        });
    
    return res.status(403).json({ error: "Not Logged In" });   
  },

  getAllUsers: async (req, res, next) =>
  {
    User.find({}, (err, users) => {
      if(err) return next(err);
      res.status(200).json({
        users: users
      });
    });
  }
};
