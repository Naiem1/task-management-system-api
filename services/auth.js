const User = require('../src/models/User');
const bcrypt = require('bcryptjs');

const registerService = async ({ name, email, password }) => {
  let user = await User.find({ email });
  if (user) throw Error('User Already exist', 400);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  user = new User({
    name,
    email,
    password: hashedPassword,
  });
  return user.save()
};


module.exports = {
  registerService,
};
