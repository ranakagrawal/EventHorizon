const Venue = require("../models/venue");


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

// GET route for checking if venue is available for a particular date or not
// It uses venueId, date in request body
exports.checkVenueAvailability = async (req, res, next) => {
    try {
      const { venueId, date } = req.body;
  
      const requestedDate = new Date(date);
      if (isNaN(requestedDate.getTime())) {
      return res.status(400).json({ message: "Invalid date format" });
      }

      const venue = await Venue.findById(venueId);
      if (!venue) {
      return res.status(404).json({ message: "Venue not found" });
      }
      
      if(venue.bookedOn.includes(requestedDate.toISOString())){
        return res.status(200).json({ available: false, message: "Venue is not available on this date"})
      }
  
      res.status(200).json({ available: true, message: "Venue is available on this date" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
};

// GET route for getting all of the dates on which a venue is booked using venueId in req param
exports.getBookedDates = async (req, res) => {
    try {
      const { venueId } = req.params; // Get venueId from req param
  
      const venue = await Venue.findById(venueId);
      if (!venue) {
        return res.status(404).json({ message: "Venue not found" });
      }

      const today = new Date();
      today.setHours(0, 0, 0, 0);
  
      // Filter and sort booked dates greater than or equal to today
      const bookedDates = venue.bookedOn
        .filter((date) => new Date(date) >= today)
        .sort((a, b) => new Date(a) - new Date(b));
  
      return res.status(200).json({ bookedDates });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
};