const express = require("express");
const router = express.Router();
const quotesController = require("../controllers/quotes");

router.get("/", quotesController.index);

module.exports = router;
