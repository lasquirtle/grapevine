const db = require("../models/budgetModels");

const controller = {};

/*
For handling errors:
- return the following object as an argument to next
.catch((err) => next({
  log: `Error in controllerName.middlewareFunctionName: ${err}`, <- this is what logs in our console on the backend
  message: '<Whatever the error is>' <- this is what gets sent back to the client
  })
)
*/

module.exports = controller;
