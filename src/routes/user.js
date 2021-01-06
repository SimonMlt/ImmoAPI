const router = require('express').Router();
const authController = require('../controllers/AuthController');
const userController = require('../controllers/UserController');

// Auth
router.post('/register', authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);

// user display: 'block',
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
