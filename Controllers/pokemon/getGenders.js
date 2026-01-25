import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function getGenders() {
  return async (req, res, next) => {
    const genders = req.query.gender;
      // validation
    if (!genders) {
        // err handling
        return next(new AppError("Gender not defined", 400));
      }

      const request = await fetch(`https://pokeapi.co/api/v2/gender/${genders}`);
      const data = await request.json();

      const respond = respondHanlder(data, 200, "Data successfully retrieved");

      return res.status(200).json(respond);
      
    } 
  };