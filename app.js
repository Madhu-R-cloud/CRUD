const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bookstore', {
   
})
.then(()=>console.log("Connection Successfull..."))
.catch((err)=>console.log(err));

const db = mongoose.connection;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const bookRoutes = require('../node-book-api/routes/BookRoutes'); 

app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
