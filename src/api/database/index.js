const mongoose = require('mongoose')
const { MONGO_HOST, MONGO_USERNAME, MONGO_PASSWORD, MONGO_PORT, MONGO_DATABASE } = require('../../../config')

module.exports = function makeDB() {
    const credential = `${MONGO_USERNAME}:${encodeURIComponent(MONGO_PASSWORD)}`

    const mongoURI = `mongodb://${credential}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`

    return async function db() {
        return await mongoose.connect(mongoURI)
    }
}