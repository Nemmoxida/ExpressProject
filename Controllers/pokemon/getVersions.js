import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function getVersion() {
  return async (req, res, next) => {
    const versions = req.query.version;
      // validation
    if (!versions) {
        // err handling
        return next(new AppError("Version not defined", 400));
      }

      const request = await fetch(`https://pokeapi.co/api/v2/version/${versions}`);
      const data = await request.json();

      const respond = respondHanlder(data, 200, "Data successfully retrieved");

      return res.status(200).json(respond);
      
    } 
  };