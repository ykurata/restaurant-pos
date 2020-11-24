const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require('../models').User;

// Import validators 
const validateRegisterInput = require("../validations/register");
const validateLoginInput = require("../validations/login");

module.exports = {
  async register(req, res) {
    // form validation 
    const { errors, isValid } = validateRegisterInput(req.body);
    // check validation 
    if (!isValid) {
      return res.status(400).json(errors);
    }
    try {
      const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }
      const newUser = await User.create(user);
      const payload = {
        id: newUser.id,
        name: newUser.username
      }
      // Create a token  
      const token = await jwt.sign(payload, keys.secretOrKey, { expiresIn: 31556926 });
      if (token) {
        res.json({ success: true, token: token });
      } else {
        res.status(400).json({ error: "Sign up failed" });
      }
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async login(req, res) {
    // form validation 
    const { errors, isValid } = validateLoginInput(req.body);
    // check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) {
        return res.status(400).json({ error: "Email not found" });
      }

      // Compare user's registerd password and user's typed password
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) {
        return res.status(400).json({ error: "Password is incorrect" });
      }

      // Create jwt payload 
      const payload = {
        id: user.id,
        name: user.username
      };

      // Create a token  
      const token = await jwt.sign(payload, keys.secretOrKey, { expiresIn: 31556926 });
      if (token) {
        res.json({ success: true, token: token });
      } else {
        res.status(400).json({ error: "Login failed" });
      }
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async getAll(req, res) {
    try {
      const users = await User.findAll({});
      return res.status(200).json(users);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}