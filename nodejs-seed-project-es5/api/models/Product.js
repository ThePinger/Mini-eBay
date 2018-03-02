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
  updatedAt: Date
});

mongoose.model('Product', productSchema);  

Product.create({name: 'Alienware', price:'30,000', seller:'Ahmed Ashraf'});
Product.create({name: 'Lenovo Y50', price:'15,500', seller:'Ahmed Ashraf'});
Product.create({name: 'LG Smart TV', price:'16,000', seller:'Ahmed Ashraf'});
