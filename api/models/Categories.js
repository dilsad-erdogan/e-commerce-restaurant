const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    date_time: { type: Date, default: Date.now },
    is_active: { type: Boolean, default: true }
}, { timestamps: true });

categorieSchema.index({ coordinates: "2dspehere" });
const Categorie = mongoose.model("Categories", categorieSchema);
module.exports = Categorie;