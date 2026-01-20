import { AppError } from "../Middleware/customErrorObject.js";
import verifyToken from "./verifyToken.js";

/**
 * @param {Express.Request} req
 * @param {Express.Response} res
 */

export default function authenticateJWT(jwt) {
  return (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return next(new AppError("Unauthorize no token detected", 401));
    }

    // Extract the token from the "Bearer <token>" format
    const token = authHeader.split(" ")[1];
    if (!token) {
      return next(new AppError("Unauthorize bearer", 401));
    }

    // Handle verification, return null if token is invalid
    const decoded = verifyToken(jwt, token);
    if (!decoded) {
      return next(new AppError("Unauthorize invalid token", 401));
    }

    req.user = decoded;
    next();
  };
}
