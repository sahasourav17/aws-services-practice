const logger = require("../config/logger");

const getHealth = async (req, res) => {
  try {
    logger.info("Health check endpoint accessed.");
    res.status(200).send({ message: "Health is OK." });
  } catch (error) {
    logger.error("Error occurred while checking health:", error);
    res.status(500).send({ message: "Internal server error." });
  }
};

module.exports = {
  getHealth,
};
