const { Router } = require("express");
const { getHealth } = require("../controllers/health.controller");

const router = Router();
router.get("/check", getHealth);
module.exports = router;