const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');

router.post('/users', userController.createUser);
router.post('/posts', postController.createPost);

module.exports = router;