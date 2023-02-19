import { mongoose, Schema } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    description: {
      type: String,
      default: "",
    },
    phonenumber: {
      type: String,
      default: "",
    },
  },
  {
    timestamp: true,
  }
);
const usersModal = mongoose.model("user", userSchema);
export default usersModal;
