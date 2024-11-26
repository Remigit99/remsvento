import express from "express"
import { registerController } from "../controllers/userController.js"

export const route = express.Router()


// Register  User

route.post("/register",  registerController )