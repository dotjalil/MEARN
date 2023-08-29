const express = require("express");
const Router = express.Router();
const { getAllUsers, getOneUser, addNewUser, modifyUser, deleteUser } = require('../controllers/userController')
const { validatorFun } = require('../middlewares/middlewares');
const userValidations = require('../validations/userValidations')





Router.post(userValidations, validatorFun);
// Router.put(["/", "/:id"], userValidations, validatorFun);

Router.get("/", getAllUsers);
Router.get('/:id', getOneUser);
Router.post("/", addNewUser);
Router.put("/:id", modifyUser);
Router.delete("/:id", deleteUser);


module.exports = Router;