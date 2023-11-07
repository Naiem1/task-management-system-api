const { registerService, loginService } = require('../../services/auth');
const User = require('../models/User');
const error = require('../utils/error');
const jwt = require('jsonwebtoken');

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

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'Invalid input' });
  }
  try {
    const access_token = await loginService({ email, password });
    console.log(access_token);

    res.status(200).json({ message: 'Login Successful', access_token });
  } catch (err) {
    next(error);
  }
};

module.exports = {
  registerController,
  loginController,
};
