const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const app = express()
const port = 3000

app.use(compression())
app.use(helmet())


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})