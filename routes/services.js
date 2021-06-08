const express = require("express");
const router = express.Router();
const Service = require("../models/Service");
const User = require("../models/User");
const uploader = require("../config/cloudinary");
const requireAuth = require("../middlewares/requireAuth"); // Route protection middleware : )


// Get all services
router.get("/", (req, res, next) => {
  Service.find({})
    .populate("vendorId") // Gives us the vendor's object document instead of just the id : )
    .then((serviceDocuments) => {
      res.status(200).json(serviceDocuments);
    })
    .catch(next); // cf app.js error handling middleware
});

// Get services by vendorId
router.get("/vendor/:id", (req, res, next) => {
  const vendorId = req.params.id; // We retrieve user id

  // And then get all the services matching the vendorId field that matches the users id
  Service.find({ vendorId: vendorId })
    .then((itemDocuments) => {
      res.status(200).json(itemDocuments);
    })
    .catch(next);
});

// Get services by category
router.get("/entertainment", (req, res, next) => {
  Service.find({ category: "Entertainment" })
    .populate("vendorId")
    .then((serviceDocuments) => {
      console.log(serviceDocuments);
      res.status(200).json(serviceDocuments);
    })
    .catch(next);
});

router.get("/venues", (req, res, next) => {
  Service.find({ category: "Venue" })
    .populate("vendorId")
    .then((serviceDocuments) => {
      console.log(serviceDocuments);
      res.status(200).json(serviceDocuments);
    })
    .catch(next);
});

router.get("/food-and-beverages", (req, res, next) => {
  Service.find({ category: "Food & Beverage" })
    .populate("vendorId")
    .then((serviceDocuments) => {
      console.log(serviceDocuments);
      res.status(200).json(serviceDocuments);
    })
    .catch(next);
});

router.get("/music", (req, res, next) => {
  Service.find({ category: "Music" })
    .populate("vendorId")
    .then((serviceDocuments) => {
      console.log(serviceDocuments);
      res.status(200).json(serviceDocuments);
    })
    .catch(next);
});

router.get("/decorations-and-favors", (req, res, next) => {
  Service.find({ category: "Decorations & Favors" })
    .populate("vendorId")
    .then((serviceDocuments) => {
      console.log(serviceDocuments);
      res.status(200).json(serviceDocuments);
    })
    .catch(next);
});

router.get("/furniture", (req, res, next) => {
  Service.find({ category: "Furniture" })
    .populate("vendorId")
    .then((serviceDocuments) => {
      console.log(serviceDocuments);
      res.status(200).json(serviceDocuments);
    })
    .catch(next);
});

router.get("/costumes", (req, res, next) => {
  Service.find({ category: "Costumes" })
    .populate("vendorId")
    .then((serviceDocuments) => {
      console.log(serviceDocuments);
      res.status(200).json(serviceDocuments);
    })
    .catch(next);
});

// Get one service
router.get("/:id", (req, res, next) => {
  Service.findById(req.params.id)
    .then((serviceDocument) => {
      return res.status(200).json(serviceDocument);
    })
    .catch(next);
});

// Create new service
router.post("/", requireAuth, uploader.array("images", 5), (req, res, next) => {
  const updateValues = { ...req.body };
  console.log(req.body)

  let imagesArray = []; // Create empty array for image urls

  if (req.files) {
    req.files.forEach(element => imagesArray.push(element.path)); // Push image urls into empty array
    updateValues.images = imagesArray
  }

  updateValues.vendorId = req.session.currentUser; // Retrieve the vendor's id from the session.

  Service.create(updateValues)
    .then((serviceDocument) => {
      serviceDocument
        .populate("vendorId")
        .execPopulate() // Populate on .create() does not work, but we can use populate() on the document once its created !
        .then((service) => {
          console.log("here");
          res.status(201).json(service); // send the populated document.
        })
            .then(() => {
              User.findByIdAndUpdate(req.session.currentUser,  { $push: {servicesOffered: serviceDocument.id } } )
              .then(() => {
                return res.sendStatus(204);
              })
              .catch(next);
            })
        .catch(next);
    })
    .catch(next);
});

// Update a service

router.patch(
  "/:id",
  requireAuth,
  uploader.array("images", 5),
  (req, res, next) => {
    const service = { ...req.body };

    Service.findById(req.params.id)
      .then((serviceDocument) => {
        if (!serviceDocument)
          return res.status(404).json({ message: "Service not found" });
        if (serviceDocument.vendorId.toString() !== req.session.currentUser) {
          return res
            .status(403)
            .json({ message: "You are not allowed to update this document" });
        }

        let imagesArray = []; // Create empty array for image urls

        if (req.files) {
          req.files.forEach(element => imagesArray.push(element.path)); // Push image urls into empty array
          service.images = imagesArray;
        }

        Service.findByIdAndUpdate(req.params.id, service, { new: true })
          .populate("vendorId")
          .then((updatedService) => {
            return res.status(200).json(updatedService);
          })
          .catch(next);
      })
      .catch(next);
  }
);

// Delete a service

router.delete("/:id", requireAuth, (req, res, next) => {
  Service.findById(req.params.id)
    .then((serviceDocument) => {
      if (!serviceDocument) {
        return res.status(404).json({ message: "Service not found" });
      }
      if (serviceDocument.vendorId.toString() !== req.session.currentUser) {
        return res.status(403).json({ message: "You can't delete this service" });
      }

      Service.findByIdAndDelete(req.params.id)
        .then(() => {
          User.findByIdAndUpdate(req.session.currentUser,  { $pull: {servicesOffered: req.params.id } } )
          .then(() => {
            return res.sendStatus(204);
          })
          .catch(next);
        })
        .catch(next);
    })
    .catch(next);
});

module.exports = router;