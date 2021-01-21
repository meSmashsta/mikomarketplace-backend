const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const bookSchema = mongoose.Schema({
    _id: { type: String, default: uuidv4() },
    name: String,
    price: Number,
    description: String
})

module.exports = mongoose.model('Book', bookSchema)
