const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      userCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("DB connected");
  } catch (error) {
    console.log(err.message);
    proccess.exit(1);
  }
};

module.exports = connectDB;
