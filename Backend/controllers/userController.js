import mongoose from "mongoose";
import { userModel as User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { resendEmail } from "../config/verifyEmail.js";
import verifyEmailTemplate from "../utilis/verifyEmailTemplate.js";
import { generateAccessToken } from "../utilis/generateAcessToken.js";
import { generateRefreshToken } from "../utilis/generateRefreshToken.js";

dotenv.config();

//Registration controller
export const registerController = async (req, res) => {
  try {
    //Check if name, email, password and role was passed

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(401).json({ message: "All fields compulsory" });
    }

    //Check if user already exists

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({ message: "User already exists" });
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User({
      name,
      email,
      password: hashedPassword,
    });

    //save user

    const savedUser = await newUser.save();
    console.log(savedUser);

    const emailVerificationUrl = `${process.env.FRONTEND_URL}/verify-email?code=${savedUser?._id}`;

    const sendVerifyEmail = await resendEmail({
      sendTo: email,
      emailSubject: "Verify Email",
      htmlContent: verifyEmailTemplate({
        name,
        verifyEmailUrl: emailVerificationUrl,
      }),
    });
    return res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};

//Verify Email  Controller
export const verifyEmailController = async (req, res) => {
  try {
    const { code } = req.body;

    // const updateVerifyEmail = await User.findByIdAndUpdate({_id: code},{verify_email: true})
    const user = await User.findOne({ _id: code });

    if (!user) {
      return res.status(400).json({ message: "User does exists" });
    }

    const updateUser = await User.updateOne(
      { _id: code },
      { verify_email: true }
    );

    return res.status(200).json({ message: "Email Successfully Verified" });
  } catch (error) {
    return res.status(500).json({ message: "Error Verifying User Email" });
  }
};

//Login Controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(403).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User does not exists" });
    }

    //Check if User Account is active
    // if (user.status !== "Active") {
    //   return res.status(400).json({
    //     message: "There is an issue with your account, contact Support",
    //   });
    // }

    // Compare password supplied with hashedPassword
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const accessToken = await generateAccessToken(user._id);
    const refreshToken = await generateRefreshToken(user._id);

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    res.cookie("acesstoken", accessToken, cookiesOption);
    res.cookie("refreshtoken", refreshToken, cookiesOption);
    return res
      .status(200)
      .json({
        message: "Login Successful",
        data: {name, avatar, email, role, mobile, wallet, investment},
      });
  } catch (error) {
    res.status(500).json({ error: "Error Logining User In" });
  }
};
