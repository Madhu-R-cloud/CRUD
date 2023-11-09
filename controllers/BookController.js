const Book = require('../models/Book');

module.exports = {
    getAllBooks: async (req, res) => {
        try {
            const books = await Book.find();
            if (books=='') {
               return res.status(400).send( {message : "Books Not found, Insert Books"});
                
            }
            else { 
                res.status(200).send(books);
            }

        } catch (error) {
            res.status(500).json({ error: error.message }); 
        }
    },

    createBook: async (req, res) => {
        try {
            const { title, author, summary } = req.body;
            if (!title || !author || !summary) {
                return res.status(400).send({message : 'Empty input, Title, Author, Summery fields are mandatory'});
            }
        
            if (!isNaN(author)) {
                return res.send({ message: "Author name should not be a number. Please enter a valid user name." });
            }
            
            const newBook = new Book({ title, author, summary });
        
            await newBook.save();
            return res.status(201).json({ message: "Book Added Successfully, Here is the New Book Title and Author details",  title: newBook.title,
            author: newBook.author, summary : newBook.summary});

        } catch (error) {
           return res.status(500).json({ error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const {id} = req.params;
            if(id){
                const book = await Book.findById(id);
            if (book) {
               return res.status(200).json(book);
            } else {
               return res.status(404).json({ message: 'Book not found' });
            }
        }else{
            return res.status(404).json({ message: 'Enter ID to find a Book' });
        }
            
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },


    updateBook: async (req, res) => {
        try {
            const { title, author, summary } = req.body;
            const id = req.params.id;
            if (!title || !author || !summary || !id ) {
                return res.status(400).send('Bad Request: Empty input');
            }
            if (!isNaN(author)) {
                return res.send({ message: "Author name should not be a number. Please enter a valid user name." });
            }
            const updatedBook = await Book.findByIdAndUpdate(id, { title, author, summary }, { new: true });
            // const filteredBook = {
            //     title: updatedBook.title,
            //     author: updatedBook.author,
            //     summary: updatedBook.summary
            // };
          
            if (updatedBook) {
                return res.status(200).json(updatedBook);
            } else {
               return res.status(404).json({ message: 'Book not found to update, Insert new Book and then update'});
            }
        } catch (error) {
           return res.status(500).json({ error: error.message });
        }
    },


    deleteBook: async (req, res) => {
        try {
            const id = req.params.id;
            if(id){
                const deletedBook = await Book.findByIdAndDelete(id);
            if (deletedBook) {
               return res.status(200).json({ message: 'Book deleted successfully' });
            } else {
                return res.status(404).json({ message: 'Book not found' });
            }
        }else{
            return res.status(404).json({ message: 'Enter Book ID to delete a perticuler Book' })
        }
            
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};