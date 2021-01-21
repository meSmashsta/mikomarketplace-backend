const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const bookSchema = mongoose.Schema({
    _id: { type: String, default: uuidv4 },
    title: String,
    isbpn: String,
    author: String,
    description: String,
    category: String,
    edition: String,
    publisher: String,
    publishedDate: { type: Date },
    officialUrl: String,
    price: Number,
}, { 
    timestamps: true 
});

module.exports = mongoose.model('Book', bookSchema);
