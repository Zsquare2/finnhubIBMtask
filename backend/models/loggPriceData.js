const mongoose = require("mongoose");
const config = require("../utils/config");

const loggPriceDataSchema = new mongoose.Schema({
  ticker: String,
  from_date: String,
  end_date: String,
  price_data: Object,
  date: {
    type: Date,
    required: true,
  },
});

loggPriceDataSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("LoggPriceData", loggPriceDataSchema);
