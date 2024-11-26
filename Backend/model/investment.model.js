import mongoose from "mongoose";
// Investment Schema
const InvestmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    minimumAmount: {
      type: Number,
      required: true,
    },
    maximumAmount: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number, // In months
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Admin who created this plan
    },
    subscribers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Investors who subscribed
      },
    ],
  },
  { timestamps: true }
);

// Export Investment Model
export const investmetModel = mongoose.model('Investment', InvestmentSchema);
