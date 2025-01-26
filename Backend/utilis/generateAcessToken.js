import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const generateAccessToken = async(userId) =>{

    const token = await jwt.sign({id:userId}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "3h"})

    return token;

}
