
const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const{ saveRedirectUrl } = require("../middleware.js");
const userController = require("../controller/users.js");

router
 .route("/signup")
  .get((userController.UserSignup))
  .post( wrapAsync(userController.Signup)
);


router.route("/login")
.get((userController.LoginForm))
.post( saveRedirectUrl,
 passport.authenticate("local", {
  failureRedirect: "/login",
  failureFlash: true,
 }),(userController.Login)
);

router.get("/logout",
   (userController.Logout));

module.exports = router;



