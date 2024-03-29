var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var cartSchema = new Schema({
    user:    { type: Schema.Types.ObjectId, ref: 'User'},
    product: { type: Schema.Types.ObjectId, ref: 'Product'}
});

mongoose.model('Cart', cartSchema);