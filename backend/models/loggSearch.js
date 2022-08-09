const mongoose = require("mongoose");
const config = require("../utils/config");

const loggSearchSchema = new mongoose.Schema({
  searched_for: String,
  date: {
    type: Date,
    required: true,
  },
});

loggSearchSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("LoggSearch", loggSearchSchema);
