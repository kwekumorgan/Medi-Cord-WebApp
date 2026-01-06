import User from "../models/User.js";

export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body; // Look directly at req.body

    if (!username || !password) {
      return res.status(400).json({
        message: "Please provide both User ID and Password.",
      });
    }

    // 1. Search for the user
    const user = await User.findOne({ username });

    if (!user) {
      console.log("User not found!");
      return res.status(404).json({ message: "User ID not found." });
    }

    // 2. Check password
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password." });
    }

    // 3. Success
    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, username: user.username, name:user.name },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
