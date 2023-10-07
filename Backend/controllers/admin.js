const User = require("../models/user");
const Event = require("../models/event");
const Club = require("../models/club");


exports.addVenue = (req, res, next) => {
    const { name, description, capacity } = req.body;
};