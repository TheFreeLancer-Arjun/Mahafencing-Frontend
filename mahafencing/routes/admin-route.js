/**
 * Admin Routes
 * ------------
 * Handles admin signup, login, and course management.
 */

const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AdminModel, CourseModel } = require("../db");
const { JWT_SECRET_FOR_ADMIN } = require("../config");
const adminMiddleware = require("../middleware/admin-middleware");

const AdminRouter = Router();

/**
 * POST /signup
 * Admin Registration
 */
AdminRouter.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await AdminModel.create({
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: hashPassword,
    });

    res.status(201).json({
      message: "Admin signed up successfully.",
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error during signup." });
  }
});

/**
 * POST /login
 * Admin Login with JWT authentication
 */
AdminRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await AdminModel.findOne({ Email: email });

    if (!admin) {
      return res.status(401).json({ message: "Admin does not exist." });
    }

    const isMatch = await bcrypt.compare(password, admin.Password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { adminId: admin._id.toString() },
      JWT_SECRET_FOR_ADMIN,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login." });
  }
});

/**
 * POST /create-course
 * Create a new course by an authenticated admin
 */
AdminRouter.post("/create-course", adminMiddleware, async (req, res) => {
  try {
    const creatorId = req.adminId;
    const { title, description, price, imageUrl } = req.body;

    const course = await CourseModel.create({
      Title: title,
      Description: description,
      Price: price,
      ImageUrl: imageUrl,
      CreatorId: creatorId,
    });

    res.status(201).json({
      message: `Course created with ID: ${course._id}`,
      courseId: course._id,
    });
  } catch (error) {
    console.error("Course creation error:", error);
    res.status(500).json({ message: "Course not created due to server error." });
  }
});

/**
 * DELETE /delete-course
 * Delete a course created by the authenticated admin
 */
AdminRouter.delete("/delete-course", adminMiddleware, async (req, res) => {
  try {
    const courseId = req.body.courseId;
    const creatorId = req.adminId;

    const result = await CourseModel.deleteOne({
      CreatorId: creatorId,
      _id: courseId,
    });

    if (result.deletedCount > 0) {
      res.json({ message: "Course deleted successfully." });
    } else {
      res.status(404).json({ message: "Course not found or not authorized." });
    }
  } catch (error) {
    console.error("Course deletion error:", error);
    res.status(500).json({ message: "Server error during deletion." });
  }
});

/**
 * PUT /add-course-content
 * Update course details by the creator admin
 */
AdminRouter.put("/add-course-content", adminMiddleware, async (req, res) => {
  try {
    const creatorId = req.adminId;
    const { title, description, price, imageUrl, courseId } = req.body;

    const update = await CourseModel.updateOne(
      { CreatorId: creatorId, _id: courseId },
      {
        Title: title,
        Description: description,
        Price: price,
        ImageUrl: imageUrl,
      }
    );

    if (update.modifiedCount > 0) {
      res.json({ message: "Course updated successfully." });
    } else {
      res.status(403).json({
        message: "You are not authorized to update this course.",
      });
    }
  } catch (error) {
    console.error("Course update error:", error);
    res.status(500).json({ message: "Server error during update." });
  }
});

/**
 * GET /all-courses
 * Get all courses created by the logged-in admin
 */
AdminRouter.get("/all-courses", adminMiddleware, async (req, res) => {
  try {
    const creatorId = req.adminId;
    const courses = await CourseModel.find({ CreatorId: creatorId });

    if (courses.length > 0) {
      res.json({ allCourses: courses });
    } else {
      res.json({ message: "No courses found for this admin." });
    }
  } catch (error) {
    console.error("Fetch courses error:", error);
    res.status(500).json({ message: "Server error while fetching courses." });
  }
});

module.exports = {
  AdminRouter,
};
