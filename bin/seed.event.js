const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");

const Event = require("../models/Event");

// date: Date,
//   location: {
//     type: {
//       type: String,
//       enum: ["Point"],
//     },
//     coordinates: {
//       type: [Number],
//     },
//   },
//   formattedAddress: String,
//   services: [{ type: Schema.Types.ObjectId, ref: "Service" }],
//   totalCost: Number,
//   buyer: [{ type: Schema.Types.ObjectId, ref: "User" }],

const events = [
  {
    date: 2021-06-12,
    location: {
      coordinates: [17.976122, -92.925110],
    },
    formattedAddress: "10 calle Aguila, Villahermosa, Tabasco"
  },
];

async function seedEvents() {
  try {
    await Event.collection
      .drop()
      .catch((error) => console.log("No collection to drop, proceeding..."));

    const createdEvents = await Event.create(events);
    console.log(createdEvents);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

seedEvents();