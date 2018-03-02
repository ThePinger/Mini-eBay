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
Product.create({name: 'Converse',price:'1500',seller:'Malak Hatem'});
Product.create({name: 'Vans',price:'900',seller:'Malak Hatem'});
Product.create({name: 'Pizza',price:'250',seller:'Malak Hatem'});