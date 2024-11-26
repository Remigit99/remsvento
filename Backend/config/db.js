import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const connectDb = async () =>{

    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Db connect successful")

}