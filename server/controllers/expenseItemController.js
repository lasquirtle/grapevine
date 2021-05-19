const db = require('../models/budgetModels');

const expenseItemController = {}


expenseItemController.getExpenseItems = (req, res, next) => {
  const query = `
    SELECT * FROM expenses
  `
  db.query(query)
    .then(result => {
      return res.status(200).json(result.rows)
    }).catch(err => {
      return next({
        log: `expenseItemController.getExpenseItems: ${err}`,
        message: "Error getting expense items"
      })
    })
}

expenseItemController.addExpenseItem = (req, res, next) => {
  const { date, amount, category_name, description } = req.query;
  const categoryInput = [category_name];
  const findId = `
    SELECT _id FROM expense_categories
    WHERE category_name = $1
  `
  db.query(findId, categoryInput)
    .then(result => {
      category_id = result.rows[0]._id;
      const array = [date, amount, category_id, description];
      const query = `
        INSERT INTO expenses (date, amount, category_id, description)
        VALUES ($1, $2, $3, $4)
      `
      db.query(query, array)
        .then(result => {
          return next();
        }).catch(err => {
          return next(
            {
              log: `expenseItemController.addExpenseItem: ${err}`,
              message: "Error adding expense item"
            });
        })
    }).catch(err => {
      return next({
        log: `expenseItemController.addExpenseItem: Unable to find category id, ${err}`,
        message: "Please enter a valid category"
      });
    })
}


expenseItemController.deleteExpenseItem = (req, res, next) => {
  const { date, amount, description } = req.query;
  const deleteArray = [date, amount, description];
  const findId = `
    SELECT _id FROM expenses
    WHERE date = $1 
      AND amount = $2 
      AND description = $3
  `
  db.query(findId, deleteArray)
    .then(result => {
      const _id = result.rows[0]._id;
      const array = [_id];
      const query = `
        DELETE FROM expenses
        WHERE _id = $1
      `
      db.query(query, array)
        .then(result => {
          return next();
        }).catch(err => {
          return next(
            {
              log: `expenseItemController.deleteExpenseItem: ${err}`,
              message: "Unable to delete item"
            });
        })
    }).catch(err => {
      return next({
        log: `expenseItemController.deleteExpenseItem: ${err}`,
        message: 'Unable to delete item'
      });
    })
}

expenseItemController.updateExpenseItem = (req, res, next) => {
  const { date, amount, description } = req.query;
  const updateArray = [date, description];
  const findId = `
    SELECT _id FROM expenses
    WHERE date = $1 
      AND description = $2
  `
  db.query(findId, updateArray)
    .then(result => {
      const _id = result.rows[0]._id;
      const array = [_id, amount];
      const query = `
        UPDATE expenses
        SET amount = $2
          WHERE _id = $1
      `
      db.query(query, array)
        .then(result => {
          return next();
        }).catch(err => {
          return next(
            {
              log: `expenseItemController.updateExpenseItem: ${err}`,
              message: "Unable to update item"
            });
        })
    }).catch(err => {
      return next({
        log: `expenseItemController.updateExpenseItem: ${err}`,
        message: 'Unable to update item'
      });
    })
}

module.exports = expenseItemController