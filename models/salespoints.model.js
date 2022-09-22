const mongoose = require("mongoose");

const salespointSchema = new mongoose.Schema({
    manager: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    
})

module.exports = mongoose.model("Salespoint", salespointSchema);