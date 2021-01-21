module.exports = {
    development: {
        MONGO_HOST: 'mongo',
        MONGO_PORT: 27017,
        MONGO_DATABASE: 'mikomarketplace'
    },
    production: {
        MONGO_HOST,
        MONGO_PORT,
        MONGO_DATABASE
    } = process.env
}[process.env.NODE_ENV]