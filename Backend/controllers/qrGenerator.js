const User = require("../models/user");
const Club = require("../models/club");
const Venue = require("../models/venue");
const AcademicEvent = require("../models/academicEvent");
const Event = require("../models/event");
const bcrypt = require("bcryptjs");
const xlsx = require("xlsx");
import fs from "fs";
import fetch from "node-fetch";
import FileType from "file-type";

exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password, department, enrollmentNo, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    if (role === "admin") {
      return res.status(403).json({ message: "admin cannot be created!!" });
    }
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(403).json({ message: "user already exists!!" });
    }
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      department,
      enrollmentNo,
      role,
    });

    await newUser.save();

    const userId = newUser._id;

    const response = await fetch(`http(s)://api.qrserver.com/v1/create-qr-code/?data=${userId}`);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileType = await FileType.fromBuffer(buffer);
    if (fileType.ext) {
      const outputFileName = `${userId}.${fileType.ext}`;
      fs.createWriteStream(`../assets/qrImages/${outputFileName}`).write(buffer);
    } else {
      console.log(
        "File type could not be reliably determined! The binary data may be malformed! No file saved!"
      );
    }

    res.status(201).json({ message: "new user created", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating user" });
  }
};
