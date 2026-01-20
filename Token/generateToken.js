export default function generateToken(jwt, username) {
  const token = jwt.sign(
    {
      id: username,
    },
    process.env.JWT_KEY,
    { expiresIn: "1hr" },
  );
  return token;
}
