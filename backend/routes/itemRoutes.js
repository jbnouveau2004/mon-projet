const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController');

router.get('/items', controller.getAll);
router.get('/items/:id', controller.getOne);
router.post('/items', controller.create);
router.put('/items/:id', controller.update);
router.delete('/items/:id', controller.delete);

module.exports = router;