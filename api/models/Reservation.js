const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    numberOfPeople: { type: Number, required: true },
    dateTime: { type: Date, required: true },
    confirmationStatus: { type: Boolean, default: false },
    is_active: { type: Boolean, default: true }
}, { timestamps: true });

reservationSchema.index({ coordinates: "2dspehere" });
const Reservation = mongoose.model("Reservations", reservationSchema);
module.exports = Reservation;