import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function getGenerations() {
  return async (req, res, next) => {
    const generations = req.query.generation;
      // validation
    if (!generations) {
        // err handling
        return next(new AppError("Generation not defined", 400));
      }

      const request = await fetch(`https://pokeapi.co/api/v2/generation/${generations}`);
      const data = await request.json();

      const respond = respondHanlder(data, 200, "Data successfully retrieved");

      return res.status(200).json(respond);
      
    } 
  };