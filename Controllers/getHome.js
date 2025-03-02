export default function getHome() {
  /**
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @param {mysql} db
   */

  const getData = (req, res) => {
    res.send(`Welcome to the home page ${req.user.id}`);
  };
  return getData;
}
