const express = require('express');
const router = express.Router();
const { setProduct, getProduct, getProductById, updateCatId, updateName, updateDescription, updatePrice, updateImage, deleteProduct } = require('../controllers/product');

router.route('/set').post(setProduct)
router.route('/get').get(getProduct)
router.route('/getById/:id').get(getProductById)
router.route('/updateCatId/:id').put(updateCatId)
router.route('/updateName/:id').put(updateName)
router.route('/updateDescription/:id').put(updateDescription)
router.route('/updatePrice/:id').put(updatePrice)
router.route('/updateImage/:id').put(updateImage)
router.route('/delete/:id').patch(deleteProduct)

module.exports = router