var mongoose    = require('mongoose');
var moment      = require('moment');
var Validations = require('../utils/Validations');
var Cart        = mongoose.model('Cart');

module.exports = 
{
    addToCart: async (req, res, next) =>
    {
        var productId = req.body.product_id;
        var userId = req.session.user;

        Cart.create(req.body, function(err, cart) {
            if (err) {
              return next(err);
            }
            res.status(201).json({
              err: null,
              msg: 'Product added to cart.',
              data: cart
            });
          });

    },

    removeFromCart: async (req, res, next) =>
    {
        if (!Validations.isObjectId(req.params.productId)) {
        return res.status(422).json({
          err: null,
          msg: 'productId parameter must be a valid ObjectId.',
          data: null
        });
      }
      Cart.findByIdAndRemove(req.params.productId).exec(function(
        err,
        deletedProduct
      ) {
        if (err) {
          return next(err);
        }
        res.status(200).json({
          err: null,
          msg: 'Product removed from cart.',
          data: deletedProduct
        });
      });
    },
    viewCart: async (req, res, next) =>
    {
        Cart.find({}).exec(function(err, products) {
            if (err) {
              return next(err);
            }
            res.status(200).json({
              err: null,
              msg: 'Products retrieved successfully.',
              data: products
            });
          });
    }

}