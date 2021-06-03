const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  name: String,
  description: String,
  category: {
    type: String,
    required: true,
    enum: ["Venue", "Food & Beverage", "Music", "Entertainment", "Decorations & Favors", "Furniture", "Costumes"],
  },
  vendorId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  images: [String],
  durationHrs: Number,
  price: Number,
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;

// Areas served (specific radius (km) from location? (map drawing API), Array of zip codes (Query for all services within certain distance and only show those ones)?)
