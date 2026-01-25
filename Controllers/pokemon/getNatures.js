import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function getNatures() {
  return async (req, res, next) => {
    const natures = req.query.nature;
      // validation
    if (!natures) {
        // err handling
        return next(new AppError("Nature not found", 400));
      }

      const request = await fetch(`https://pokeapi.co/api/v2/nature/${natures}`);
      const data = await request.json();

      const respond = respondHanlder(data, 200, "Data successfully retrieved");

      return res.status(200).json(respond);
      
    } 
  };