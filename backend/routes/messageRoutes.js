const express = require('express');
const router = express.Router();
const controller = require('../controllers/messageController');

router.get('/messages', controller.getAll);
router.post('/messages', controller.create);

module.exports = router;