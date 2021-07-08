const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const authController = {};

authController.createUser = (req, res, next) => {
  const {newUsername, newPassword, newFirstName, newLastName} = req.body;
  //create new user in DB and automatically return signed in session cookies or w/e
  User.create({
    username: newUsername,
    password: newPassword,
    firstName: newFirstName,
    lastName: newLastName,
  }).then(data => {
    res.locals.newUserData = data;
    return next(); // or do we go straight to createCookie
  })
  .catch(err => {
    next({
      log: `Error in createUser middleware, ${err}`,
      message: "Error in createUser"
    })
  })
};

// run req.body.password through bcrypt middleware first
// 

authController.login = (req, res, next) => {
  const unverifiedUsername = req.body.username;
  const unverifiedPassword = req.body.password;
  User.findOne({
    username: unverifiedUsername
  }).then(data => {
    const expectedPassword = data.password;
    bcrypt.compare(unverifiedPassword ,expectedPassword, function(err, result) {
      if (!result) res.status(404).send('Login attempt denied');
      else {
        res.cookie('userID', data._id.toString());
        return next();
      }
    })
  })
  .catch(err => {
    next({
      log: `Error in login middleware, ${err}`,
      message: "Error in login authController"
    })
  })
};

authController.checkCookie = (req, res, next) => {
  const { userID } = req.cookies;
  if (userID) {
    User.findOne({ _id: userID}).then(data => {
      return next();
    }).catch(err => {
      next({
        log: `Error in checkCookie middleware, ${err}`,
        message: "Error checkCookie authController"
      })
    })
  } else {
    res.send("No valid cookie");
  }
};

module.exports = authController

// FOR REFERENCE
//   verifyUser(req, res) {
//     const { user, pass } = req.body;
//     if (user === 'testUser' && pass === 'passowrd') {
//       console.log('verified user');
//       return res.cookie('token', 'admin').redirect('/secret');
//     }
//     console.log('failed login attempt');
//     return res.send('unsuccessful login attempt');
//   },
  
//   verifyCookie(req, res, next) {
//     console.log('verified cookie');
//     res.locals.signedIn = (req.cookies.token === 'admin') ? true : false;
//     next();
//   },
// };