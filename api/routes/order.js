const express = require('express');
const router = express.Router();
const { setOrder, getOrder, getOrderById, updateTable, updateProducts, updateStatus, updatePrice, deleteOrder } = require('../controllers/order');

router.route('/set').post(setOrder)
router.route('/get').get(getOrder)
router.route('/getById/:id').get(getOrderById)
router.route('/updateTable').put(updateTable)
router.route('/updateProducts').put(updateProducts)
router.route('/updateStatus').put(updateStatus)
router.route('/updatePrice').put(updatePrice)
router.route('/delete').patch(deleteOrder)

module.exports = router