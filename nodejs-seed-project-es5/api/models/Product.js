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


Product.create({name: 'Lion King', price:'200', seller:'Ramy Ahmed'});
Product.create({name: 'Golden Spoon', price:'1500', seller:'Ramy Ahmed'});
Product.create({name: 'Cow', price:'400000', seller:'Ramy Ahmed'});

Product.create({name: 'Football Jersey', price:'500', seller:'Youssam Joseph'});
Product.create({name: 'Official Match Ball', price:'600', seller:'Youssam Joseph'});
Product.create({name: 'Football boots', price:'300', seller:'Youssam Joseph'});