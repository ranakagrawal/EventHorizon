const User = require("../models/user");
const Club = require("../models/club");
const Venue = require("../models/venue");
const AcademicEvent = require("../models/academicEvent");
const Event = require("../models/event");
const bcrypt = require("bcryptjs");
const xlsx = require("xlsx");
const fs = require("fs");
// import fetch from "node-fetch";
const fetch = require("node-fetch-commonjs");

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

    const response = await fetch(
      `http://api.qrserver.com/v1/create-qr-code/?data=${userId}`
    );
    if (!response.arrayBuffer) {
      await User.findByIdAndDelete(userId);
      return res.status(400).json({ message: "failed to create user" });
    }
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const outputFileName = `${userId}.png`;
    fs.createWriteStream(`./assets/qrImages/${outputFileName}`).write(
      buffer,
      async function (err, writtenbytes) {
        if (err) {
            await User.findByIdAndDelete(userId);
            console.log("Cant write to file");
            return res.status(400).json({ message: "failed to create user",err });
        } else {
          console.log("QR created and added to file");
        }
      }
    );

    res.status(201).json({ message: "new user created", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating user" });
  }
};
