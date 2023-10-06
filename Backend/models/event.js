const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    banner: {
      type: String,
      trim: true,
    },
    reportFile: {
      type: String,
      trim: true,
    },
    reportImages: [{ type: String }],
    logo: {
      type: String,
    },
    clubId: {
      type: Schema.ObjectId,
      ref: "Club",
    },
    facultyId: {
      type: Schema.ObjectId,
      ref: "User",
    },
    registrationDeadline: {
      type: Date,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      required: true,
      enum: ["requested", "rejected", "upcoming", "completed"],
    },
    registrations: [{ type: Schema.ObjectId, ref: "User" }],
    broadcast: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
