import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function getAbilities() {
  return async (req, res, next) => {
    const abilities = req.query.ability;
      // validation
    if (!abilities) {
        // err handling
        return next(new AppError("Ability name not detected", 400));
      }

      const request = await fetch(`https://pokeapi.co/api/v2/ability/${abilities}`);
      const data = await request.json();

      const respond = respondHanlder(data, 200, "Data successfully retrieved");

      return res.status(200).json(respond);
      
    } 
  };