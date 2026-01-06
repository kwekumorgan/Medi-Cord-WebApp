import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a full name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true, // Prevents two users from using the same email
      trim: true,
      lowercase: true,
    },
    username: {
      type: String,
      required: [true, "Please add a username"],
      unique: true, // This acts as the unique ID for login
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 5, // Basic security check
    },
  },
  {
    timestamps: true, // Automatically creates createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", userSchema);

export default User;
