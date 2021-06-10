const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const uploader = require("../config/cloudinary");

const salt = 10;

router.post("/signin", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((userDocument) => {
      if (!userDocument) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isValidPassword = bcrypt.compareSync(
        password,
        userDocument.password
      );
      if (!isValidPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      req.session.currentUser = userDocument._id;
      res.redirect("/api/auth/isLoggedIn");
    })
    .catch(next);
});

router.post("/signup", uploader.single("profileImg"), (req, res, next) => {

  const updateValues = { ...req.body };

  console.log(req.file)

  if (req.file) {
    updateValues.profileImg = req.file.path;
  } else {
    updateValues.profileImg = "https://img-premium.flaticon.com/png/512/194/194938.png?token=exp=1623329062~hmac=9f4b786573476dbf3dfcd7bc960b7b44"
  }

  console.log(updateValues);
  
  const { email, password, firstName, lastName, phoneNumber, description } = req.body;

  
  User.findOne({ email })
    .then((userDocument) => {
      if (userDocument) {
        return res.status(400).json({ message: "Email already taken" });
      }
      
      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = { email, lastName, firstName, phoneNumber, description, profileImg: updateValues.profileImg, password: hashedPassword };
      

      User.create(newUser)
        .then((newUserDocument) => {
          /* Login on signup */
          req.session.currentUser = newUserDocument._id;
          res.redirect("/api/auth/isLoggedIn");
        })
        .catch(next);
    })
    .catch(next);
});


router.get("/isLoggedIn", (req, res, next) => {
  if (!req.session.currentUser)
    return res.status(401).json({ message: "Unauthorized" });

  const id = req.session.currentUser;

  User.findById(id)
    .select("-password")
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch(next);
});

router.get("/logout", (req, res, next) => {
  req.session.destroy(function (error) {
    if (error) next(error);
    else res.status(200).json({ message: "Succesfully disconnected." });
  });
});

module.exports = router;
