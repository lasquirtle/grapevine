const express = require("express");
const categoryController = require('../controllers/categoryController');
const threadController = require('../controllers/threadController');
const commentController = require('../controllers/commentController');
const router = express.Router();

console.log('Made it into routers');

router.get("/", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "../../index.html"));
});

router.post("/createCategory", categoryController.addCategory, (req, res) => {
  return res.status(200).json(res.locals.newCategory);
});

router.get("/getCategory", categoryController.getCategory, (req, res) => {
  return res.status(200).json(res.locals.categoryData);
});

router.get("/getAllCategories", categoryController.getAllCategories, (req, res) => {
  return res.status(200).json(res.locals.allCategoryData);
});

router.post("/createThread", categoryController.getCategory, threadController.addThread, (req, res) => {
  return res.status(200).json(res.locals.newThread);
});

router.get("/getThread", categoryController.getCategory, threadController.getAllThread, (req, res) => {
  return res.status(200).json(res.locals.allThreads);
});

router.post("/createComment", categoryController.getCategory, commentController.addComment, (req, res) => {
  return res.status(200).json(res.locals.comment);
});

router.get("/getComment", categoryController.getCategory, commentController.getAllComment, (req, res) => {
  return res.status(200).json(res.locals.allComments);
})

module.exports = router;