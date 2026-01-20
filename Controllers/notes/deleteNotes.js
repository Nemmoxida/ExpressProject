import respondHanlder from "../../Middleware/respondHandler.js";
import handleDelete from "../useCases/handleDelete.js";

export default function deleteNotes(userRepo) {
  return (req, res, next) => {
    try {
      const noteId = req.query.id;

      try {
        const deleteNote = handleDelete(userRepo, noteId);
      } catch (error) {
        return next(error);
      }

      const respond = respondHanlder(
        null,
        200,
        "Note has been deleted successfully",
      );

      res.status(200).json(respond);
    } catch (err) {
      next(err);
    }
  };
}
