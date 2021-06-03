const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const bcrypt = require("bcrypt");

const User = require("../models/User");

const salt = 10;

const users = [
  {
    email: "test@test.com",
    profileImg: "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    password: bcrypt.hashSync("1234", salt),
    firstName: "Lola",
    lastName: "Lincoln",
    phoneNumber: "06060606606",
    description: "I love planning parties for my friends and family!",
    stripeId: "12345"
  },
  {
    email: "bob@bob.com",
    profileImg: "https://images.unsplash.com/photo-1587331722574-acf78f587c4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    password: bcrypt.hashSync("1234", salt),
    firstName: "Bob",
    lastName: "Payaso",
    phoneNumber: "06060606607",
    description: "I am a passionte entertainer dedicated to bringing a smile to your face! Just the clown you need for your next kid's birthday party.",
    stripeId: "6789"
  },
];

async function seedUsers() {
  try {
    await User.collection
      .drop()
      .catch((error) => console.log("No collection to drop, proceeding..."));

    const createdUsers = await User.create(users);
    console.log(createdUsers);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

seedUsers();
