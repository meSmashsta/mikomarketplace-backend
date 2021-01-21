const Book = require('../../api/entities/book');

exports.all = (req, res) => {
    res.status(200).json([]);
}

exports.detail = (req, res) => {

}

exports.create = (req, res) => {
    const product = new Book({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })
    product
        .save()
        .then(result => {
            console.log(result);    
        })
        .catch(err => console.log(err))
    res.status(201).send()
}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {
    
}

