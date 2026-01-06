import express from "express";
import { loginController } from "../controllers/loginController.js";
import { registerController } from "../controllers/registerController.js"; 

const authRoute = express.Router();

authRoute.post("/login", loginController);
authRoute.post("/register", registerController); 

export default authRoute;