const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  blogName: {
    type: String,
    required: true,
  },
  blogText: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("blogs", BlogSchema);
