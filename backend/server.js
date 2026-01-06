import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON payloads
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is now running succesfully.");
});

// Start server and listen on defined port
app.listen(PORT, () => {
  console.log(`Server is running successfully on ${PORT}`);
});
