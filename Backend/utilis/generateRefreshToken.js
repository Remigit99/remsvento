import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const generateRefreshToken = (userId) =>{

    const token =jwt.sign({id:userId}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "3h"})

    return token

}
