const Review = require("../models/reviews")
const Listing = require("../models/listing")

module.exports.CreateReview = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
    req.flash("success", "new reviews added successfully!");

  res.redirect(`/listings/${listing._id}`);
};
 
module.exports.DestroyReview = async (req, res) => {
  let { id, review_id } = req.params;

   await Listing.findByIdAndUpdate(id, {
    $pull: { reviews: review_id }
  });

  await Review.findByIdAndDelete(review_id);
    req.flash("success", "review deleted!");

  res.redirect(`/listings/${id}`);
};

















