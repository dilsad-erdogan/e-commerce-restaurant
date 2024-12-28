const express = require('express');
const router = express.Router();
const { login, register, getUser, getUserById, updateRole, updateName, updateEmail, updatePassword, deleteUser } = require('../controllers/user');

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/get').get(getUser)
router.route('/getById/:id').get(getUserById)
router.route('/updateRole').put(updateRole)
router.route('/updateName').put(updateName)
router.route('/updateEmail').put(updateEmail)
router.route('/updatePassword').put(updatePassword)
router.route('/deleteUser').patch(deleteUser)

module.exports = router