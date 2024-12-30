const Reservation = require("../models/Reservation")

async function setReservation (req, res) {
    try{
        const { name, phone, email, numberOfPeople, dateTime } = req.body;

        const reservation = new Reservation({
            name: name,
            phone: phone,
            email: email,
            numberOfPeople: numberOfPeople,
            confirmationStatus: false,
            is_active: true
        });

        const savedReservation = await reservation.save();
        if(savedReservation) {
            res.status(201).json({ success: true, data: savedReservation });
        } else {
            res.status(400).json({ success: false, message: 'Reservation error!' });
        }
    } catch(error){
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function getReservation (req, res) {
    try{
        const reservation = await Reservation.find({ is_active: true });

        if(reservation) {
            res.status(200).json({ success: true, data: reservation })
        } else {
            res.status(404).json({ success: false, message: 'Reservation not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getReservationById (req, res) {
    try{
        const id = req.params.id;
        const reservation = await Reservation.findById(id);

        if(reservation && reservation.is_active === true){
            res.status(200).json({ success: true, data: reservation });
        } else {
            res.status(404).json({ success: false, error: 'Reservation not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function updateConfirmation (req, res) {
    try{
        const id = req.params.id;
        const { confirmationStatus } = req.body;

        const reservation = await Reservation.findById(id);
        if(!reservation) {
            return res.status(404).json({ success: false, message: 'Reservation not found!' });
        }

        reservation.confirmationStatus = confirmationStatus;
        reservation.save();

        res.status(200).json({ success: true, message: 'Reservation updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function deleteReservation (req, res) {
    try{
        const id = req.params.id;
        const reservation = await Reservation.findById(id);

        if(!reservation) {
            res.status(404).json({ success: false, message: 'Reservation not found!' });
        } else {
            await reservation.updateOne({ is_active: false });
            res.status(200).json({ success: true, message: 'Reservation deleted successfully.' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

module.exports = { setReservation, getReservation, getReservationById, updateConfirmation, deleteReservation }