const Event = require("../models/event");
const User = require("../models/user");
const Club = require("../models/club");
const Venue = require("../models/venue");

// POST route to create an event 
exports.createEvent = async (req, res, next) => {
    try {
        const { name, description, targetedDept, venueId, clubId, facultyId, registrationDeadline, startDate, endDate } = req.body;
        
        // req.files.map((file) => {
        //   venueImages.push(file.path.split("\\").join("/"));
        // });

        const logoImage= req.files["logo"][0].path.split("\\").join("/");
        const bannerImage=req.files["banner"][0].path.split("\\").join("/");

        venueImages.push(logoPath,bannerPath);

        const targetedDeptArray = targetedDept.split(",");
    
        const newEvent = new Event({
          name: name,
          description: description,
          targetedDept: targetedDeptArray,
          banner: bannerImage,
          logo: logoImage,
          venueId: venueId,
          clubId: clubId,
          facultyId: facultyId,
          registrationDeadline: registrationDeadline,
          startDate: startDate,
          endDate: endDate,
          status: "requested",
        });
    
        await newEvent.save();
    
        res
          .status(201)
          .json({ message: "Event created successfully", event: newEvent });
    } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ error: "An error occurred while creating Event" });
    }
};