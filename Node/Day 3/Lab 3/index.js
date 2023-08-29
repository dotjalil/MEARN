const express = require("express");
const mongoose = require('mongoose');
const logger = require("morgan")
const postsRouter = require("./routers/posts");
const userRouter = require("./routers/user");
const app = express();
const portNum = process.env.PORT_NUM || 5000;
const postPath = process.env.POSTS_PATH || "/post";
const userPath = process.env.USER_PATH || "/user";
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/blog"


app.use(express.json()); // middleware to parse body content
app.use(logger('dev'));
app.use(postPath, postsRouter);
app.use(userPath, userRouter);





try {
  mongoose.set('strictQuery', false)
  mongoose.connect(MONGODB_URL);
  console.log(`connected Succeffuly`);
} catch (error) {
  handleError(error);
}

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send(err.message)
})

app.listen(portNum, (err) => {
  if (err) console.log(err);
  console.log(`Server is lestening to port num: ${portNum}`);
})

