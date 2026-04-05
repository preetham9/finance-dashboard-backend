const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  amount: Number,
  type: { type: String, enum: ["income", "expense"] },
  category: String,
  note: String,
  isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);