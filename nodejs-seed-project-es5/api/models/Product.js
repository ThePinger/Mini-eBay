var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
  seller: {
    type: Schema.Types.String, ref: 'User'
  }
});

mongoose.model('Product', productSchema);  
var Product = mongoose.model('Product');

Product.create({name: 'HamBurger', price:'2000', seller:'Omar Emad'});
Product.create({name: 'Hotdog', price:'3000', seller:'Omar Emad'});
Product.create({name: 'PlayStation', price:'4000', seller:'Omar Emad'});

//---------------------ADD YOUR PRODUCTS HERE----------------------------

Product.create({name: 'My poor soul', price:'1', seller:'Ahmed Hatem'});
Product.create({name: 'One Coin', price:'1', seller:'Ahmed Hatem'});
Product.create({name: '193 Lockpicks', price:'193', seller:'Ahmed Hatem'});