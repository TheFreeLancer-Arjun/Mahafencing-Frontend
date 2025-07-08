const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const GalleryHomeSchema = new Schema({
  Description: String,
  ImageUrl: String,
  SelectSize: String,
});

const CarouselSchema = new Schema({
  ImageUrl: String,
});

const StateAwardSchema = new Schema({
  Name: String,
  Location: String,
  ImageUrl: String,
  Select: String,
});

const StateAwardModel = mongoose.model("state-award", StateAwardSchema);

const GalleryHomeModel = mongoose.model("gallery-home", GalleryHomeSchema);

const CarouselModel = mongoose.model("carousel-image", CarouselSchema);

module.exports = {
  GalleryHomeModel,
  CarouselModel,
  StateAwardModel,
};
