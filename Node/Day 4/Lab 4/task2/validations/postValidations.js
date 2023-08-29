const { body } = require("express-validator");
const PostModel = require('../models/post.js');



const postValidation = [body("title").isString().custom(val => {
  return PostModel.find({ title: val }).then(title => {
    if (title.length > 0) {
      throw ("title is taken")
    }
  })
}), body("body").isString()];


module.exports = postValidation;