const AcademicEvent = require("../models/academicEvent");

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
  
// GET route for fetching acad events happening on selected date
exports.getAcademicEventsOnCurrDate = async (req, res) => {
    try {
      const targetDate = new Date(req.params.date); // Get target date from request param
      if (isNaN(targetDate.getTime())) {
        return res.status(400).json({ error: "Invalid date format" });
      }
  
      const academicEvents = await AcademicEvent.find({
        startDate: { $lte: targetDate },
        endDate: { $gte: targetDate },
      });
  
      res.status(200).json({ academicEvents });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching academic events" });
    }
};
  
// GET route for fetching acad events happening on or after selected date
exports.getAcademicEventsAfterDate = async (req, res) => {
    try {
      const targetDate = new Date(req.params.date); // Get target date from request param
      if (isNaN(targetDate.getTime())) {
        return res.status(400).json({ error: "Invalid date format" });
      }
  
      const academicEvents = await AcademicEvent.find({
        endDate: { $gte: targetDate },
      });
  
      res.status(200).json({ academicEvents });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching academic events" });
    }
};