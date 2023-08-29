const express = require("express");
const Router = express.Router();
const { getAllPosts, getOnePost, addNewPost, modifyPost, deletePost } = require('../controllers/postsController');
const { validatorFun } = require("../middlewares/middlewares")
const postValidation = require('../validations/postValidations')





Router.post(postValidation, validatorFun) //middleWare
// Router.put(postValidation, validatorFun) //middleWare

Router.get("/", getAllPosts);
Router.get('/:id', getOnePost);
Router.post("/", addNewPost);
Router.put("/:id", modifyPost);
Router.delete("/:id", deletePost);

module.exports = Router;

