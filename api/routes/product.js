const express = require('express');
const router = express.Router();
const { setProduct, getProduct, getProductById, updateCatId, updateName, updateDescription, updateImage, deleteProduct } = require('../controllers/product');

router.route('/set').post(setProduct)
router.route('/get').get(getProduct)
router.route('/getById/:id').get(getProductById)
router.route('/updateCatId').put(updateCatId)
router.route('/updateName').put(updateName)
router.route('/updateDescription').put(updateDescription)
router.route('/updateImage').put(updateImage)
router.route('/delete').patch(deleteProduct)

module.exports = router