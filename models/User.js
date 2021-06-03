const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  profileImg: String,
  password: { type: String, required: true },
  lastName: String,
  firstName: String,
  phoneNumber: String,
  description: String,
  stripeId: String,
  servicesOffered: [{ type: Schema.Types.ObjectId, ref: "Service" }],
  salesMade: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  favorites: [{ type: Schema.Types.ObjectId, ref: "Service" }],
  purchasesMade: [{ type: Schema.Types.ObjectId, ref: "Event" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
