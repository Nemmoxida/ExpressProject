import getPokemon from "../Controllers/pokemon/getPokemon.js";

export default function pokemon(express) {
  const router = express.Router();

  // localhost:3000/pokemon
  router.get("/", getPokemon());

  // localhost:3000/pokemon/abbilities
  // router.get("/abilities");

  return router;
}
