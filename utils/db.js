const {connect} = require('mongoose');
const {MONGODB_URI} = require('./secret.js');

const connectDB = async () => {
  try {
    const conn = await connect(MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;