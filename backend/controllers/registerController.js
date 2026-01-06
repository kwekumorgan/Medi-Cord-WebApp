import User from "../models/User.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    // 1. Check if user already exists (by email OR username)
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    
    if (userExists) {
      return res.status(400).json({ 
        message: "User with this email or username already exists" 
      });
    }

    // 2. Create user
    const user = await User.create({
      name,
      email,
      username,
      password
    });

    if (user) {
      res.status(201).json({
        message: "Registration Successful",
        user: {
          _id: user._id,
          name: user.name,
          username: user.username
        }
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};