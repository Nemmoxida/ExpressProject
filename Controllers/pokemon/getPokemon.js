import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function getPokemon() {
  return async (req, res, next) => {
    // extrack the pokemon that client will request
    const pokemon = req.query.pokemon;

    // validation
    if (!pokemon) {
      // err handling
      return next(new AppError("Pokemon name not detected", 400));
    }
    
    // request to external API
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await request.json();
    
    // for respond
    const respond = respondHanlder(data, 200, "Data success fully retrieved");
    
    return res.status(200).json(respond);
  };
}
