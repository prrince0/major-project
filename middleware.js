const Listing = require("./models/listing");
const Review = require("./models/reviews");
//const Review = require("../models/reviews");


module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;      // to store the url user wanted to visit.
    req.flash("error", "You must be signed in first!");  // req.session is a property added by express-session 
    return res.redirect("/login");
  }
  next();
}; 

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};  

module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;
  const list = await Listing.findById(id);
  if (!list.owner.equals(req.user._id)) {              // checking if logged in user is the owner of listing
    req.flash("error", "You do not have permission to do that!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  const { id, review_id } = req.params;

  const review = await Review.findById(review_id);

  if (!review) {
    req.flash("error", "Review not found!");
    return res.redirect(`/listings/${id}`);
  }

  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the author of this review!");
    return res.redirect(`/listings/${id}`);
  }

  next();
};
