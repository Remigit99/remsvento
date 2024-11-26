import mongoose from "mongoose";
import { userModel as User } from "../model/user.model.js";
import bcrypt from "bcryptjs"


//Registration controller

export const registerController  = async(req, res) =>{
 
    try {

    //Check if name, email, password and role was passed

        const { name, email, password, role} = req.body

        if (!name || !email || !password || !role){
            return res.status(400).json({message: "All fields compulsory"})
        }
        
        //Check if user already exists

        const userExists = await User.findOne({email})

        if (userExists){
            return res.status(403).json({message: "User already exists"})
        }

        //Hash password
         const hashedPassword = await bcrypt.hash(password, 10)


        const newUser = await User({
            name,
            email,
            password: hashedPassword,
            role
        })

        //save user

        const  savedUser = await newUser.save()
        console.log(savedUser)



    } catch (error) {
        res.status(500).json({message: "Error creating user"})
    }

}