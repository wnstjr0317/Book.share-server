const express = require('express');
const router = express.Router();

const { postController } = require('../Controller');

router.get('/lists', postController.postlist.get);

router.get('/title', postController.post_title.get);

router.post('/push', postController.postpush.post);

module.exports = router;