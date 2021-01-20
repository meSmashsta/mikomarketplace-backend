module.exports = {
    development: {
        MONGO_HOST: 'localhost',
        MONGO_USERNAME: 'admin',
        MONGO_PASSWORD: 'secret',
        MONGO_PORT: 27017,
        MONGO_DATABASE: 'biobank_auth'
    },
    production: {
        MONGO_HOST,
        MONGO_USERNAME,
        MONGO_PASSWORD,
        MONGO_PORT,
        MONGO_DATABASE
    } = process.env
}[process.env.NODE_ENV]