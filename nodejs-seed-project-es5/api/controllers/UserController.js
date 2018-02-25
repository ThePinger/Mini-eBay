var mongoose    = require('mongoose');
var moment      = require('moment');
var Validations = require('../utils/Validations');
var User        = mongoose.model('User');

module.exports.signUp = function(req, res, next) {
  var valid =
    req.body.username &&
    Validations.isString(req.body.username) &&
    req.body.password &&
    Validations.isString(req.body.password);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'Username, password and birthday are required fields.',
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
};