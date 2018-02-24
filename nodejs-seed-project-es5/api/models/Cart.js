var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var cartSchema = new Schema({
    user_id:    { type: Schema.Types.ObjectId, ref: 'User'},
    product_id: { type: Schema.Types.ObjectId, ref: 'Product'}
});

mongoose.model('Cart', cartSchema);