const User = require("../models/user");
const bcrypt = require("bcryptjs");


exports.userLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email })
        .then((result) => {
        if (!result) {
            res.status(404).json({ message: "No such user found!" });
        } else {
            bcrypt
            .compare(password, result.password)
            .then((isEqual) => {
                if (!isEqual) {
                res.status(404).json({ message: "Invalid password or email!" });
                } else {
                res.status(200).json({ message: "Login successful!" });
                }
            })
            .catch((err) => {
                console.log(err);
            });
        }
        })
        .catch((err) => {
        console.log(err);
        });
};