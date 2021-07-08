const Category = require('../models/model');

const categoryController = {};

categoryController.addCategory = (req, res, next) => {
  console.log("req.body", req.body)
  const {title} = req.body;
  Category.create({title})
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
  const {title} = req.body;
  Category.find({title})
          .then(data => {
            res.locals.categoryData = data;
            console.log(res.locals.categoryData);
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

module.exports = categoryController