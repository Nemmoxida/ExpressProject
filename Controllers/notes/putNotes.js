import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";
import handlePut from "../useCases/handlePut.js";

export default function putNotes(userRepo) {
  return async (req, res, next) => {
    try {
      const noteId = req.query.id;
      const { title, content } = req.body;

      // validation
      if (!noteId) {
        return next(new AppError("No noteId detected", 400));
      } else if (!title || !content) {
        return next(new AppError("No title or content detected", 400));
      }

      // handle query to DB
      try {
        const noteChange = await handlePut(userRepo, noteId, title, content);
      } catch (error) {
        return next(error);
      }

      const respond = respondHanlder(
        { title: title, content: content },
        200,
        "Note successfully edited",
      );

      res.status(200).json(respond);
    } catch (err) {
      next(err);
    }
  };
}
