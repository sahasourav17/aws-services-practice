const express = require("express");
const router = express.Router();
const healthRoute = require("./health.route");
const awsRoute = require("./aws.route");
const defaultRoutes = [
  {
    path: "/health",
    route: healthRoute,
  },
  {
    path: "/aws",
    route: awsRoute,
  },
];
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
