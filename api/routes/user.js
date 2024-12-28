const express = require('express');
const router = express.Router();
const { login, register, getUser, getUserById, updateRole, updateName, updateEmail, updatePassword, deleteUser } = require('../controllers/user');

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/get').get(getUser)
router.route('/getById/:id').get(getUserById)
router.route('/updateRole/:id').put(updateRole)
router.route('/updateName/:id').put(updateName)
router.route('/updateEmail/:id').put(updateEmail)
router.route('/updatePassword/:id').put(updatePassword)
router.route('/deleteUser/:id').patch(deleteUser)

module.exports = router