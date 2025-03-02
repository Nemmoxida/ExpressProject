/**
 *
 * @param {jwt} jwt
 *
 */

export default function verifyToken(jwt, token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
}
