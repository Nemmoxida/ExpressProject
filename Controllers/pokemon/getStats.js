import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function getStats() {
  return async (req, res, next) => {
    const stats = req.query.stat;
      // validation
    if (!stats) {
        // err handling
        return next(new AppError("Stat not defined", 400));
      }

      const request = await fetch(`https://pokeapi.co/api/v2/stat/${stats}`);
      const data = await request.json();

      const respond = respondHanlder(data, 200, "Data successfully retrieved");

      return res.status(200).json(respond);
      
    } 
  };