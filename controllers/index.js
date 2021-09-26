const router = require("express").Router();

const homeRoutes = require("./view/home");
const authRoutes = require("./view/auth");
const dashboardRoutes = require("./view/dashboard");
const blogRoutes = require("./view/blog");

router.use("/", homeRoutes);
router.use("/", authRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/blogs", blogRoutes);

module.exports = router;