const Category = require('../models/model');

const categoryController = {};

categoryController.addCategory = (req, res, next) => {
  Category.create({title: req.body.newCategoryTitle})
          .then(data => {
            res.locals.newCategory = data;
            return next();
          })
          .catch(err => {
            next({
              log: `Error in addCategory middleware, ${err}`,
              message: "Error adding category"
            })
          })
};

categoryController.getCategory = (req, res, next) => {
  Category.find({title: req.body.getCategoryTitle})
          .then(data => {
            res.locals.categoryData = data;
            return next();
          })
          .catch(err => {
            next({
              log: `Error in getCategory middleware, ${err}`,
              message: "Error getting category"
            })
          })
};

categoryController.getAllCategories = (req, res, next) => {
  Category.find({})
          .then(data => {
            res.locals.allCategoryData = data;
            return next();
          })
          .catch(err => {
            next({
              log: `Error in getAllCategories middleware, ${err}`,
              message: "Error getAllCategories"
            })
          })
};