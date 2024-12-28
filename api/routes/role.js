const express = require('express');
const router = express.Router();
const { setRole, getRole, getRoleById, updateName, deleteRole } = require('../controllers/role');

router.route('/set').post(setRole)
router.route('/get').get(getRole)
router.route('/getById/:id').get(getRoleById)
router.route('/updateName/:id').put(updateName)
router.route('/delete/:id').patch(deleteRole)

module.exports = router