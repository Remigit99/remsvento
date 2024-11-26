import mongoose from "mongoose";
// Transaction Schema
const TransactionSchema = new Schema(
  {
    wallet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Wallet',
      required: true,
    },
    type: {
      type: String,
      enum: ['Deposit', 'Withdrawal'],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      validate: {
        validator: (value) => value > 0,
        message: 'Amount must be greater than 0',
      },
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
    initiatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // User initiating the transaction
      required: true,
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Admin who approves/rejects the transaction
    },
    reason: {
      type: String, // Optional: Reason for rejection
    },
  },
  { timestamps: true }
);

// Export Transaction Model
export const transactionModel = mongoose.model('Transaction', TransactionSchema);
