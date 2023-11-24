const express = require("express");
const router = express.Router();
const pageController = require("../controller/pageController");

router.get("/bali", pageController.baliView);

module.exports = router;
