const express = require("express");
const Router = express.Router();

Router.get("/user", (req, res) => {
  console.log("/user requested");
  res.send("hello from /user");
});

module.exports = Router;
