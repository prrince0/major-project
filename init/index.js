 
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";

main()
  .then(() => console.log("connected to DB"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  const ownerId = new mongoose.Types.ObjectId(
    "69466383e0377023ca860d79"
  );

  initData.data = initData.data.map(obj => ({
    ...obj,
    owner: ownerId
  }));

  await Listing.insertMany(initData.data);
  console.log("DB initialized with data");
};

initDB();
