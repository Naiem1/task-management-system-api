require('dotenv').config()
const express = require('express');
const connectDB = require('./src/db/db');

const app = express();




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
