import generateToken from "../../Token/generateToken.js";
import { AppError } from "../../Middleware/customErrorObject.js";
import errorHandler from "../../Middleware/errorHandling.js";
import respondHanlder from "../../Middleware/respondHandler.js";
import bcrypt from "bcrypt";

export default function getLogin(jwt, userRepo) {
  return async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return next(new AppError("No username or password detected", 400));
    }

    const getUsername = await userRepo.getUser(username);
    if (!getUsername) {
      return next(new AppError("No user exist", 400));
    }

    const validate = bcrypt.compareSync(password, getUsername[0].password);
    if (validate == false) {
      return next(new AppError("Wrong password", 400));
    }

    const token = generateToken(jwt, username);
    const respond = respondHanlder({ token: token }, 200, "Login successful");

    return res.status(200).json(respond);
  };
}
