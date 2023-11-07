const User = require('../src/models/User');
const bcrypt = require('bcryptjs');
const error = require('../src/utils/error');
const jwt = require('jsonwebtoken');

const registerService = async ({ name, email, password }) => {
  let user = await User.findOne({ email });
  if (user) throw Error('User Already exist', 400);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  user = new User({
    name,
    email,
    password: hashedPassword,
  });

  const newUser = user.save();
  const payload = {
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
  };

  return jwt.sign(payload, process.env.SECRET_KEY);
};

const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw Error('Invalid Credential', 400);

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) throw error('Invalid Credential', 400);

  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: '2h',
  });
  return token;
};

module.exports = {
  registerService,
  loginService,
};
