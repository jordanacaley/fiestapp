const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  date: Date,
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
  },
  formattedAddress: String,
  services: [{ type: Schema.Types.ObjectId, ref: "Service" }],
  totalCost: Number,
  buyer: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
