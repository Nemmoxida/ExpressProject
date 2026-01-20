import getPokemon from "../Controllers/pokemon/getPokemon.js";

export default function pokemon(express) {
  console.log("hei");
  const router = express.Router();

  router.get("/", getPokemon());

  return router;
}
