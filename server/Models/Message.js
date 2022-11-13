const mongoose = require("mongoose");
const messageSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },

  Message: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("message", messageSchema);