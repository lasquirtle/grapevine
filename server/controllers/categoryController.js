const Category = require('../models/model');

const categoryController = {};

categoryController.addCategory = (req, res, next) => {
  console.log("req.body", req.body.title)
  console.log("Category: ", Category);
  const {title} = req.body;
  Category.create({title: title})
          .then(data => {
            console.log('data', data);
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
  Category.find({title: title})
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

module.exports = categoryController