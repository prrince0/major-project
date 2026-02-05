
const Listing = require("../models/listing");

module.exports.Index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.Rendernew = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.ShowListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate({path: "reviews",
    populate:{path:"author",},              // populate method  helps us to display the  name of 
  })                                        //author of review .
  .populate("owner");
  if (!listing) {
  req.flash("error", "listing not found");
    return res.redirect("/listings");
  }
  console.log(listing);
  res.render("listings/show.ejs", { listing });
};

module.exports.CreateListing = async (req, res) => {
  let url = req.file.path;                     //extrated url and filename from req.file object 
  let filename = req.file.filename;
  req.body.listing.image = {url, filename};   // adding image url and filename to listing object
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id; 
  newListing.image = {url, filename};  // setting owner of listing to currently logged in user
  await newListing.save();
  req.flash("success", "Successfully created a new listing!");
  res.redirect("/listings");
};

module.exports. EditListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  //const listing = await Listing.findById(id).populate("owner");

  if (!listing) {
    req.flash("error", "listing not found");      //for error flash
     res.redirect("/listings");    // ("/listings")
  }
   
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload/", "/upload/w_250/"); // helps us to resize img in low quality
  res.render("listings/edit.ejs", { listing,originalImageUrl });
};

module.exports.UpdateListing = async (req, res) => {
  const { id } = req.params;
  let url = req.file.path;
  let filename = req.file.filename;
  let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
  if(typeof req.file !== 'undefined') {
    listing.image = {url, filename};
    await listing.save();
  }
  req.flash("success", "Successfully updated listing!");
  res.redirect(`/listings/${id}`);
};

module.exports.DestroyListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Successfully deleted listing!");
  res.redirect("/listings");
};

module.exports.searchByTitle = async (req, res) => {
  const { title } = req.query;

  const listings = await Listing.find({
    title: { $regex: title, $options: "i" }
  });

  res.render("listings/index.ejs", { allListings: listings });
};




