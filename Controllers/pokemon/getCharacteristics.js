import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function getCharacteristics() {
  return async (req, res, next) => {
    const characteristics = req.query.characteristic;
      // validation
    if (!characteristics) {
        // err handling
        return next(new AppError("Characteristic not defined", 400));
      }

      const request = await fetch(`https://pokeapi.co/api/v2/characteristic/${characteristics}`);
      const data = await request.json();

      const respond = respondHanlder(data, 200, "Data successfully retrieved");

      return res.status(200).json(respond);
      
    } 
  };