const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date_time: { type: Date, default: Date.now },
    is_active: { type: Boolean, default: true }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;