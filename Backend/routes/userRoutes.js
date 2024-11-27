import express from "express"
import { loginController, registerController } from "../controllers/userController.js"

export const route = express.Router()


// Register  User

route.post("/register",  registerController )


//Login User
route.get("/login", loginController)