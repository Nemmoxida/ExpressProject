import respondHanlder from "../../Middleware/respondHandler.js";
import handleGet from "../useCases/handleGet.js";

export default function getNotes(userRepo) {
  return async (req, res) => {
    const keyword = req.query.keyword;
    const user = req.user.id;

    // handle query to DB
    try {
      const notes = await handleGet(userRepo, keyword, user);
    } catch (error) {
      return next(error);
    }
    const respond = respondHanlder(notes, 200, "Data recieved successfully");

    return res.status(200).json(respond);
  };
}
