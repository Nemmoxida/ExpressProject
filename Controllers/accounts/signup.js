import { AppError } from "../../Middleware/customErrorObject.js";
import bcrypt from "bcrypt";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function signUp(userRepo) {
  return async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return next(new AppError("No username and password detected", 400));
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    try {
      const result = await userRepo.addUser(username, hashedPassword);
      const respond = respondHanlder(
        null,
        201,
        "Signup completed successfully",
      );
      return res.status(201).json(respond);
    } catch (error) {
      return next(error);
    }
  };
}
