const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')
const mongoose = require('mongoose');
const connect = require('./api/database')
const helmet = require('helmet')
const app = express()
app.use(cors());

const bookRouter = require('./api_web/routes/book-route')

connect(mongoose)

app.use(bodyParser.json())
app.use(compression())
app.use(helmet())

app.get('/', (req, res) => {
    res.json({serviceName: 'Miko Marketplace api'})
});

app.use('/book', bookRouter)

const port = 3000
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})