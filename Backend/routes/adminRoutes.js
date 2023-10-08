const express = require("express");
const router = express.Router();
const multer = require("multer");

const multerFunctions = require("../middleware/multer");

const uploadVenueImages = multer({ storage: multerFunctions.venueImageStorage, fileFilter: multerFunctions.imageFileFilter }).single("image")

const adminController = require("../controllers/admin");
///////////////////////////////////////////
//////// **Academic Event CRUD** //////////
///////////////////////////////////////////
// POST route for creating acad event 
router.post("/addacadevent", adminController.createAcademicEvent);

// POST route for editing acad event by ID
router.post("/editacadevent/:id", adminController.editAcademicEvent);

// DELETE route for deleting acad event by ID
router.delete("/deleteacadevent/:id", adminController.deleteAcademicEvent)

// GET route for fetching acad events using ID
router.get("/getacadevent/:id", adminController.getAcademicEventById)

// GET route for getting all of the academic events
router.get("/getallacadevent", adminController.getAllAcademicEvent)


///////////////////////////////////////////
//////// **VENUE CRUD** ///////////////////
///////////////////////////////////////////
// POST route for creating venue 
router.post("/addvenue",uploadVenueImages, adminController.createVenue);

// POST route for editing venue by ID
router.post("/editvenue/:id", adminController.editVenue);

// DELETE route for deleting venue by ID
router.delete("/deletevenue/:id", adminController.deleteVenue)

// GET route for fetching acad events using ID
router.get("/getvenue/:id", adminController.getVenueById)

// GET route for getting all of the academic events
router.get("/getallvenue", adminController.getAllVenue)

module.exports = router;
