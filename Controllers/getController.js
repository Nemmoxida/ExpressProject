export default function getController() {
  /**
   * @param {Express.Request} req
   * @param {Express.Response} res
   */

  const getData = (req, res) => {
    res.send("Hello World");
  };
  return getData;
}
