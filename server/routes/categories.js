const express = require('express');

const expensesController = require('../controllers/expensesController');
const incomeController = require('../controllers/incomeController');
const savingsController = require('../controllers/savingsController');

const router = express.Router();

// READING CATEGORIES
router.get('/expense', expensesController.getExpenseCategories);
router.get('/income', incomeController.getIncomeCategories);
router.get('/savings', savingsController.getSavingsCategories);


// ADDING CATEGORIES
router.post('/expense', expensesController.addExpenseCategory, (req, res) => {
  return res.status(200).send('Successfully created expense category');
});

router.post('/income', incomeController.addIncomeCategory, (req, res) => {
  return res.status(200).send('Successfully created income category');
});

router.post('/savings', savingsController.addSavingsCategory, (req, res) => {
  return res.status(200).send('Successfully created savings category');
});


// DELETING CATEGORIES
router.delete('/expense', expensesController.deleteExpenseCategory, (req, res) => {
  return res.status(200).send('Successfully deleted expense category');
});

router.delete('/income', incomeController.deleteIncomeCategory, (req, res) => {
  return res.status(200).send('Successfully deleted income category');
});

router.delete('/savings', savingsController.deleteSavingsCategory, (req, res) => {
  return res.status(200).send('Successfully deleted savings category');
});


// UPDATING CATEGORIES
router.put('/expense', expensesController.updateExpenseCategory, (req, res) => {
  return res.status(200).send('Successfully updated expense category');
});

router.put('/income', incomeController.updateIncomeCategory, (req, res) => {
  return res.status(200).send('Successfully updated income category');
});

router.put('/savings', savingsController.updateSavingsCategory, (req, res) => {
  return res.status(200).send('Successfully updated savings category');
});

module.exports = router;