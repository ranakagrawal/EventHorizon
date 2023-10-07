const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var academicEventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AcademicEvent", academicEventSchema);
