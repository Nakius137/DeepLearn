import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  hashedPassword: String,
  token: String,
});

const User = model("User", userSchema);

export default User;
