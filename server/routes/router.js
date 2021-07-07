const express = require("express");
const categoryController = require('../controllers/categoryController');
const router = express.Router();

console.log('Made it into routers');

router.get("*", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "../../index.html"));
}); 

router.post("/createCategory", categoryController.addCategory, (req, res) => {
  console.log("Here");
  return res.status(200).json(res.locals.newCategory);
})

router.get("/getCategory", categoryController.getCategory, (req, res) => {
  return res.status(200).json(res.locals.categoryData);
})

router.get("/getAllCategories", categoryController.getAllCategories, (req, res) => {
  return res.status(200).json(res.locals.allCategoryData);
})



module.exports = router;