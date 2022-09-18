const express = require('express');
const controller = require('../controller/imageController');

const router = express.Router();

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

router.get('/image/:imageUrl/:text', controller.getImage);

module.exports = router;