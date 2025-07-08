/**
 * User Middleware
 * -----------------
 * Verifies JWT token sent in request headers for authenticated users.
 * Adds userId to request object if valid.
 */

const jwt = require("jsonwebtoken");
const { JWT_SECRET_FOR_USER } = require("../config");

/**
 * Middleware to authenticate user using JWT token
 * 
 * Expected Header: { token: "<JWT_TOKEN>" }
 * 
 * If token is valid → `req.userId` is set and `next()` is called.
 * If token is missing or invalid → returns 403 Forbidden.
 */
function userMiddleware(req, res, next) {
  try {
    const token = req.headers.token;

    if (!token) {
      return res.status(401).json({
        message: "Token missing from headers.",
      });
    }

    const decodedData = jwt.verify(token, JWT_SECRET_FOR_USER);

    if (decodedData && decodedData.userId) {
      req.userId = decodedData.userId;
      next();
    } else {
      return res.status(403).json({
        message: "Invalid token payload.",
      });
    }
  } catch (error) {
    return res.status(403).json({
      message: "Invalid or expired token.",
    });
  }
}

module.exports = {
  userMiddleware,
};
