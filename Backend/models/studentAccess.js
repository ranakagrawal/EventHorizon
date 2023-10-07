const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var accessSchema = new Schema(
  {
    studentId: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
    },
    facultyId: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
    },
    eventId: {
      type: Schema.ObjectId,
      ref: "Event",
      required: true,
    },
    editable: {
      type: Boolean,
    }, //access token
  },
  { timestamps: true }
);

module.exports = mongoose.model("StudentAccess", accessSchema);
