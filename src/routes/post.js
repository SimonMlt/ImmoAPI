const router = require('express').Router();
const postController = require('../controllers/PostController');
const multer = require("multer");
const upload = multer();

router.get('/', postController.readPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);


module.exports = router;
