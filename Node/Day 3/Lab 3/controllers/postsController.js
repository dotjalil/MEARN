const PostModel = require('../models/post.js');

const getAllPosts = (req, res) => {
  PostModel.find().populate("author")
    .then((todos) => {
      res.json(todos)
    }).catch((err) => {
      console.log(err);
      res.status(500).json({ "ERROR": "DB ERROR" })
    });
}
const getOnePost = (req, res) => {
  PostModel.findOne({ _id: req.params.id }).populate("author").then((todo) => {
    res.json(todo)
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ "ERROR": "DB ERROR" })
  })
}
const addNewPost = (req, res) => {
  console.log('akkk');
  const newTodo = new PostModel({ ...req.body })
  newTodo.save().then(() => {
    res.send("Added Successfuly");
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ "ERROR": "DB ERROR" })
  })

}
const modifyPost = (req, res) => {
  PostModel.findByIdAndUpdate(req.params.id, { ...req.body }).then(() => {
    res.send("Updated Successfuly")
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ "ERROR": "DB ERROR" })
  })
}
const deletePost = (req, res) => {
  PostModel.findByIdAndRemove(req.params.id).then(() => {
    res.send("Deleted Successfully")
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ "ERROR": "DB ERROR" })

  })
}


module.exports = { getAllPosts, getOnePost, addNewPost, modifyPost, deletePost };