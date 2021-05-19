const db = require('../models/budgetModels'); 

const expensesController = {};



expensesController.getExpenseCategories = (req, res, next) => {
  const query = `
    SELECT * FROM expense_categories
  `
  db.query(query)
    .then(result => {
      return res.status(200).json(result.rows);
    })
    .catch(err => {
      return next({
        log: `expensesController.getExpenseCategories: ${err}`,
        message: "Error getting expense categories"
      })
    })
}

expensesController.addExpenseCategory = (req, res, next) => {
  const { category_name, budget_amount } = req.query;
  const array = [category_name, budget_amount];
  const query = 
    `INSERT INTO expense_categories (category_name, budget_amount) VALUES ($1, $2)`;
  db.query(query, array)
    .then(result => {
      return next();
    }).catch(err => {
      return next({
        log: `expensesController.addExpenseCategory: ${err}`,
        message: "Error creating new expense category"
      })
    })
}

expensesController.deleteExpenseCategory = (req, res, next) => {
  const { category_name } = req.query;
  const array = [category_name];
  const query = 
    `DELETE FROM expense_categories WHERE category_name = $1`;
  db.query(query, array)
    .then(result => {
      return next();
    }).catch(err => {
      return next({
        log: `expensesController.deleteExpenseCategory: ${err}`,
        message: "Error deleting new expense category"
      })
    })
}

expensesController.updateExpenseCategory = (req, res, next) => {
  const { category_name, budget_amount } = req.query;
  const array = [category_name, budget_amount];
  const query = 
    `UPDATE expense_categories SET budget_amount = $2 WHERE category_name = $1`;
  db.query(query, array)
    .then(result => {
      if (result.rowCount === 0) {
        return next({
          log: `expensesController.addExpenseCategory: invalid category`,
          message: "Please enter a valid category"
        })
      }
      return next();
    }).catch(err => {
      return next({
        log: `expensesController.addExpenseCategory: ${err}`,
        message: "Error updating expense category"
      })
    })
}


module.exports = expensesController;