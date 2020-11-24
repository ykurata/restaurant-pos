const User = require('../models').User;

module.exports = {
  async create(req, res) {
    try {
      const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }
      const newUser = await User.create(user);
      return res.status(200).json(newUser);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}