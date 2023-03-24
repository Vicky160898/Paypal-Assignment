require("dotenv").config();
const jwt = require("jsonwebtoken");
const isAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    const verification = jwt.verify(token, process.env.JWT_KEY);
    try {
      if (verification) {
        req._id = verification.id;
        next();
      } else {
        res.send("operation not allowed");
      }
    } catch (e) {
      return res.send(e.message);
    }
  } else {
    return res.send("No Token");
  }
};

module.exports = isAuth;
