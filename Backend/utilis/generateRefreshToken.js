import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { userModel as User} from "../model/user.model.js"
dotenv.config()

export const generateRefreshToken = async(userId) =>{

    const token = await jwt.sign({id:userId}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"})

    const updateRefreshToken = await  User.updateOne({_id: userId}, {refresh_token: token})

    return token

}
