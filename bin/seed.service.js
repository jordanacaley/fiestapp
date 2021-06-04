const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");

const Service = require("../models/Service");

const services = [
  {
    name: "Clown",
    description: "Seriously funny entertainment for the whole family!",
    category: "Entertainment",
    images: ["https://images.unsplash.com/photo-1518731795907-78624954cdb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80", "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"],
    durationHrs: 1,
    price: 60,
    location: {
      coordinates: [17.976122, -92.925110],
    },
  },
];

async function seedServices() {
  try {
    await Service.collection
      .drop()
      .catch((error) => console.log("No collection to drop, proceeding..."));

    const createdServices = await Service.create(services);
    console.log(createdServices);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

seedServices();