const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    name: { type: String, required: true },
    numberOfPeople: { type: Number, required: true },
    occupancyRate: { type: Boolean, required: true },
    date_time: { type: Date, default: Date.now() },
    is_active: { type: Boolean, default: true }
}, { timestamps: true });

tableSchema.index({ coordinates: "2dspehere" });
const Tables = mongoose.model("Tables", tableSchema);
module.exports = Tables;