const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Service = require("../models/Service");
const Event = require("../models/Event")
const requireAuth = require("../middlewares/requireAuth");

// POST When you click "Book this service" take the service ID, ask user for the date of the event, check if logged in user already has an event that day, either create a new event with service Id or add service Id to existing event

// params are service ID and logged in user ID
// form data is date, location, address

router.post("/", requireAuth, (req, res, next) => {
  const { date } = req.body;    
  const { buyer } = req.session.currentUser; // Retrieve the buyer's id from the session.

  const newEvent = { ...req.body }
  newEvent.buyer = req.session.currentUser;

  Event.findOne({ date, buyer })
    .then((eventDocument) => {
      if (!eventDocument) {
        Event.create(newEvent)
          .then((eventDocument) => {
            eventDocument
              .populate("buyer")
              .populate("services")
              .execPopulate()
              .then((event) => {
                res.status(201).json(event);
              })
              .catch(next);
          })
          .catch(next);
      } else {
        Event.findOne( { date, buyer })
          .then((eventDocument) => {
            let currentServices = eventDocument.services;
            const newService = req.body.services;
            currentServices.push(newService);
            const update = { services: currentServices, buyer: req.session.currentUser };
            Event.findOneAndUpdate( { date }, update, { new: true })
              .then((eventDocument) => {
                res.status(201).json(eventDocument);
              })
              .catch(next);         
          })
          .catch(next);
      }
    })
  })

// GET View all the events associated with logged in user
    router.get("/", requireAuth, (req, res, next) => {
      Event.find({ buyer: req.session.currentUser })
        .populate("buyer")
        .populate("services")
        .then((eventDocuments) => {
          console.log(eventDocuments);
          res.status(200).json(eventDocuments);
        })
        .catch(next);
    });
    
// GET View a specific event associated with a user
router.get("/:id", requireAuth, (req, res, next) => {
  Event.findById(req.params.id)
    .then((eventDocument) => {
      return res.status(200).json(eventDocument);
    })
    .catch(next);
});

// PATCH an event ***Still need to figure out how to remove element from array of services"
router.patch(
  "/:id",
  requireAuth,
  (req, res, next) => {
    const event = { ...req.body };

    Event.findById(req.params.id)
      .then((eventDocument) => {
        if (!eventDocument)
          return res.status(404).json({ message: "Event not found" });
        if (eventDocument.buyer.toString() !== req.session.currentUser) {
          return res
            .status(403)
            .json({ message: "You are not allowed to update this event" });
        }

        Event.findByIdAndUpdate(req.params.id, event, { new: true })
          .populate("buyer")
          .then((updatedEvent) => {
            return res.status(200).json(updatedEvent);
          })
          .catch(next);
      })
      .catch(next);
  }
);

// DELETE an event
router.delete("/:id", requireAuth, (req, res, next) => {
  Event.findById(req.params.id)
    .then((eventDocument) => {
      if (!eventDocument) {
        return res.status(404).json({ message: "Event not found" });
      }
      if (eventDocument.buyer.toString() !== req.session.currentUser) {
        return res.status(403).json({ message: "You can't delete this service" });
      }

      Event.findByIdAndDelete(req.params.id)
        .then(() => {
          return res.sendStatus(204);
        })
        .catch(next);
    })
    .catch(next);
});




module.exports = router;
