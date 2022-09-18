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
const ROOT_PATH = process.env.NODE_ENV === 'production'
    ? '/.netlify/functions/server/doc'
    : '/';

router.get('/', (req, res) => {
    res.redirect(ROOT_PATH + '/doc');
});

router.get('/image', (req, res) => res.send('Send me an ImageURL and a Text'))
router.get('/image/:imageUrl/:text', await controller.getImage);
router.get('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(ROOT_PATH, router);


module.exports = app;
module.exports.handler = serverless(app);