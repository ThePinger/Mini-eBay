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
//---------------------ADD YOUR PRODUCTS HERE----------------------------

Product.create({name: 'HamBurger', price:'2000', seller:'Omar Emad'});
Product.create({name: 'Hotdog', price:'3000', seller:'Omar Emad'});
Product.create({name: 'PlayStation', price:'4000', seller:'Omar Emad'});

Product.create({name: 'Macbook', price:'20000', seller:'Yasmine Osama'});
Product.create({name: 'Alienware', price:'50000', seller:'Yasmine Osama'});
Product.create({name: 'HP-Omen15', price:'30000', seller:'Yasmine Osama'});

Product.create({name: 'SheeshTawook', price:'2014', seller:'Abdellatiif'});
Product.create({name: 'Shawerma', price:'1084', seller:'Abdellatiif'});
Product.create({name: 'Hamada', price:'1065', seller:'Abdellatiif'});



Product.create({name: 'Laptop', price:'9000', seller:'Yasmina Elsaket'});
Product.create({name: 'Pandora', price:'7000', seller:'Yasmina Elsaket'});
Product.create({name: 'Jacket', price:'1000', seller:'Yasmina Elsaket'});
Product.create({name: 'New Balance', price:'2000', seller:'Yasmina Elsaket'});
Product.create({name: 'Kitkat', price:'10', seller:'Yasmina Elsaket'});
Product.create({name: 'Bag', price:'1500', seller:'Yasmina Elsaket'})
Product.create({name: 'Sleeve', price:'200', seller:'Yasmina Elsaket'});
Product.create({name: 'Basket', price:'300', seller:'Yasmina Elsaket'});
Product.create({name: 'TV', price:'10000', seller:'Yasmina Elsaket'});
//---------------------ADD YOUR PRODUCTS HERE----------------------------
Product.create({name: 'Happy Days - Burger Classic', price:'40', seller:'ShadyTantawy'});
Product.create({name: 'Super Car - Mega Burger', price:'70', seller:'Shadshad'});
Product.create({name: 'yalla yabny 5allas', price:'555', seller:'TantawyGroup'});

Product.create({name: 'Gibson 59 Les Paul', price: '12000', seller: 'Mohamed Nawar'});
Product.create({name: '50 watt tube amp', price: '6000', seller: 'Mohamed Nawar'});
Product.create({name: 'A strand of McSwags beard hair', price: '375', seller: 'Mohamed Nawar'});