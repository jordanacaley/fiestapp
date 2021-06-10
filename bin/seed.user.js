const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const bcrypt = require("bcrypt");

const User = require("../models/User");

const salt = 10;

const users = [
  {
    email: "demo@demo.com",
    profileImg: "https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    password: bcrypt.hashSync("1234", salt),
    firstName: "Lola",
    lastName: "Lopez",
    phoneNumber: "123-456-7890",
    description: "I love planning parties for my family and friends! I've been baking cakes for all my personal events for years and recently decided to offer my services to others who want to make their loved ones' day special!",
    stripeId: "12345"
  },
  {
    email: "bob@bob.com",
    profileImg: "https://images.unsplash.com/photo-1587331722574-acf78f587c4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    password: bcrypt.hashSync("1234", salt),
    firstName: "Bob",
    lastName: "Payaso",
    phoneNumber: "234-567-8901",
    description: "I am a passionte entertainer dedicated to bringing a smile to your face! Just the clown you need for your next kid's birthday party.",
    stripeId: "23456"
  },
  {
    email: "jerry@jerry.com",
    profileImg: "https://images.unsplash.com/photo-1600473763749-5e4212ea0e69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    password: bcrypt.hashSync("1234", salt),
    firstName: "Jerry",
    lastName: "Jimenez",
    phoneNumber: "345-678-9012",
    description: "I'm from a family of taqueros who knows how to party!",
    stripeId: "34567"
  },
  {
    email: "ana@ana.com",
    profileImg: "https://images.unsplash.com/photo-1517170892483-6c610b295c4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    password: bcrypt.hashSync("1234", salt),
    firstName: "Ana",
    lastName: "Alcatraz",
    phoneNumber: "456-789-0123",
    description: "I'm a passionate singer who loves performing with my group.",
    stripeId: "45678"
  },
  {
    email: "lupita@lupita.com",
    profileImg: "https://images.pexels.com/photos/1689716/pexels-photo-1689716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    password: bcrypt.hashSync("1234", salt),
    firstName: "Lupita",
    lastName: "Lopez",
    phoneNumber: "567-890-1234",
    description: "I am proud to offer an amazing venue for your next party! I also rent furniture if you want to host at home!",
    stripeId: "56780"
  },
  {
    email: "sally@sally.com",
    profileImg: "https://images.pexels.com/photos/1996887/pexels-photo-1996887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: bcrypt.hashSync("1234", salt),
    firstName: "Sally",
    lastName: "Salon",
    phoneNumber: "678-901-2345",
    description: "I love helping others share a memorable moment with their loved ones!",
    stripeId: "67801"
  },
  {
    email: "miguel@miguel.com",
    profileImg: "https://images.unsplash.com/photo-1593706147995-e3afb251086a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=628&q=80",
    password: bcrypt.hashSync("1234", salt),
    firstName: "Miguel",
    lastName: "Mariachi",
    phoneNumber: "789-012-3456",
    description: "Music is everything!",
    stripeId: "78012"
  },
  {
    email: "jv@jv.com",
    profileImg: "https://images.pexels.com/photos/1959698/pexels-photo-1959698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: bcrypt.hashSync("1234", salt),
    firstName: "Jonny",
    lastName: "V",
    phoneNumber: "890-123-4567",
    description: "Dedicated to providing family fun for all ages!",
    stripeId: "80123"
  },
  {
    email: "carla@carla.com",
    profileImg: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: bcrypt.hashSync("1234", salt),
    firstName: "Carla",
    lastName: "Chenkay",
    phoneNumber: "901-234-5678",
    description: "I make handmade piñatas and also have a furniture rental business. Good vibes only!",
    stripeId: "90123"
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
