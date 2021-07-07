const express = require("express");

const router = express.Router();

module.exports = router;

router.get("/", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "../../index.html"));
});

