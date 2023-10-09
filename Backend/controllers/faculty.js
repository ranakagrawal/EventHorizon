const User = require("../models/user");
const Event = require("../models/event");
const Club = require("../models/club");
const Venue = require("../models/venue");
const StudentAccess = require("../models/studentAccess");

// provide student access
// get students who have access
// edit access
// club i am part of
// events organized by my club

exports.createStudentAccess = async (req, res, next) => {
  try {
    const { studentEmail, facultyId, eventId } = req.body;
    const student = await User.findOne({ email: studentEmail });
    if (!student) {
      return res
        .status(403)
        .json({ message: "No student with this email found!" });
    }
    if (student.role !== "student") {
      return res
        .status(403)
        .json({ message: "Please enter a valid student email" });
    }
    const newStudentAccess = await new StudentAccess({
      studentId: student._id,
      facultyId,
      eventId,
      editable: true,
    });

    await newStudentAccess.save();

    res.status(200).json({
      message: `New Student Access created for ${student.name}`,
      newStudentAccess,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error!" });
  }
};

exports.getStudentAccess = async (req, res, next) => {
  try {
    const { eventId } = req.body;
    const studentAccess = await StudentAccess.find({ eventId: eventId });
    if (studentAccess.length === 0) {
      return res
        .status(203)
        .json({ message: "Event does not have any student access" });
    }

    res.status(200).json({
      studentAccess,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error!" });
  }
};

exports.editStudentAccess = async (req, res, next) => {
  try {
    const { studentAccessId } = req.body;
    const studentAcc = await StudentAccess.findById(studentAccessId);
    if (!studentAcc) {
      return res
        .status(403)
        .json({ message: "No student access with the Id found" });
    }

    studentAcc.editable = !studentAcc.editable;

    await studentAcc.save();

    res.status(200).json({
      message: `Student Access updated`,
      studentAcc,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error!" });
  }
};

exports.getFacultyClubs = async (req, res, next) => {
    try {
      const {facultyId} = req.body;
      const clubs = await Club.find({ facultyId: studentEmail });
      if (!student) {
        return res
          .status(403)
          .json({ message: "No student with this email found!" });
      }
      if (student.role !== "student") {
        return res
          .status(403)
          .json({ message: "Please enter a valid student email" });
      }
      const newStudentAccess = await new StudentAccess({
        studentId: student._id,
        facultyId,
        eventId,
        editable: true,
      });
  
      await newStudentAccess.save();
  
      res.status(200).json({
        message: `New Student Access created for ${student.name}`,
        newStudentAccess,
      });
    } catch (err) {
      res.status(500).json({ message: "Server error!" });
    }
};

exports.facultyClub = async (req, res, next) => {
    try {
      const { facultyId } = req.params;
  
      const clubs = await Club.find({ facultyId: facultyId }).populate(
        "organizedEvents"
      );
  
      if (!clubs || clubs.length === 0) {
        return res
          .status(404)
          .json({ message: "No clubs found for the given facultyId" });
      }
  
      res.status(200).json(clubs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  