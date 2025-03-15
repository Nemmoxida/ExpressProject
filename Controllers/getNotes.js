import handleGet from "./useCases/handleGet.js";

export default function getNotes(userRepo) {
  /**
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   */
  const getNotes = async (req, res) => {
    const keyword = req.query.keyword;
    const user = req.user.id;
    const notes = await handleGet(userRepo, keyword, user);

    res.send(notes);
  };

  return getNotes;
}
