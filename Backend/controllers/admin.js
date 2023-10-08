const User = require("../models/user");
const Event = require("../models/event");
const Club = require("../models/club");
const Venue = require("../models/venue");
const AcademicEvent = require("../models/academicEvent");
const xlsx = require('xlsx');

// POST route for creating venue
exports.createVenue = async (req, res, next) => {
  try {
    const { name, description, capacity } = req.body;
    const venueImages = req.file.path.replace("\\", "/");

    const newVenue = new Venue({
      name,
      venueImages,
      description,
      capacity,
    });

    await newVenue.save();

    res
      .status(201)
      .json({ message: "Venue created successfully", venue: newVenue });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the venue" });
  }
};

// POST route for editing venue by ID
exports.editVenue = async (req, res, next) => {
  try {
    const venueId = req.params.id;
    const { name, description, capacity } = req.body;
    const venueImages = req.file.path.replace("\\", "/");

    const updatedVenue = await Venue.findByIdAndUpdate(
      venueId,
      {
        name,
        description,
        capacity,
        venueImages,
      },
      { new: true }
    );

    if (!updatedVenue) {
      return res.status(404).json({ error: "Venue event not found" });
    }

    res.status(200).json({
      message: "Venue updated successfully",
      venue: updatedVenue,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the venue" });
  }
};

// DELETE route for deleting venue by ID
exports.deleteVenue = async (req, res, next) => {
  try {
    const venueId = req.params.id; // Get acad event ID from request param

    const deletedVenue = await Venue.findByIdAndDelete(venueId);

    if (!deletedVenue) {
      return res.status(404).json({ error: "Venue event not found" });
    }

    res.status(200).json({ message: "Venue event deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the venue" });
  }
};

// GET route for fetching venue using ID
exports.getVenueById = async (req, res, next) => {
  try {
    const venueId = req.params.id; //get academic event ID from request param

    const venue = await Venue.findById(venueId);

    if (!venue) {
      return res.status(404).json({ error: "Venue not found" });
    }

    res.status(200).json({ venue });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the venue" });
  }
};

// GET route for getting all of the venue
exports.getAllVenue = async (req, res, next) => {
  try {
    const venues = await Venue.find();

    res.status(200).json({ venues });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while retrieving all venues",
    });
  }
};

///////////////////////////////////////////
//////// **Academic Event CRUD** //////////
///l//////0///////r///////|)/////////M/////

// POST route for creating acad event
exports.createAcademicEvent = async (req, res, next) => {
  try {
    const { name, startDate, endDate, targetedDept } = req.body;

    const newAcademicEvent = new AcademicEvent({
      name,
      startDate,
      endDate,
      targetedDept,
    });

    await newAcademicEvent.save();

    res
      .status(201)
      .json({ message: "Academic event created successfully by Admin" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the academic event" });
  }
};

// POST route for editing acad event by ID
exports.editAcademicEvent = async (req, res, next) => {
  try {
    const academicEventId = req.params.id; // Get acad event ID from request param
    const { name, startDate, endDate, targetedDept } = req.body;

    const targetedDeptArray = targetedDept.split(",");

    const updatedAcademicEvent = await AcademicEvent.findByIdAndUpdate(
      academicEventId,
      {
        name,
        startDate,
        endDate,
        targetedDept: targetedDeptArray,
      },
      { new: true }
    );

    if (!updatedAcademicEvent) {
      return res.status(404).json({ error: "Academic event not found" });
    }

    res.status(200).json({
      message: "Academic event updated successfully",
      academicEvent: updatedAcademicEvent,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the academic event" });
  }
};

// DELETE route for deleting acad event by ID
exports.deleteAcademicEvent = async (req, res, next) => {
  try {
    const academicEventId = req.params.id; // Get acad event ID from request param

    const deletedAcademicEvent = await AcademicEvent.findByIdAndDelete(
      academicEventId
    );

    if (!deletedAcademicEvent) {
      return res.status(404).json({ error: "Academic event not found" });
    }

    res.status(200).json({ message: "Academic event deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the academic event" });
  }
};

// GET route for fetching acad events using ID
exports.getAcademicEventById = async (req, res, next) => {
  try {
    const academicEventId = req.params.id; //get academic event ID from request param

    const academicEvent = await AcademicEvent.findById(academicEventId);

    if (!academicEvent) {
      return res.status(404).json({ error: "Academic event not found" });
    }

    res.status(200).json({ academicEvent });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the academic event" });
  }
};

// GET route for getting all of the academic events
exports.getAllAcademicEvent = async (req, res, next) => {
  try {
    const academicEvents = await AcademicEvent.find();

    res.status(200).json({ academicEvents });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while retrieving all academic events",
    });
  }
};

///////////////////////////////////////////
////////// ** Creating User ** ////////////
///l//////0///////r///////|)/////////M/////

// Creating multiple Students from excel file with pass 'acro123'
// excel file should have only one worksheet and dept names should be from schema
exports.createStudentsFromExcel = async (req, res, next) => {
    try {
      const file = req.file; 
      if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
  
      const workbook = xlsx.readFile(file.path);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = xlsx.utils.sheet_to_json(worksheet);

      const users = [];

      for(const row of data){
        const newUser = new User({
            name: row.name,
            enrollmentNo: row.enrollmentNo,
            email: row.email,
            department: row.department,
            password: 'acro123',
            role: 'student',
        });
        users.push(newUser);
      }

      await User.insertMany(users);
      return res.status(201).json({ message: 'Users added successfully from excel sheet' });

    } catch (error) {
        console.error('Error creating users from Excel:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Creating multiple Faculty from excel file with pass 'acrofaculty123'
// excel file should have only one worksheet and dept names should be from schema
exports.createFacultyFromExcel = async (req, res, next) => {
    try {
      const file = req.file; 
      if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
  
      const workbook = xlsx.readFile(file.path);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = xlsx.utils.sheet_to_json(worksheet);

      const users = [];

      for(const row of data){
        const newUser = new User({
            name: row.name,
            email: row.email,
            department: row.department,
            password: 'acrofaculty123',
            role: 'faculty',
        });
        users.push(newUser);
      }

      await User.insertMany(users);
      return res.status(201).json({ message: 'Users added successfully from excel sheet' });

    } catch (error) {
        console.error('Error creating users from Excel:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Creating single users 
exports.createUser = async (req, res, next) => {
    try {
      const { name, email, department, enrollmentNo, role } = req.body;
  
      const newUser = new User({
        name,
        email,
        department,
        enrollmentNo,
        role,
      });
  
      await newUser.save();
  
      res
        .status(201)
        .json({ message: "new user created" , user: newUser } );
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the academic event" });
    }
};