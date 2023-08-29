const userModel = require("../models/user");


const getAllUsers = async (req, res) => {
  try {

    const users = await userModel.find()
    res.json(users)
  } catch (error) {
    console.log(error);
    res.json({ "Error": "We working on it" })
  }

}
const getOneUser = async (req, res) => {
  try {

    const users = await userModel.findById(req.params.id)
    res.json(users)
  } catch (err) {
    console.log(err);
    res.json({ "Error": "We working on it" })

  }
}

const addNewUser = async (req, res) => {
  try {
    const user = await userModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age
    });

  } catch (err) {
    console.log(err);
    res.json({ "Error": "We working on it" })
  }


}
const modifyUser = async (req, res) => {
  try {
    await userModel.findByIdAndUpdate(req.params.id, { ...req.body });
    res.send("user modified Successfully")
  } catch (error) {
    console.log(error);
    res.json({ "Error": "We working on it" })
  }
}
const deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.send("Deleted Succfully")

  } catch (error) {
    console.log(error);
    res.json({ "Error": "We working on it" })
  }
}


// const userValidation

module.exports = { getAllUsers, getOneUser, addNewUser, modifyUser, deleteUser };