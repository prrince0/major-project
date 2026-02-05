const express = require("express");
const router = express.Router();

const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/wrapAsync");
const { listingSchema } = require("../schema");
const { isOwner,isLoggedIn, saveRedirectUrl } = require("../middleware.js");
const listingController = require("../controller/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// validation middleware
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errmsg = error.details.map(el => el.message).join(",");
    throw new ExpressError(400, errmsg);
  }
  next();
};


router
 .route("/")
 .get(wrapAsync(listingController.Index))
  .post(
    isLoggedIn,
    validateListing,
    upload.single("listing[image]"),
   wrapAsync(listingController.CreateListing)
);


// search operation

router.get("/search", wrapAsync(listingController.searchByTitle));

// NEW FORM
router.get("/new",isLoggedIn, (listingController.Rendernew));


router.get("/:id/edit",
  saveRedirectUrl,
  isLoggedIn, wrapAsync
  (listingController.EditListing)
);


router.route("/:id")
.get( wrapAsync(listingController.ShowListing))
.put( validateListing, isLoggedIn, isOwner,
  upload.single("listing[image]"),
   wrapAsync(listingController.UpdateListing))
.delete(isLoggedIn,wrapAsync(listingController.DestroyListing));


 module.exports = router;
