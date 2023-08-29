const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const userRouter = require("./routes/user")
const auth = require('./middlewares/auth');
const sayWelcome = require('./controllers/welcomeController')

const portNum = process.env.PORT_NUM;
const mongodbUrl = process.env.MONGODB_URL;
const app = express();
app.use(express.json())// midware


app.get("/welcome", auth, sayWelcome)
app.use("/user", userRouter);







app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send(`error`)
})










try {
  mongoose.connect(mongodbUrl);
  console.log(`connected to DB successfully`);
} catch (error) {
  console.log(`database connection failed. err is : ${err}`);
}
app.listen(portNum, (err) => {
  if (err) {
    console.log(`Something wrong with the server the err is : ${err}`);
  } else {
    console.log(`the server is running on port number: ${portNum}`);
  }
})