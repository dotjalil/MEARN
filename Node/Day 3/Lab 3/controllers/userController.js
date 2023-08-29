const userModel = require("../models/user");


const getAllUsers = (req, res) => {
  userModel.find().then((users) => {
    res.json(users)
  }).catch((err) => {
    console.log(err);
    res.json({ "Error": "We working on it" })
  })

}
const getOneUser = (req, res) => {
  userModel.findById(req.params.id).then((users) => {
    res.json(users)
  }).catch((err) => {
    console.log(err);
    res.json({ "Error": "We working on it" })
  })

}
const addNewUser = (req, res) => {
  const user = new userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age
  });
  user.save().then(() => {
    console.log(`then`);
    res.send("saved successfully")
  }).catch((err) => {
    console.log(`catch`);

    console.log(err);
    res.json({ "Error": "We working on it" })
  })

}
const modifyUser = (req, res) => {
  userModel.findByIdAndUpdate(req.params.id, { ...req.body }).then(() => {
    res.send("user modified Successfully")
  }).catch((err) => {
    console.log(err);
    res.json({ "Error": "We working on it" })
  })

}
const deleteUser = (req, res) => {

  userModel.findByIdAndDelete(req.params.id).then(() => {
    res.send("Deleted Succfully")
  }).catch((err) => {
    console.log(err);
    res.json({ "Error": "We working on it" })
  })
}


// const userValidation

module.exports = { getAllUsers, getOneUser, addNewUser, modifyUser, deleteUser };