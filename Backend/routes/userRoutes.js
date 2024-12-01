import express from "express"
import { loginController, registerController, verifyEmailController } from "../controllers/userController.js"

export const route = express.Router()


// Register  User

route.post("/register",  registerController )


//Login User
route.get("/login", loginController)

//Verify Email
route.post("/verify-email", verifyEmailController)