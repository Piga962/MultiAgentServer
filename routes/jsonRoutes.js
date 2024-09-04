const express = require('express');
const router = express.Router();
const jsonController = require('../controllers/jsonController');

router.post('/', jsonController.createJson);
router.get('/', jsonController.getJson);

module.exports = router;