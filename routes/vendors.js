const express = require("express");
const router = express.Router();
const User = require("../models/User");


// Get one vendor
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((userDocument) => {
      return res.status(200).json(userDocument);
    })
    .catch(next);
});

module.exports = router