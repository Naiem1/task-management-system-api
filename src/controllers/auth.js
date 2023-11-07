const { registerService } = require('../../services/auth');
const User = require('../models/User');
const error = require('../utils/error');

const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: 'Invalid input' });
  }

  try {
    const access_token = await registerService({ name, email, password });
    return res
      .status(201)
      .json({ message: 'User Created Successfully', access_token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registerController,
};
