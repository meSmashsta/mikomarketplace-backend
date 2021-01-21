const express = require('express');
const router = express.Router();

const book_controller = require('../controllers/book-controller')

router.get('/', book_controller.all)
router.get('/detail/:id', book_controller.detail)
router.post('/create', book_controller.create)
router.patch('/update/:id', book_controller.update)
router.delete('/delete/:id', book_controller.delete)

module.exports = router