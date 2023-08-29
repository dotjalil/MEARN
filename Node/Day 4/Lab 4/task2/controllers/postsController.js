const PostModel = require('../models/post.js');

const getAllPosts = async (req, res) => {
  try {
    const todos = await PostModel.find().populate("author");
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ "ERROR": "DB ERROR" })
  }

}
const getOnePost = async (req, res) => {
  try {
    const todo = await PostModel.findOne({ _id: req.params.id }).populate("author");
    res.json(todo)
  } catch (error) {
    console.log(error);
    res.status(500).json({ "ERROR": "DB ERROR" })
  }
}
const addNewPost = async (req, res) => {
  try {
    await PostModel.create({ ...req.body });
    res.send("Added Successfuly");
  } catch (error) {
    console.log(error);
    res.status(500).json({ "ERROR": "DB ERROR" })
  }


}
const modifyPost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(req.params.id, { ...req.body });
    res.send("Updated Successfuly")
  } catch (error) {
    console.log(error);
    res.status(500).json({ "ERROR": "DB ERROR" })
  }

}
const deletePost = async (req, res) => {
  try {
    await PostModel.findByIdAndRemove(req.params.id);
    res.send("Deleted Successfully")
  } catch (error) {
    console.log(error);
    res.status(500).json({ "ERROR": "DB ERROR" })
  }
}


module.exports = { getAllPosts, getOnePost, addNewPost, modifyPost, deletePost };