import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function getAccount(userRepo) {
  return async (req, res, next) => {
    try {
      const { username } = req.body;
      if (!username) {
        return next(new AppError("No username detected", 400));
      }

      // handle query to DB
      const data = await userRepo.getUser(username);
      const respond = respondHanlder(data, 200, "Data retrieved successfully");
      return res.status(200).json(respond);
    } catch (error) {
      return next(error);
    }
  };
}
