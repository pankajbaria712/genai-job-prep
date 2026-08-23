const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true, "Username already exits"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exits"],
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
