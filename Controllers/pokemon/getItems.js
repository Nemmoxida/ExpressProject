import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function getItems() {
  return async (req, res, next) => {
    const items = req.query.item;
      // validation
    if (!items) {
        // err handling
        return next(new AppError("Item not defined", 400));
      }

      const request = await fetch(`https://pokeapi.co/api/v2/item/${items}`);
      const data = await request.json();

      const respond = respondHanlder(data, 200, "Data successfully retrieved");

      return res.status(200).json(respond);
      
    } 
  };