const express = require('express');
const controller = require('../controller/imageController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Up and Running!');
});
router.get('image/:imageUrl/:text', controller.getImage);

module.exports = router;