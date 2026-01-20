/**
 *
 * @param {jwt} jwt
 *
 */

export default function verifyToken(jwt, token) {
  try {
    return jwt.verify(token, process.env.JWT_KEY);
  } catch (err) {
    return null;
  }
}
