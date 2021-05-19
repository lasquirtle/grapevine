const express = require('express');

const expenseItemController = require('../controllers/expenseItemController');
const incomeItemController = require('../controllers/incomeItemController');
const savingsItemController = require('../controllers/savingsItemController');

const router = express.Router();


// ADDING ITEMS
router.post('/expense', expenseItemController.addExpenseItem, (req, res) => {
  return res.status(200).send('Successfully added expense item')
})

router.post('/income', incomeItemController.addIncomeItem, (req, res) => {
  return res.status(200).send('Successfully added income item')
})

router.post('/savings', savingsItemController.addSavingsItem, (req, res) => {
  return res.status(200).send('Successfully added savings item')
})



// DELETING ITEMS
router.delete('/expense', expenseItemController.deleteExpenseItem, (req, res) => {
  return res.status(200).send('Successfully deleted expense item')
})

router.delete('/income', incomeItemController.deleteIncomeItem, (req, res) => {
  return res.status(200).send('Successfully deleted income item')
})

router.delete('/savings', savingsItemController.deleteSavingsItem, (req, res) => {
  return res.status(200).send('Successfully deleted savings item')
})



// UPDATING ITEMS
router.put('/expense', expenseItemController.updateExpenseItem, (req, res) => {
  return res.status(200).send('Successfully updated expense item')
})

router.put('/income', incomeItemController.updateIncomeItem, (req, res) => {
  return res.status(200).send('Successfully updated income item')
})

router.put('/savings', savingsItemController.updateSavingsItem, (req, res) => {
  return res.status(200).send('Successfully updated savings item')
})


module.exports = router;