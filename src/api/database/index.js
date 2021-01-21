const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = require('../../../config')

module.exports = function connect(mongoose) {
    const mongoURI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`
    mongoose.connect(mongoURI)
}