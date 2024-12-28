const express = require('express');
const router = express.Router();
const { setTable, getTable, getTableById, updateName, updateNumber, updateRate, deleteTable } = require('../controllers/table');

router.route('/set').post(setTable)
router.route('/get').get(getTable)
router.route('/getById/:id').get(getTableById)
router.route('/updateName').put(updateName)
router.route('/updateNumber').put(updateNumber)
router.route('/updateRate').put(updateRate)
router.route('/delete').patch(deleteTable)

module.exports = router