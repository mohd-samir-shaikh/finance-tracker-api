let transactions = require("../data/transactions");
const math = require("../utils/mathOperations");

exports.addTransaction = (req, res) => {

  const { title, amount, type } = req.body;

  const newTransaction = {
    id: Date.now(),
    title,
    amount,
    type
  };

  transactions.push(newTransaction);

  res.json(newTransaction);
};

exports.getTransactions = (req, res) => {
  res.json(transactions);
};

exports.updateTransaction = (req, res) => {

  const id = parseInt(req.params.id);

  const transaction = transactions.find(t => t.id === id);

  if (!transaction) {
    return res.status(404).json({ message: "Transaction not found" });
  }

  transaction.title = req.body.title;
  transaction.amount = req.body.amount;
  transaction.type = req.body.type;

  res.json(transaction);
};

exports.deleteTransaction = (req, res) => {

  const id = parseInt(req.params.id);

  transactions = transactions.filter(t => t.id !== id);

  res.json({ message: "Transaction deleted" });
};

exports.getSummary = (req, res) => {

  let income = 0;
  let expense = 0;

  transactions.forEach(t => {

    if (t.type === "income") {
      income = math.add(income, t.amount);
    } else {
      expense = math.add(expense, t.amount);
    }

  });

  const balance = math.subtract(income, expense);

  res.json({
    income,
    expense,
    balance
  });
};

exports.multiplyNumbers = (req, res) => {

  const { a, b } = req.query;

  const result = math.multiply(Number(a), Number(b));

  res.json({ result });
};