const express = require("express");
const router = express.Router();
const multer = require("multer");

const multerFunctions = require("../middleware/multer");
router.post("/createuser", adminController.createUser);