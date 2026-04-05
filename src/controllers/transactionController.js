const Transaction = require("../models/Transaction");

exports.create = async (req, res) => {
  const data = await Transaction.create(req.body);
  res.json(data);
};

exports.getAll = async (req, res) => {
  const data = await Transaction.find({ isDeleted: false });
  res.json(data);
};

exports.update = async (req, res) => {
  const data = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

exports.delete = async (req, res) => {
  await Transaction.findByIdAndUpdate(req.params.id, {
    isDeleted: true
  });
  res.json({ msg: "Deleted" });
};