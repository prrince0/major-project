const express = require("express");
const router = express.Router();

const Listing = require("../models/listing");
const Review = require("../models/reviews");
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/wrapAsync");
const { reviewsSchema } = require("../schema");
const { isLoggedIn, isReviewAuthor,saveRedirectUrl } = require("../middleware");
const { CreateListing } = require("../controller/listing");
const { CreateReview, DestroyReview } = require("../controller/review");

// validation middleware
const validateReview = (req, res, next) => {
  let { error } = reviewsSchema.validate(req.body);
  if (error) {
    let errmsg = error.details.map(el => el.message).join(",");
    throw new ExpressError(400, errmsg);
  }
  next();
};

// CREATE REVIEW
router.post("/:id", isLoggedIn, validateReview, wrapAsync(CreateReview));

// DELETE REVIEW
router.delete("/:id/:review_id",
  saveRedirectUrl,
  isLoggedIn,
  isReviewAuthor,
   wrapAsync(DestroyReview));

module.exports = router;

