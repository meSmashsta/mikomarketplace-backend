const express = require('express')
var bodyParser = require('body-parser')
const compression = require('compression')
const mongoose = require('mongoose');

const bookRouter = require('./api_web/routes/book-route')

const connect = require('./api/database')
const helmet = require('helmet')
const app = express()
const port = 3000

connect(mongoose)

app.use(bodyParser.json());
app.use(compression())
app.use(helmet())

app.get('/', (req, res) => {
    res.json({serviceName: 'Miko Marketplace api'})
});

app.use('/book', bookRouter)

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})