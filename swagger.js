const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: "1.0.0",
        title: "N-Image API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: process.env.HOST,
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/server.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./src/server')
})