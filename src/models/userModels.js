import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "You must provide a username!"],
      unique: [true, "You must use a unique name!"],
    },
    email: {
      type: String,
      required: [true, "You must provide an email!"],
      unique: [true, "You must use a unique email!"],
    },
    password: {
      type: String,
      required: [true, "You must provide a password!"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
