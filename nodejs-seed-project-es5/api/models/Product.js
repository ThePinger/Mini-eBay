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

Product.create({name: 'Macbook', price:'20000', seller:'Yasmine Osama'});
Product.create({name: 'Alienware', price:'50000', seller:'Yasmine Osama'});
Product.create({name: 'HP-Omen15', price:'30000', seller:'Yasmine Osama'});

//---------------------ADD YOUR PRODUCTS HERE----------------------------
