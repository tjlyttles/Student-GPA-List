const router = require("./node_modules/express").Router();
const studentRoute = require("./students");

// Book routes
router.use("/students", studentRoute);

module.exports = router;