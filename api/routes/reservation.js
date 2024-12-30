const express = require('express');
const router = express.Router();
const { setReservation, getReservation, getReservationById, updateConfirmation, deleteReservation } = require('../controllers/reservation');

router.route('/set').post(setReservation)
router.route('/get').get(getReservation)
router.route('/getById/:id').get(getReservationById)
router.route('/updateConfirmation/:id').put(updateConfirmation)
router.route('/delete/:id').patch(deleteReservation)

module.exports = router