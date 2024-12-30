const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    table_id: { type: String, required: true },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
            quantity: { type: Number, required: true }
        }
    ],
    paymentStatus: { type: Boolean, required: true },
    totalPrice: { type: Number, required: true },
    date_time: { type: Date, default: Date.now() },
    is_active: { type: Boolean, default: true }
}, { timestamps: true });

orderSchema.index({ coordinates: "2dspehere" });
const Order = mongoose.model("Orders", orderSchema);
module.exports = Order;