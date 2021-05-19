const db = require('../models/budgetModels'); 

const savingsController = {};

savingsController.addSavingsCategory = (req, res, next) => {
  const { category_name, budget_amount } = req.query;
  const array = [category_name, budget_amount];
  const query = 
    `INSERT INTO savings_categories (category_name, budget_amount) VALUES ($1, $2)`;
  db.query(query, array)
    .then(result => {
      next();
    }).catch(err =>
      next({
        log: `savingsController.addSavingsCategory: error posting new savings category, ${err}`,
        message: "Error creating new savings category"
      })
    )
}

savingsController.deleteSavingsCategory = (req, res, next) => {
  const { category_name } = req.query;
  const array = [category_name];
  const query = 
    `DELETE FROM savings_categories WHERE category_name = $1`;
  db.query(query, array)
    .then(result => {
      next();
    }).catch(err =>
      next({
        log: `savingsController.deleteSavingsCategory: error deleting new savings category, ${err}`,
        message: "Error deleting new savings category"
      })
  )
}

savingsController.updateSavingsCategory = (req, res, next) => {
  const { category_name, budget_amount } = req.query;
  const array = [category_name, budget_amount];
  const query = 
    `UPDATE savings_categories SET budget_amount = $2 WHERE category_name = $1`;
  db.query(query, array)
    .then(result => {
      if (result.rowCount === 0) {
        return next({
          log: `savingsController.addSavingsCategory: invalid category`,
          message: "Please enter a valid category"
        })
      }
      return next();
    }).catch(err => {
      return next({
        log: `savingsController.addSavingsCategory: error updating savings category, ${err}`,
        message: "Error updating savings category"
      })
    }

    )
}


module.exports = savingsController;