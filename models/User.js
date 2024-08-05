import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username for this user."],
  },
  password: {
    type: String,
    required: [true, "Please provide a password for this user."],
  },
  role: {
    type: String,
    enum: ["Admin", "Client"],
    default: "Client",
    required: [true, "Please specify the role for this user."],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
