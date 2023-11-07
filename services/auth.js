const User = require('../src/models/User');
const bcrypt = require('bcryptjs');
const error = require('../src/utils/error');

const registerService = async ({ name, email, password }) => {
  const user = await User.findOne({ email });
  if (user) throw Error('User Already exist', 400);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  let newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  
  return newUser.save()
};


module.exports = {
  registerService,
};
