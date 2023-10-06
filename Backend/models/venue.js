const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var venueSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bookedOn: [{ type: Date }],
    venueImages: [{ type: String }],
    description: {
      type: String,
      trim: true,
    },
    capacity: {
      type: Number,
    },
    hostedEvents: [{ type: Schema.ObjectId, ref: "Event" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Venue", venueSchema);
