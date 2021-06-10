const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  profileImg: {
    type: String,
    default:
      "https://img-premium.flaticon.com/png/512/194/194938.png?token=exp=1623329062~hmac=9f4b786573476dbf3dfcd7bc960b7b44",
  },
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
