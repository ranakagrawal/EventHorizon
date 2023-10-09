const User = require("../models/user");
const bcrypt = require("bcryptjs");

//POST route to change password where userId, currentPassword, newPassword are provided in req body
exports.changePassword = async (req, res, next) => {
    const { userId, currentPassword, newPassword } = req.body;
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const isPasswordMatch = await bcrypt.compare(currentPassword, user.password);
  
      if (!isPasswordMatch) {
        return res.status(401).json({ error: "Current password is incorrect" });
      }
      //Hashing
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      user.password = hashedPassword;
      await user.save();
  
      return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      console.error("Error changing password:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
};