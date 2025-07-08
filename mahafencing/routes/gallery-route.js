const { Router } = require("express");
const { GalleryHomeModel } = require("../db");

const GalleryRouter = Router();

GalleryRouter.post("/add-gallery-home", async function (req, res) {
  const { description, imageUrl, size } = req.body;

  const gallery = await GalleryHomeModel.create({
    Description: description,
    ImageUrl: imageUrl,
    SelectSize: size,
  });

  res.json({
    Message: "Photo Added SuccesFUlly",
  });

  
  if (gallery) {
    res.json({    Message: "Photo Added SuccesFUlly", });
  } else {
    res.status(404).json({    Message: "Photo not Added ",});
  }
});

GalleryRouter.delete("/delete-gallery-home", async function (req, res) {
  const GalleryID = req.body;

  const result = await GalleryHomeModel.deleteOne({ _id: GalleryID });

  if (result) {
    res.json({ message: "Course deleted successfully." });
  } else {
    res.status(404).json({ message: "Course not found or not authorized." });
  }
});

GalleryRouter.get("/all-gallery-home", async function (req, res) {
  const gallery = await GalleryHomeModel.find();

  if (gallery) {
    res.json({ allCourses: gallery });
  } else {
    res.json({ message: "No image" });
  }
});
