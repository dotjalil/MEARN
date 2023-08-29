const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, unique: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  age: { type: Number, required: true }
})

const userModel = mongoose.model("User", userSchema);



module.exports = userModel;