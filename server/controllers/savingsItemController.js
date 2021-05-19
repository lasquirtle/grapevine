const db = require('../models/budgetModels');

const savingsItemController = {}

savingsItemController.addSavingsItem = (req, res, next) => {
  const { date, amount, category_name, description } = req.query;
  const categoryInput = [category_name];
  const findId = `
    SELECT _id FROM savings_categories
    WHERE category_name = $1
  `
  db.query(findId, categoryInput)
    .then(result => {
      category_id = result.rows[0]._id;
      const array = [date, amount, category_id, description];
      const query = `
        INSERT INTO savings (date, amount, category_id, description)
        VALUES ($1, $2, $3, $4)
      `
      db.query(query, array)
        .then(result => {
          return next();
        }).catch(err => {
          return next(
            {
              log: `savingsItemController.addSavingsItem: ${err}`,
              message: "Error adding savings item"
            });
        })
    }).catch(err => {
      return next({
        log: `savingsItemController.addSavingsItem: Unable to find category id, ${err}`,
        message: "Please enter a valid category"
      });
    })
}

savingsItemController.deleteSavingsItem = (req, res, next) => {
  const { date, amount, description } = req.query;
  const deleteArray = [date, amount, description];
  const findId = `
    SELECT _id FROM savings
    WHERE date = $1 
      AND amount = $2 
      AND description = $3
  `
  db.query(findId, deleteArray)
    .then(result => {
      const _id = result.rows[0]._id;
      const array = [_id];
      const query = `
        DELETE FROM savings
        WHERE _id = $1
      `
      db.query(query, array)
        .then(result => {
          return next();
        }).catch(err => {
          return next(
            {
              log: `savingsItemController.deleteSavingsItem: ${err}`,
              message: "Unable to delete item"
            });
        })
    }).catch(err => {
      return next({
        log: `savingsItemController.deleteSavingsItem: ${err}`,
        message: 'Unable to delete item'
      });
    })
}

savingsItemController.updateSavingsItem = (req, res, next) => {
  const { date, amount, description } = req.query;
  const updateArray = [date, description];
  const findId = `
    SELECT _id FROM savings
    WHERE date = $1 
      AND description = $2
  `
  db.query(findId, updateArray)
    .then(result => {
      const _id = result.rows[0]._id;
      const array = [_id, amount];
      const query = `
        UPDATE savings
        SET amount = $2
          WHERE _id = $1
      `
      db.query(query, array)
        .then(result => {
          return next();
        }).catch(err => {
          return next(
            {
              log: `savingsItemController.updateSavingsItem: ${err}`,
              message: "Unable to update item"
            });
        })
    }).catch(err => {
      return next({
        log: `savingsItemController.updateSavingsItem: ${err}`,
        message: 'Unable to update item'
      });
    })
}

module.exports = savingsItemController