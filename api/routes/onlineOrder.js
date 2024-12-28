const express = require('express');
const router = express.Router();
const { setOnlineOrder, getOnlineOrder, getOnlineOrderById, updateStatus, deleteOnlineOrder } = require('../controllers/onlineOrder');

router.route('/set').post(setOnlineOrder)
router.route('/get').get(getOnlineOrder)
router.route('/getById/:id').get(getOnlineOrderById)
router.route('/updateStatus').put(updateStatus)
router.route('/delete').patch(deleteOnlineOrder)

module.exports = router