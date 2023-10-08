const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    try {
      const user = await User.findOne({ email: email });
  
      if (!user) {
        const error = new Error("No user with this email found!");
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      const isEqual = await bcrypt.compare(password, user.password);
  
      if (!isEqual) {
        const error = new Error("Wrong password!");
        error.statusCode(401);
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString(),
        },
        "somesecretstring",
        { expiresIn: "1h" }
      );
      res.status(200).json({ token: token, userId: loadedUser._id.toString() });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };