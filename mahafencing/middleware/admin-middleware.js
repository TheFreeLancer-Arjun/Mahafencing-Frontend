/**
 * Admin Middleware
 * ------------------
 * Verifies JWT token sent in request headers for authenticated admins.
 * Adds adminId to request object if valid.
 */

const jwt = require("jsonwebtoken");
const { JWT_SECRET_FOR_ADMIN } = require("../config");

/**
 * Middleware to authenticate admin using JWT token.
 * 
 * Expected Header: { token: "<JWT_TOKEN>" }
 * 
 * If token is valid → `req.adminId` is set and `next()` is called.
 * If token is missing or invalid → returns 403 Forbidden.
 */
function adminMiddleware(req, res, next) {
  try {
    const token = req.headers.token;

    if (!token) {
      return res.status(401).json({
        message: "Token missing from headers.",
      });
    }

    const decodedData = jwt.verify(token, JWT_SECRET_FOR_ADMIN);

    if (decodedData && decodedData.adminId) {
      req.adminId = decodedData.adminId;
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
  adminMiddleware,
};
