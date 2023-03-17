const express = require("express");
const userController = require('../controllers/userController');
const router = express.Router();
const authMiddleware = require('../middlewares/authmiddleware');


router.get('/', userController.getUsers)
router.post('/signup', userController.UserSignUp);
router.post('/login', userController.UserLogin);
router.get('/:email',authMiddleware, userController.findByEmail)
router.delete('/:email', userController.deleteUser)


module.exports = router;