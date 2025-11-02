const express = require("express");
const app = express();
let books = require("./booksdb.js");
let users = require("./auth_users.js").users;
const auth_users = require("./auth_users.js").authenticated;
const public_routes = require("./general.js").general;

app.use(express.json());

// Root route – Task 1
app.get("/", (req, res) => {
  res.send(books);
});

// Task 2: Get book by ISBN
app.get("/isbn/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) res.send(book);
  else res.status(404).send({ message: "Book not found" });
});

// Task 3: Get books by Author
app.get("/author/:author", (req, res) => {
  const author = req.params.author;
  let results = [];
  for (let key in books) {
    if (books[key].author === author) results.push(books[key]);
  }
  res.send(results.length ? results : { message: "No books found" });
});

// Task 4: Get books by Title
app.get("/title/:title", (req, res) => {
  const title = req.params.title;
  let results = [];
  for (let key in books) {
    if (books[key].title === title) results.push(books[key]);
  }
  res.send(results.length ? results : { message: "No books found" });
});

// Task 5: Get book reviews
app.get("/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) res.send(book.reviews);
  else res.status(404).send({ message: "Book not found" });
});

// Run server
app.listen(5000, () => console.log("Server running on port 5000"));
