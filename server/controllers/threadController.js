const Category = require('../models/model');

const threadController = {};

threadController.addThread = (req, res, next) => {
  const {user, title, body} = req.body;
  Category.threads.create({user, title, body})
          .then(data => {
            console.log('data', data);
            res.locals.newThread = data;
            return next();
          })
          .catch(err => {
            next({
              log: `Error in addCategory middleware, ${err}`,
              message: "Error adding category"
            })
          })
};



threadController.getAllThreads = (req, res, next) => {
  Category.threads.find({})
          .then(data => {
            res.locals.allThreadData = data;
            return next();
          })
          .catch(err => {
            next({
              log: `Error in getAllCategories middleware, ${err}`,
              message: "Error getAllCategories"
            })
          })
};

module.exports = threadController