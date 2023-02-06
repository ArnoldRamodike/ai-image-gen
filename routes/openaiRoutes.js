const express = require('express');
const router = express.Router();
const {generateImage} = require('../controllers/openaiController.js');

router.post('/generateimage', generateImage);

module.exports = router;