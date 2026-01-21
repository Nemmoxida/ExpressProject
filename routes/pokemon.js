import getPokemon from "../Controllers/pokemon/getPokemon.js";

export default function pokemon(express) {
  const router = express.Router();

  router.get("/", getPokemon());

  return router;
}
