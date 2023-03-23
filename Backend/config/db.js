const mongoose = require("mongoose");

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDb connected");
    return conn;
  } catch (e) {
    console.log("error in mongodb");
    process.exit();
  }
};

module.exports = connect;
