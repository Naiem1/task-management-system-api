const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      minLength: [3, 'Invalid Name'],
    },
    email: {
      type: String,
      require: true,
      validate: {
        validator: (v) => {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
            v
          );
        },
        message: (prop) => {
          return `Invalid Email ${prop.value}`;
        },
      },
    },
    password: {
      type: String,
      require: true,
      minLength: [6, 'Password is too short'],
    },
  },
  { timestamps: true }
);

const User = model('User', userSchema);

module.exports = User;
