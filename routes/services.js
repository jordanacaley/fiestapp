const express = require("express");
const router = express.Router();
const Service = require("../models/Service");
//const uploader = require("../config/cloudinary");
//const requireAuth = require("../middlewares/requireAuth"); // Route protection middleware : )

router.get("/", (req, res, next) => {
  Service.find({})
    .populate("vendorId") // Gives us the vendor's object document instead of just the id : )
    .then((serviceDocuments) => {
      res.status(200).json(serviceDocuments);
    })
    .catch(next); // cf app.js error handling middleware
  // same as below
  //.catch(error => next(error))
});

// router.post("/", requireAuth, uploader.single("image"), (req, res, next) => {
//   const updateValues = { ...req.body };

//   if (req.file) {
//     updateValues.image = req.file.path;
//   }

//   updateValues.creator = req.session.currentUser; // Retrieve the authors id from the session.

//   Item.create(updateValues)
//     .then((itemDocument) => {
//       itemDocument
//         .populate("creator")
//         .execPopulate() // Populate on .create() does not work, but we can use populate() on the document once its created !
//         .then((item) => {
//           console.log("here");
//           res.status(201).json(item); // send the populated document.
//         })
//         .catch(next);
//     })
//     .catch(next);
// });

// router.patch(
//   "/:id",
//   requireAuth,
//   uploader.single("image"),
//   (req, res, next) => {
//     const item = { ...req.body };

//     Item.findById(req.params.id)
//       .then((itemDocument) => {
//         if (!itemDocument)
//           return res.status(404).json({ message: "Item not found" });
//         if (itemDocument.creator.toString() !== req.session.currentUser) {
//           return res
//             .status(403)
//             .json({ message: "You are not allowed to update this document" });
//         }

//         if (req.file) {
//           item.image = req.file.secure_url;
//         }

//         Item.findByIdAndUpdate(req.params.id, item, { new: true })
//           .populate("creator")
//           .then((updatedDocument) => {
//             return res.status(200).json(updatedDocument);
//           })
//           .catch(next);
//       })
//       .catch(next);
//   }
// );

// router.delete("/:id", requireAuth, (req, res, next) => {
//   Item.findById(req.params.id)
//     .then((itemDocument) => {
//       if (!itemDocument) {
//         return res.status(404).json({ message: "Item not found" });
//       }
//       if (itemDocument.creator.toString() !== req.session.currentUser) {
//         return res.status(403).json({ message: "You can't delete this item" });
//       }

//       Item.findByIdAndDelete(req.params.id)
//         .then(() => {
//           return res.sendStatus(204);
//         })
//         .catch(next);
//     })
//     .catch(next);
// });

module.exports = router;