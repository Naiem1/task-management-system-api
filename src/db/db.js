const mongoose = require('mongoose');

/**
 * database connection string
 * @param {String} connectionStr 
 * @returns 
 */
function connectDB(connectionStr) {
  return mongoose.connect(connectionStr);
}

module.exports = connectDB;
