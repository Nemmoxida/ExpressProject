import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function getLocations() {
  return async (req, res, next) => {
    const locations = req.query.location;
      // validation
    if (!locations) {
        // err handling
        return next(new AppError("Location not defined", 400));
      }

      const request = await fetch(`https://pokeapi.co/api/v2/location/${locations}`);
      const data = await request.json();

      const respond = respondHanlder(data, 200, "Data successfully retrieved");

      return res.status(200).json(respond);
      
    } 
  };