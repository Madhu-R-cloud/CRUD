const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController');

router.get("/", bookController.getAllBooks);
router.post("/create",bookController.createBook);
router.get("/:id",bookController.getById);
router.post("/:id",bookController.updateBook);
router.delete("/:id",bookController.deleteBook);


module.exports = router;    