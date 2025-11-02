const axios = require("axios");

function getAllBooks(callback) {
  axios.get("http://localhost:5000/")
    .then(res => callback(null, res.data))
    .catch(err => callback(err));
}

getAllBooks((err, data) => {
  if (err) console.error("Error:", err.message);
  else console.log("All Books:", data);
});
