const userModel = require("../models/user");
const bcrypt = require('bcryptjs');
const jws = require('jsonwebtoken');
const config = process.env;

const handleRegister = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    // console.log(first_name, last_name, email, password);
    //make sure all fields are entered
    if (!(email && password && first_name && last_name)) res.status(400).send('All fields are required to complete');


    // check if he already registerd before
    const existingUser = await userModel.findOne({ email });
    if (existingUser) res.status(400).send('You Already registered before');

    //encrypt the password
    const encryptedPassword = await bcrypt.hash(password, 10);
    // console.log(encryptedPassword);
    const newUser = await userModel.create({
      first_name,
      last_name,
      email,
      password: encryptedPassword
    })

    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
}


const handleLogin = async (req, res) => {
  try {


    const { email, password } = req.body;
    //check if user enter all fields
    if (!(email && password)) res.status(400).send("Please enter your email & password");

    //get the user data from db
    const user = await userModel.findOne({ email });
    //check if the password is correct

    const comparePassword = await bcrypt.compare(password, user.password);
    console.log(comparePassword);
    if (user && comparePassword) {
      const token = jws.sign(
        {
          user_id: user.id,
          email
        },
        config.TOKEN_KEY,
        {
          expiresIn: "2h"
        }
      )
      //save user token
      user.token = token;
      return res.status(200).json({ user, token });
    }
    res.status(400).send(`Please enter correct data`)
  } catch (error) {
    console.log(error);
  }
}


module.exports = { handleRegister, handleLogin };