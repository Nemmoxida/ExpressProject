import respondHanlder from "../../Middleware/respondHandler.js";

export default function getAllAccounts(userRepo) {
  return async (req, res, next) => {
    try {
      const username = req.query.username;

      const result = await userRepo.getAllAccounts();
      const respond = respondHanlder(result, 200, "Successfully fetch data");
      return res.status(200).json(respond);
    } catch (error) {
      return next(error);
    }
  };
}
