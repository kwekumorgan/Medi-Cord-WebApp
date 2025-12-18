import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { userId, password } = req.body;

    if (!userId || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(401).json({ message: "Invalid ID or password" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid ID or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        userId: user.userId
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
