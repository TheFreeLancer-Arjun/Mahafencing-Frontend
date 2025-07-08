/**
 * Course Routes
 * -------------
 * Handles fetching available courses and allowing authenticated users to purchase them.
 */

const { Router } = require("express");
const { CourseModel, PurchaseModle } = require("../db");
const userMiddleware = require("../middleware/user-middleware");

const CourseRouter = Router();

/**
 * GET /
 * Public Route
 * Fetch all available courses.
 */
CourseRouter.get("/", async (req, res) => {
  try {
    const allCourses = await CourseModel.find();

    res.status(200).json({
      allCourses,
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Server error while fetching courses." });
  }
});

/**
 * POST /buy-course
 * Protected Route
 * Allows a logged-in user to buy a course.
 * Checks if user already purchased the course before creating a new purchase record.
 */
CourseRouter.post("/buy-course", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;

  if (!courseId) {
    return res.status(400).json({ message: "Course ID is required." });
  }

  try {
    const alreadyPurchased = await PurchaseModle.findOne({
      UserId: userId,
      CourseId: courseId,
    });

    if (alreadyPurchased) {
      return res.status(409).json({
        message: "You have already purchased this course.",
        purchase: alreadyPurchased,
      });
    }

    const newPurchase = await PurchaseModle.create({
      UserId: userId,
      CourseId: courseId,
    });

    res.status(201).json({
      message: "Course purchased successfully.",
      purchase: newPurchase,
    });
  } catch (error) {
    console.error("Error during course purchase:", error);
    res.status(500).json({
      message: "Something went wrong while purchasing the course.",
    });
  }
});

module.exports = {
  CourseRouter,
};
