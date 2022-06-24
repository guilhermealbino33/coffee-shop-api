import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    image: String,
  },
  { timestamps: true }
);

mongoose.model("User", UserSchema);
