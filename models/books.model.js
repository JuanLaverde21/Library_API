const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    IBEN: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      require: true
    }
})

module.exports = mongoose.model("Book", bookSchema);