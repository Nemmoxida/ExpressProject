export default function getNotes(mysql) {
  /**
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   */
  const getNotes = (req, res) => {
    res.send(`Welcome to the getNotes ${req.user.id}`);
  };

  return getNotes;
}
