const User = require("../models/user")

module.exports.UserSignup = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.Signup =   async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({email, username});
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, err => {
      if (err) {
        return next(err);
      }
    });  

    req.flash("success", "Welcome to Wonderlust!");
    res.redirect("/listings");
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

module.exports.LoginForm  =  (req, res) => {
  res.render("users/login.ejs");
};


module.exports.Login = async (req, res) => {
  req.flash("success", "Welcome back!");
  res.redirect(res.locals.redirectUrl);
};

module.exports.Logout = (req, res) => {
  req.logout(function(err) {
    if (err) { 
      return next(err);
     }
    req.flash("success", "You logged out!");
    res.redirect("/listings");
  });
};
