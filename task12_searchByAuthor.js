const axios = require("axios");

async function searchByAuthor(author) {
  try {
    const res = await axios.get(`http://localhost:5000/author/${author}`);
    console.log("Books by Author:", res.data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

searchByAuthor("Chinua Achebe");
