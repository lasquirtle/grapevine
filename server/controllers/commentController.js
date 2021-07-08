const Category = require("../models/model");
commentController.addComment = (req, res, next) => {
  const { _id, text } = req.body;
  Category.findOneAndUpdate(
    { _id: res.locals.categoryData[0]._id },
    { $push: { "threads.$[outer].comments": { text } } },
    { arrayFilters: [{ "outer._id": _id }] },
    (error, data) => {
      if (error) {
        return next({
          log: `Error in addComment middleware, ${err}`,
          message: "Error adding comment",
        });
      } else {
        return next();
      }
    }
  );
};

commentController.getAllComment = (req, res, next) => {
  const { _id } = req.body;
  Category.findOne({ _id: res.locals.categoryData[0]._id }, (error, data) => {
    if (error) {
      return next({
        log: `Error in getcomment middleware, ${err}`,
        message: "Error getting comment",
      });
    } else {
      data = data.threads.filter((thread) => thread._id.toString() === _id);
      return next();
    }
  });
};

module.exports = commentController;