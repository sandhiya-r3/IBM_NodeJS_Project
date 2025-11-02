const axios = require("axios");

async function searchByTitle(title) {
  try {
    const res = await axios.get(`http://localhost:5000/title/${title}`);
    console.log("Books by Title:", res.data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

searchByTitle("The Iliad");
