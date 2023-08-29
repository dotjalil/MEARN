const express = require("express");

const app = express();
const port = process.env.SERVER_PORT || 8000;

app.listen(port, (err) => {
  if (!err) return console.log(`Server listening on port ${port}`);
  console.log(`Error listening on port ${port}`);
});
