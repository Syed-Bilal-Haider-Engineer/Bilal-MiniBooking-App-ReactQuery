///////////Rooms details modal//////////////////////////

import { mongoose, Schema } from "mongoose";
const roomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    maxcount: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    rentperday: {
      type: Number,
      required: true,
    },
    imagurls: [],
    currentbooking: [],
    roomtype: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Room = mongoose.model("room", roomSchema);
export default Room;
