const express = require('express');
const router = express.Router();
const { setOrder, getOrder, getOrderById, updateTable, updateProducts, updateStatus, updatePrice, deleteOrder } = require('../controllers/order');

router.route('/set').post(setOrder)
router.route('/get').get(getOrder)
router.route('/getById/:id').get(getOrderById)
router.route('/updateTable/:id').put(updateTable)
router.route('/updateProducts/:id').put(updateProducts)
router.route('/updateStatus/:id').put(updateStatus)
router.route('/updatePrice/:id').put(updatePrice)
router.route('/delete/:id').patch(deleteOrder)

module.exports = router