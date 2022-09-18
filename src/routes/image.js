const express = require('express');
const controller = require('../controller/imageController');

const router = express.Router();

router.get('/:imageUrl/:text', controller.getImage);

module.exports = router;