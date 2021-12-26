const mongoose = require("mongoose");

module.exports = () => {
  const connection_url = process.env.MONGO_URI;
  mongoose
    .connect(connection_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log("Connection error", err);
    });
};
