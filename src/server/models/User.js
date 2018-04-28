const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  title: { type: String, default: null },
  gender: { type: String, default: null },
  age: { type: Number, default: null }
});

let User = mongoose.model("User", userSchema);

module.exports = User;