const argon2 = require("argon2");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const SingupUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  const hash = await argon2.hash(password);
  try {
    if (user) {
      res.status(400).send("User Already Exist");
    }
    const finduser = await User.create({ name, email, password: hash });
    res.status(201).send(finduser);
  } catch (e) {
    return res.status(400).json({ message: "Failed to Singup User" });
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  try {
    if (user && (await argon2.verify(user.password, password))) {
      return res.status(201).send({
        _id: user._id,
        email: user.email,
        token: generateToken(user._id),
      });
    }
    return res.status(401).send("user Does Not Exite");
  } catch (e) {
    return res.status(400).json({ message: "Failed to Login User" });
  }
};
module.exports = { SingupUser, LoginUser };
