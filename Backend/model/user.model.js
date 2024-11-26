import mongoose from "mongoose";

// User Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    //   lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Investor', 'Admin'],
      default: 'Investor',
    },
    wallet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Wallet',
    },
    investments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Investment',
      },
    ],
  },
  { timestamps: true }
);

// Export User Model
export const userModel= mongoose.model('User', UserSchema);
