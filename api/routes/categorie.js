const express = require('express');
const router = express.Router();
const { setCategorie, getCategorie, getCategorieById, updateName, updateDescription, updateImage, deleteCategorie } = require('../controllers/categorie');

router.route('/set').post(setCategorie)
router.route('/get').get(getCategorie)
router.route('/getById/:id').get(getCategorieById)
router.route('/updateName').put(updateName)
router.route('/updateDescription').put(updateDescription)
router.route('/updateImage').put(updateImage)
router.route('/delete').patch(deleteCategorie)

module.exports = router