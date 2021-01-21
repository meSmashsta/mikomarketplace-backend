const Book = require('../../api/entities/book');

exports.all = (req, res) => {
    res.status(200).json([]);
}

exports.detail = (req, res) => {

}

exports.create = async (req, res) => {
    const { 
        title, 
        isbpn, 
        author, 
        description, 
        category, 
        edition, 
        publisher, 
        publishedDate, 
        officialUrl, 
        price 
    } = req.body;

    const book = new Book({
        title, isbpn, author, description, category, edition, publisher, publishedDate, officialUrl, price
    });

    try {
        res.status(201).json(await book.save());
    } catch (err) {
        res.status(422).json(err);
    }
}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {
    
}

