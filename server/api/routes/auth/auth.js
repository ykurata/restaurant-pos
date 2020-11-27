const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function authentication(req, res, next) {
  try {
    const token = req.header('authorization').split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token is no found" });
    }
    console.log(token);
    jwt.verify(token, process.env.SECRET_KEY, function (err, decode) {
      if (err) {
        console.log(err);
        return res.status(401).json({ error: "Invalid Token" });
      }
      req.user = decode.id;
      next();
    });
  } catch (err) {
    res.status(401).json({ error: "You need to log in!" });
  }
}