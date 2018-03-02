var mongoose    = require('mongoose');
var moment      = require('moment');
var Validations = require('../utils/Validations');
var Cart        = mongoose.model('Cart');
var User        = mongoose.model('User');
var Product     = mongoose.model('Product');

module.exports = 
{
    addToCart: async (req, res, next) =>
    {
      var productName = req.body.product;
      var userName = req.session.user;

        var promises = [];

        promises.push(new Promise((resolve, reject) => {
          User.findOne({ username: userName }, (err, user) => {
            if(err) {
              console.error('user error', err);
              return reject(err);
            }
            if(!user) {
              console.log('product not found');
              return reject(new Error());
            }

            resolve(user);
          });
        }));

        promises.push(new Promise((resolve, reject) => {
          Product.findOne({ name: productName }, (err, product) => {
            if(err) {
              console.error('product error', err);
              return reject(err);
            }
            if(!product) {
              console.log('product not found');
              return reject(new Error())
            };

            resolve(product);
          });
        }));

        Promise.all(promises).then(([user, product]) => {
          Cart.create({
            user: user._id,
            product: product._id
          }, function(err, cart) {
            if (err) {
              console.error('cart error', err);
              return next(err);
            }

            res.status(201).json({
              err: null,
              msg: 'Product added to cart.',
              data: cart
            });
          });
        }).catch(err => next(err.message));
    },

    removeFromCart: async (req, res, next) =>
    {
      var productName = req.body.product;
      var userName = req.session.user;

      var promises = [];
      promises.push(new Promise((resolve, reject) => {
        User.findOne({ username: userName }, (err, user) => {
          if(err) {
            console.error('user error', err);
            return reject(err);
          }
          if(!user) {
            console.log('product not found');
            return reject(new Error());
          }

          resolve(user);
        });
      }));

      promises.push(new Promise((resolve, reject) => {
        Product.findOne({ name: productName }, (err, product) => {
          if(err) {
            console.error('product error', err);
            return reject(err);
          }
          if(!product) {
            console.log('product not found');
            return reject(new Error())
          };

          resolve(product);
        });
      }));

      Promise.all(promises).then(([user, product]) => {
        Cart.deleteOne({
          user: user._id,
          product: product._id
        }, function(err, cart) {
          if (err) {
            console.error('cart error', err);
            return next(err);
          }

          res.status(201).json({
            err: null,
            msg: 'Product removed from cart.',
            data: cart
          });
        });
      }).catch(err => next(err.message));
  },
    viewCart: async (req, res, next) =>
    {
      var userName = req.session.user;
      User.findOne({ username: userName }, (err, user) => {
        if(err) {
          console.error('user error', err);
          return next(err.message);
        }
        if(!user) {
          console.log('user not found');
          return next('user not found');
        }
        Cart.find({user: user._id}).populate('product').exec(function(err, products) {
          if (err) {
            return next(err.message);
          }
          res.status(200).json({
            err: null,
            msg: 'Products retrieved successfully.',
            data: products
          });
        });
      });      
    },
}