/**
 * @param {jwt} jwt
 */

export default function generateToken(jwt, username, password) {
  const token = jwt.sign(
    {
      id: username,
      password: password,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1hr" }
  );
  return token;
}
