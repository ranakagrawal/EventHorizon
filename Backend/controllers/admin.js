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
