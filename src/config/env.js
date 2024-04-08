require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || "8080",
  APP_HOST: process.env.APP_HOST,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URI_TEST: process.env.MONGO_URI_TEST,
};
