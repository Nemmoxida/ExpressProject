import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function getTypes() {
  return async (req, res, next) => {
    const types = req.query.type;
      // validation
    if (!types) {
        // err handling
        return next(new AppError("Types name not detected", 400));
      }

      const request = await fetch(`https://pokeapi.co/api/v2/type/${types}`);
      const data = await request.json();

      const respond = respondHanlder(data, 200, "Data successfully retrieved");

      return res.status(200).json(respond);
      
    } 
  };