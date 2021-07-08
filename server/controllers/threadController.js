
const Category = require('../models/model');


const threadController = {};

threadController.addThread = (req, res, next) => {
  const { user, thread_title, body } = req.body;
  Category.findOneAndUpdate(
    { _id: res.locals.categoryData[0]._id },
    { $push: { threads: { user, thread_title, body } } },
    (error, data) => {
      if (error) {
        return next({
          log: `Error in addThread middleware, ${err}`,
          message: "Error adding thread",
        });
      } else {
        res.locals.thread = data;
        return next();
      }
    }
  );
};

threadController.getAllThread = (req, res, next) => {
  Category.findOne({ _id: res.locals.categoryData[0]._id }, (error, data) => {
    if (error) {
      return next({
        log: `Error in getThread middleware, ${err}`,
        message: "Error getting thread",
      });
    } else {
      res.locals.allThreads = data.threads;
      return next();
    }
  });
};


module.exports = threadController;

