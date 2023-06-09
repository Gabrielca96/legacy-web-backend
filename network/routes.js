const express = require("express");
const router = express.Router();
const contactController = require('../components/email/controller');

router.post("/", contactController.create);

module.exports = router;
