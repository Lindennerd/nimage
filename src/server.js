const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger-output.json')
const imageRouter = require('./routes/image');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));
if (process.env.NODE_ENV === 'production') {
    app.use('/.netlify/functions/server', imageRouter);
} else {
    app.use('/', imageRouter);
}

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app;
module.exports.handler = serverless(app);