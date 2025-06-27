const {configDotenv} = require('dotenv');

configDotenv();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/Classwork_Users";

module.exports = {PORT, MONGODB_URI};