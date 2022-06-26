import mongoose from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
  image: string;
}

export interface IUserDocument extends mongoose.Document, IUser {}

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    image: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model<IUserDocument>("User", userSchema);

export default UserModel;
