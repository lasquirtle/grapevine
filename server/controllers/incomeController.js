const db = require('../models/budgetModels'); 

const incomeController = {};


incomeController.getIncomeCategories = (req, res, next) => {
  const query = `
    SELECT * FROM income_categories
  `
  db.query(query)
    .then(result => {
      return res.status(200).json(result.rows);
    })
    .catch(err => {
      return next({
        log: `incomeController.getIncomeCategories: ${err}`,
        message: "Error getting income categories"
      })
    })
}

incomeController.addIncomeCategory = (req, res, next) => {
  const { category_name, budget_amount } = req.query;
  const array = [category_name, budget_amount];
  const query = 
    `INSERT INTO income_categories (category_name, budget_amount) VALUES ($1, $2)`;
  db.query(query, array)
    .then(result => {
      return next();
    }).catch(err => {
      return next({
        log: `incomeController.addIncomeCategory: error posting new income category, ${err}`,
        message: "Error creating new income category"
      })
    })
}

incomeController.deleteIncomeCategory = (req, res, next) => {
  const { category_name } = req.query;
  const array = [category_name];
  const query = 
    `DELETE FROM income_categories WHERE category_name = $1`;
  db.query(query, array)
    .then(result => {
      return next();
    }).catch(err => {
      return next({
        log: `incomeController.deleteIncomeCategory: error deleting new income category, ${err}`,
        message: "Error deleting new income category"
      })
    })
}

incomeController.updateIncomeCategory = (req, res, next) => {
  const { category_name, budget_amount } = req.query;
  const array = [category_name, budget_amount];
  const query = 
    `UPDATE income_categories SET budget_amount = $2 WHERE category_name = $1`;
  db.query(query, array)
    .then(result => {
      if (result.rowCount === 0) {
        return next({
          log: `incomeController.addIncomeCategory: invalid category`,
          message: "Please enter a valid category"
        })
      }
      return next();
    }).catch(err => {
      return next({
        log: `incomesController.addIncomeCategory: error updating income category, ${err}`,
        message: "Error updating income category"
      })
    })
}



module.exports = incomeController;