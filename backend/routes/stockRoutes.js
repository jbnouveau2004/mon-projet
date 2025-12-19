const express = require('express');
const router = express.Router();
const controller = require('../controllers/stockController');

router.get('/stock', controller.getAll);
router.post('/stock', controller.create);

module.exports = router;