const express = require('express');
const router = express.Router();

const book_controller = require('../controllers/book-controller')

router.get('/', book_controller.all)
router.get('/detail/:id', book_controller.detail)
router.post('/book/create', book_controller.create)
router.patch('book/update/:id', book_controller.update)
router.delete('book/delete/:id', book_controller.delete)

module.exports = router