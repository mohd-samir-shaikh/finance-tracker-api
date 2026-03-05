const express = require("express");

const router = express.Router();

const controller = require("../controllers/transactionController");

router.post("/transactions", controller.addTransaction);

router.get("/transactions", controller.getTransactions);

router.put("/transactions/:id", controller.updateTransaction);

router.delete("/transactions/:id", controller.deleteTransaction);

router.get("/summary", controller.getSummary);

router.get("/multiply", controller.multiplyNumbers);

module.exports = router;