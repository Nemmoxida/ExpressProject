export default function getLogin() {
  /**
   * @typedef {import('express').Request} Request
   * @typedef {import('express').Response} Response
   */

  /**
   * @param {Request} req
   * @param {Response} res
   */
  const getLogin = (req, res) => {
    // const username = req.query.username; // Use req.query to get query parameters

    // if (!username) {
    //   return res.status(400).send("Username is required");
    // }

    // res.status(200).send(`Hello ${username}`);
    res.status(200).send(req.body);
  };

  return getLogin;
}
