import verifyToken from "./verifyToken.js";

/**
 * @param {Express.Request} req
 * @param {Express.Response} res
 */

export default function authenticateJWT(jwt) {
  return (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized need a token" });
    }

    const token = authHeader.split(" ")[1]; // Extract the token from the "Bearer <token>" format
    if (!token) {
      return res.status(401).json({ message: "Unauthorized bearer" });
    }

    const decoded = verifyToken(jwt, token);
    if (!decoded) {
      return res
        .status(401)
        .json({ message: "Unauthorized not allowed token" });
    }

    req.user = decoded;
    next();
  };
}
