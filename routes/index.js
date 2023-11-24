console.log("reached index.js");
const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");
router.get("/", homeController.homeView);
router.use("/pages", require("./pages"));
module.exports = router;
