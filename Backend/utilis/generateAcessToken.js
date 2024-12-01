import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const generateAccessToken = (userId) =>{

    const token =jwt.sign({id:userId}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "3h"})

    return token

}
