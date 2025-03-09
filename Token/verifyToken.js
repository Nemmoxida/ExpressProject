/**
 *
 * @param {jwt} jwt
 *
 */

export default function verifyToken(jwt, token) {
  try {
    return jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    return null;
  }
}
