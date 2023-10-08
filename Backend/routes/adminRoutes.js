const express = require("express");
const router = express.Router();
const multer = require("multer");


const adminController = require("../controllers/admin");




router.post("/addacadevent", adminController.createAcademicEvent)

module.exports = router;
