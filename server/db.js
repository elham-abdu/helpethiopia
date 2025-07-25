require("dotenv").config();
const mongoose = require("mongoose");
const name = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const url = `mongodb+srv://${username}:${password}@cluster0.gjyi7cc.mongodb.net/?retryWrites=true&w=majority&appName=${name}`;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("database connected successfully");
  } catch (error) {
    console.error("database connection failed", error);
  }
};

module.exports = connectDB;
