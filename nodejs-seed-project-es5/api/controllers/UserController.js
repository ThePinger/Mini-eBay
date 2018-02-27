var mongoose    = require('mongoose');
var moment      = require('moment');
var Validations = require('../utils/Validations');
var User        = mongoose.model('User');
let jwt = require('jsonwebtoken');
let express = require('express');
let app = express();
let config = require('../config/Config')

module.exports = 
{
  signUp: async (req, res, next) =>
  {
    var userName     = req.body.username;
    var userEmail    = req.body.email;
    var userPassword = req.body.password;
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
        return res.status(403).json({ error: "Username already exists!" });
      }
      
    const emailAlreadyExists =  await User.findOne({ "email": userEmail });
      if(emailAlreadyExists)
      {
        return res.status(403).json({ error: "Email already exists!" });
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
  },

  authenticate: async (req, res, next) =>
  {
    const user = await User.findOne({ "username": req.body.username });
    if (!user)
    {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    }
    else if (user)
    {
      if (!user.isValidPassword(req.body.password))
      {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      }
      else
      {
        console.log(user.id);
        const tokenPayload = 
        {
          id: user.id
        };
        var token = jwt.sign(tokenPayload, config.SECRET, {
          
          expiresInMinutes: 1440 // expires in 24 hours
        });
        console.log(token);
        // return token
        res.status(200).json({
          token: token
        });
      }
    }

  }
};
