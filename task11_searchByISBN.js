const axios = require("axios");

function searchByISBN(isbn) {
  return axios.get(`http://localhost:5000/isbn/${isbn}`);
}

searchByISBN("1")
  .then(res => console.log("Book by ISBN:", res.data))
  .catch(err => console.error("Error:", err.message));
