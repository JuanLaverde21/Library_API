const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    Identificationcard: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    Cellphone: {
      type: Number,
      require: true
    }
})

module.exports = mongoose.model("Buyer", buyerSchema);