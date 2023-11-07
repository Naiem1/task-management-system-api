require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/db/db');
const routes = require('./src/routes');
const {
  registerController,
  signupController,
  loginController,
} = require('./src/controllers/auth');
const error = require('./src/utils/error');
const User = require('./src/models/User');
const bcrypt = require('bcryptjs');

const app = express();

// app.use(cors());
app.use(express.json());
// app.use(routes);

app.post('/api/v1/auth/register', registerController);
app.post('/api/v1/auth/login', loginController);

app.use((error, _req, res, _next) => {
  // console.log('global-error>>', error);
  const message = error.message ? error.message : 'Server Error Occurred';
  const status = error.status ? error.status : 500;
  // console.log('global>>---------------', error);

  res.status(status).json({
    message,
  });
});

const PORT = process.env.PORT || 7000;

(async () => {
  try {
    await connectDB('mongodb://localhost:27017/task-db');
    console.log('database connected🎈');
    app.listen(PORT, () => {
      console.log('Server is running on Port', PORT);
    });
  } catch (err) {
    console.log(err);
  }
})();
