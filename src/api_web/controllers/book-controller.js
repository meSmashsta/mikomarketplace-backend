const Book = require('../../api/entities/book');

exports.all = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch(err) {
        res.status(500).json(err);
    }
}

exports.detail = async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json(await Book.findById(id));
    } catch(err) {
        res.status(500).json(err);
    }
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

exports.update = async (req, res) => {
    const { id } = req.params;
    const book = { 
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
    try {
        await Book.findOneAndUpdate({ _id: id }, book);
        res.status(200).json({ message: 'update successful' });
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.delete = (req, res) => {
    // const { id } = req.params;
    // try {
    //     await Book.deleteOne({ _id: id });
    //     res.status(200).json({ message: 'delete successful' });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
}

