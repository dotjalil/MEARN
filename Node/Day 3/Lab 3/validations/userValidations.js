const { check, validationResult, body } = require("express-validator");
const userModel = require('../models/user')
const userValidations = [body('firstName').isString(), body('lastName').isString(), body('age').isNumeric(), body("email").isEmail().custom(value => {
  return userModel.find({ email: value }).then(mail => {
    console.log(mail.length);
    if (mail.length > 0) {
      console.log(mail);
      throw ("mail is taken!");
    }
  })
})];


module.exports = userValidations;