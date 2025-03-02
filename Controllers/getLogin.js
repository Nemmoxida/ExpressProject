import generateToken from "../Token/generateToken.js";

export default function getLogin(jwt) {
  /**
   * @typedef {import('express').Request} Request
   * @typedef {import('express').Response} Response
   */

  /**
   * @param {Request} req
   * @param {Response} res
   * @param {jwt} jwt
   */

  const getLogin = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: "Invalid username or password" });
      return;
    }
    const token = generateToken(jwt, username, password);
    res.status(200).json({ token });
  };

  return getLogin;
}
