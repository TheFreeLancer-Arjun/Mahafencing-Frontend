const { Router } = require("express");
const { CarouselModel } = require("../db");

const CarouselRouter = Router();

CarouselRouter.post("/add-carousel", async function (req, res) {
  const { imageUrl } = req.body;

  const carousel = await CarouselModel.create({
    ImageUrl: imageUrl,
  });

  if (carousel) {
    res.json({ message: "carousel ADDED successfully." });
  } else {
    res.status(404).json({ message: "not ADDED" });
  }
});

CarouselRouter.delete("/delete-carousel", async function (req, res) {
  const CarouselID = req.body;

  const result = await CarouselModel.deleteOne({ _id: CarouselID });

  if (result) {
    res.json({ message: "Carousel deleted successfully." });
  } else {
    res.status(404).json({ message: "not deleted" });
  }
});

CarouselRouter.get("/all-carousel", async function (req, res) {
  const carousel = await CarouselModel.find();

  if (carousel) {
    res.json({ allCourses: carousel });
  } else {
    res.json({ message: "No Carousel" });
  }
});
