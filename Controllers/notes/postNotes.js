import { AppError } from "../../Middleware/customErrorObject.js";
import handlePost from "../useCases/handlePost.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function postNotes(userRepo) {
  return async (req, res, next) => {
    try {
      const { title, content } = req.body;
      const user = req.user.id;

      // validation
      if (!user) {
        return next(new AppError("No user detected", 400));
      } else if (!title || !content) {
        return next(new AppError("Note must have a title and content", 400));
      }

      // handle query to DB
      try {
        const post = await handlePost(userRepo, title, content, user);
      } catch (error) {
        return next(error);
      }
      const respond = respondHanlder(
        { title: title, content: content },
        201,
        "Note created successfully",
      );

      res.status(201).json(respond);
    } catch (err) {
      next(err);
    }
  };
}
