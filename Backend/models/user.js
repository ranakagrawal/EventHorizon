const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match:
        /[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      max: 64,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "student", "faculty"],
    },
    registrations: [{ type: Schema.ObjectId, ref: "Event" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
