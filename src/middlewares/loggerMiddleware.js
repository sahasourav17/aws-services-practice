const logger = require("../config/logger");

const logRequest = (req, res, next) => {
  logger.info(
    { method: req.method, url: req.url, body: req.body },
    "Request received"
  );
  next();
};

const logResponse = (req, res, next) => {
  const originalSend = res.send;
  res.send = function (body) {
    logger.info({ status: res.statusCode, body }, "Response sent");
    originalSend.call(this, body);
  };
  next();
};

module.exports = { logRequest, logResponse };
