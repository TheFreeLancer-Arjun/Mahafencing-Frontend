/**
 * User Routes for Signup, Login, and Purchase History
 * ---------------------------------------------------
 * This router handles user-related operations such as:
 * - Signing up a new user
 * - Logging in an existing user
 * - Retrieving the list of purchased courses by the user
 */

const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z } = require("zod");

const { JWT_SECRET_FOR_USER } = require("../config");
const { UserModel, PurchaseModle, CourseModel } = require("../db");
const userMiddleware = require("../middleware/user-middleware");

const UserRouter = Router();

/**
 * POST /signup
 * Registers a new user after validating input and hashing the password.
 */
UserRouter.post("/signup", async (req, res) => {
  const SignupSchema = z.object({
    firstName: z.string().min(3).max(10),
    lastName: z.string().min(3).max(10),
    email: z.string().email().max(30),
    password: z.string().min(3).max(20),
  });

  const parsed = SignupSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.errors });
  }

  const { firstName, lastName, email, password } = parsed.data;

  const existingUser = await UserModel.findOne({ Email: email });
  if (existingUser) {
    return res.status(409).json({ message: "User already exists." });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await UserModel.create({
    FirstName: firstName,
    LastName: lastName,
    Password: hashPassword,
    Email: email,
  });

  res.status(201).json({
    message: "User signed up successfully.",
    userId: user._id,
  });
});

/**
 * POST /login
 * Authenticates a user and returns a JWT token if successful.
 */
UserRouter.post("/login", async (req, res) => {
  const LoginSchema = z.object({
    email: z.string().email().max(30),
    password: z.string().min(3).max(20),
  });

  const parsed = LoginSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.errors });
  }

  const { email, password } = parsed.data;

  const user = await UserModel.findOne({ Email: email });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  const passwordMatch = await bcrypt.compare(password, user.Password);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  const token = jwt.sign({ userId: user._id.toString() }, JWT_SECRET_FOR_USER, {
    expiresIn: "7d",
  });

  res.status(200).json({
    message: "Login successful.",
    token: token,
  });
});

/**
 * GET /purchases
 * Returns the list of courses purchased by the authenticated user.
 */
UserRouter.get("/purchases", userMiddleware, async (req, res) => {
  const userId = req.userId;

  try {
    const purchases = await PurchaseModle.find({ UserId: userId });
    if (purchases.length === 0) {
      return res.json({ message: "No courses purchased." });
    }

    const courseIds = purchases.map((p) => p.CourseId);
    const courses = await CourseModel.find({ _id: { $in: courseIds } });

    res.json({
      purchases,
      courses,
    });
  } catch (error) {
    console.error("Error fetching purchases:", error);
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = {
  UserRouter,
};
