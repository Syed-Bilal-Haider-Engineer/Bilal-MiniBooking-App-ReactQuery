/////////////////////Booking transactions schema////////////////////////
import { mongoose, Schema } from "mongoose";
const bookingschema = new Schema({
  room: {
    type: String,
    required: true,
  },
  roomid: {
    type: Schema.Types.ObjectId,
    ref: "room",
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  fromdate: { type: String, required: true },
  todate: { type: String, required: true },
  totalamount: { type: Number, required: true },
  totalday: {
    type: Number,
    required: true,
  },
  transactionsId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "active",
  },
});

const booking = mongoose.model("booking", bookingschema);
export default booking;

//////////////////Booking transactions schema end here////////////////
