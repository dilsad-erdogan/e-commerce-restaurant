const mongoose = require('mongoose');
const Product = require('./Product');

const onlineOrderSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    products: [ Product.schema ],
    address: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    deliveryStatus: { type: Boolean, required: true },
    date_time: { type: Date, default: Date.now() },
    is_active: { type: Boolean, default: true }
}, { timestamps: true });

onlineOrderSchema.index({ coordinates: "2dspehere" });
const OnlineOrder = mongoose.model("OnlineOrders", onlineOrderSchema);
module.exports = OnlineOrder;