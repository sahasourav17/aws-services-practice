// logger.js
const bunyan = require("bunyan");

const logger = bunyan.createLogger({
  name: "aws-practice",
  level: "info",
});

module.exports = logger;
