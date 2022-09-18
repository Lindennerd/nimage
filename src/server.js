const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const swaggerFile = require('../swagger-output.json')
const controller = require('./controller/imageController');

const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));

const router = express.Router();

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

router.get('/image/:imageUrl/:text', controller.getImage);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
    app.use('/.netlify/functions/server', router);
} else {
    app.use('/', router);
}

// app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app;
module.exports.handler = serverless(app);