const express = require("express");
const categoryController = require('../controllers/categoryController');
const threadController = require('../controllers/threadController');
const authController = require('../controllers/authController');
const router = express.Router();

console.log('Made it into routers');

router.get("/", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "../../index.html"));
});

router.post("/createCategory", authController.checkCookie, categoryController.addCategory, (req, res) => {
  return res.status(200).json(res.locals.newCategory);
})

router.get("/getCategory", categoryController.getCategory, (req, res) => {
  return res.status(200).json(res.locals.categoryData);
})

router.get("/getAllCategories", categoryController.getAllCategories, (req, res) => {
  return res.status(200).json(res.locals.allCategoryData);
})

router.post("/createThread", threadController.addThread, (req, res) => {
  return res.status(200).json(res.locals.newThread);
})

router.post("/signup", authController.createUser, (req, res) => {
  return res.status(200).send("Created new user");
})

router.post("/login", authController.login, (req, res) => {
  return res.status(200).send("Logged in user");
})


module.exports = router;