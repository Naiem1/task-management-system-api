require('dotenv').config()
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/db/db');
const router = require('./src/routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(router);





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
