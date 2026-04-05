const Transaction = require("../models/Transaction");

exports.summary = async (req, res) => {
  const data = await Transaction.find({ isDeleted: false });

  let income = 0, expense = 0;

  data.forEach(t => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense
  });
};