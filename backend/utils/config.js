require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;
const FINHUB_KEY = process.env.FINHUB_KEY;

module.exports = {
  MONGODB_URI,
  PORT,
  FINHUB_KEY,
};
