import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  favorites: [{ type: String }],
  settings: { type: String },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
