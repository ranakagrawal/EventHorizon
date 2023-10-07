const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const folderName = `assets/venueImages/${req.body.name}`;
//     cb(null, folderName);
//   },
//   filename: function (req, file, cb) {
//     const uniqueFileName = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueFileName + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage: storage,
//   fileFilter: function (req, file, cb) {
//     var ext = path.extname(file.originalname);
//     if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
//       return cb(
//         res
//           .status(404)
//           .json({ message: "Only .png, .jpg or .jpeg formats are supported" })
//       );
//     }
//     cb(null, true);
//   },
//   limits: {
//     //fileSize: 1024 * 1024
//   },
// });


router.post("/addacadevent", adminController.createAcademicEvent)

module.exports = router;
