const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const Login = async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (!user) {
      res.status(400).send({ status: "not ok", msg: "user not found" });
    }
    const { _id, username, password } = user;
    const token = jwt.sign({ _id, username, password }, process.env.SECRET_KEY);
    res.status(200).send({ status: "ok", token });
  } catch (error) {
    console.log(error);
  }
};

const Register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    if (!user) {
      res.status(400).send({ status: "not ok", msg: "user not created" });
    }
    res.status(200).send({ status: "ok", msg: "user created" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Register, Login };
