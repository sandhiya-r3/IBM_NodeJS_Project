const express = require("express");
let books = require("./booksdb.js");
let router = express.Router();

// Example: You could define additional public routes here if needed
router.get("/", (req, res) => res.send("General route working"));

module.exports.general = router;
