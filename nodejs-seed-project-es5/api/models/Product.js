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
var Product = mongoose.model('Product');

Product.create({name: 'Laptop', price:'9000', seller:'Yasmina Elsaket'});
Product.create({name: 'Pandora', price:'7000', seller:'Yasmina Elsaket'});
Product.create({name: 'Jacket', price:'1000', seller:'Yasmina Elsaket'});
Product.create({name: 'New Balance', price:'2000', seller:'Yasmina Elsaket'});
Product.create({name: 'Kitkat', price:'10', seller:'Yasmina Elsaket'});
Product.create({name: 'Bag', price:'1500', seller:'Yasmina Elsaket'})
Product.create({name: 'Sleeve', price:'200', seller:'Yasmina Elsaket'});
Product.create({name: 'Basket', price:'300', seller:'Yasmina Elsaket'});
Product.create({name: 'TV', price:'10000', seller:'Yasmina Elsaket'});