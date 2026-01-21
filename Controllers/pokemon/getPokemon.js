import { AppError } from "../../Middleware/customErrorObject.js";
import respondHanlder from "../../Middleware/respondHandler.js";

export default function getPokemon() {
  return async (req, res, next) => {
    const pokemon = req.query.pokemon;

    if (!pokemon) {
      return next(new AppError("Pokemon name not detected", 400));
    }

    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await request.json();

    const respond = respondHanlder(data, 200, "Data success fully retrieved");

    return res.status(200).json(respond);
  };
}
