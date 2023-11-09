****MongoDB CRUD API for Book Management**

This project provides a RESTful API for managing books using MongoDB as the database. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on books. Users can add new books, view a list of all books, view details of a specific book by its ID, update a book's details, and delete a book.

**Table of Contents**
1.Technologies Used
2.Prerequisites
3.Getting Started
    - Installing Dependencies
    - Setting Up MongoDB
    - Running the Application
4.API Endpoints
5.Usage Examples

**Technologies Used**
1.Node.js
2.Express.js
3.MongoDB (using Mongoose ODM)
4.RESTful API principles
5.Git & GitHub for version control

**Prerequisites**

Before you begin, ensure you have the following installed:

-  Node.js: Download & Install Node.js
-  MongoDB: Download & Install MongoDB

**Getting Started**

**Installing Dependencies**

Navigate to the project directory and install the required dependencies using npm:
  - npm install

**Setting Up MongoDB**

1.Install and run MongoDB on your local machine or use a cloud-based solution like MongoDB Atlas.
2.Create a new database named bookstore.
3.Update the MongoDB connection URI in the config.js file with your database connection details.

**Running the Application**

  -  Start the application using the following command:
  - npm start

The API will be accessible at http://localhost:3000/api/books.

**API Endpoints**

  -  POST /api/books: Add a new book (requires 'title', 'author', and 'summary' in the request body).
  -  GET /api/books: Retrieve a list of all books.
  -  GET /api/books/:id: Retrieve details of a specific book by its ID.
  -  PUT /api/books/:id: Update details of a specific book by its ID.
  -  DELETE /api/books/:id: Delete a specific book by its ID.

**Usage Examples**

1.Adding a New Book:

    POST /api/books
    Content-Type: application/json
    
    {
      "title": "Sample Book",
      "author": "John Doe",
      "summary": "This is a sample book summary."
    }

2.Getting List of Books:
    GET /api/books/:id
    
3.Getting Details of a Book:
    GET /api/books/:id
    **Replace ':id' with the actual ID of the book you want to retrieve.**
    
4.Updating a Book:
    PUT /api/books/:id
    Content-Type: application/json
    
    {
      "title": "Updated Book Title",
      "author": "Jane Smith",
      "summary": "This is the updated book summary."
    }
  **Replace ':id' with the actual ID of the book you want to update.**
  
5.Deleting a Book:
    DELETE /api/books/:id
  **Replace :id with the actual ID of the book you want to delete**
