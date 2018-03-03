var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
   ID: {
        type: Number,
        required : true,
    },
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
   seller: {
      type: String,
  },
});
  
Product.create({ ID: 1, name: 'pepsi', price: '25', createdA: '3/3/2018', seller: 'esraa mahmoud' });
Product.create({ ID: 2, name: 'black', price: '20', createdA: '3/3/2018', seller: 'esraa mahmoud' });
Product.create({ ID: 3, name: 'ginger', price: '35', createdA: '3/3/2018', seller: 'esraa mahmoud' });


mongoose.model('Product', productSchema);  
