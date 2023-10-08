const User = require("../models/user");
const Event = require("../models/event");
const Club = require("../models/club");
const Venue = require("../models/venue");
const AcademicEvent = require("../models/academicEvent");

exports.createVenue = async (req, res, next) => {
  try {
    const { name, description, capacity, } = req.body;

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


//       Academic Event CRUD

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

        res.status(201).json({ message: 'Academic event created successfully by Admin'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the academic event' });
    }
};

exports.editAcademicEvent = async (req, res) => {
    try {
      const academicEventId = req.params.id; // Get acad event ID from request param
      const { name, startDate, endDate, targetedDept } = req.body;
  
      const targetedDeptArray = targetedDept.split(',');
  
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
        return res.status(404).json({ error: 'Academic event not found' });
      }
  
      res.status(200).json({ message: 'Academic event updated successfully', academicEvent: updatedAcademicEvent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating the academic event' });
    }
};


