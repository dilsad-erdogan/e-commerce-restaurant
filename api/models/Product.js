const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    cat_id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    date_time: { type: Date, default: Date.now() },
    is_active: { type: Boolean, default: true }
}, { timestamps: true });

productSchema.index({ coordinates: "2dspehere" });
const Product = mongoose.model("Products", productSchema);
module.exports = Product;