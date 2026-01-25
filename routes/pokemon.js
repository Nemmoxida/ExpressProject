import getPokemon from "../Controllers/pokemon/getPokemon.js";
import getAbilities from "../Controllers/pokemon/getabilities.js";
import getTypes from "../Controllers/pokemon/getTypes.js";
import getGenders from "../Controllers/pokemon/getGenders.js";
import getStats from "../Controllers/pokemon/getStats.js";
import getCharacteristics from "../Controllers/pokemon/getCharacteristics.js";
import getNatures from "../Controllers/pokemon/getNatures.js";
import getGenerations from "../Controllers/pokemon/getGenerations.js";
import getVersions from "../Controllers/pokemon/getVersions.js";
import getItems from "../Controllers/pokemon/getItems.js";
import getLocations from "../Controllers/pokemon/getLocations.js";

export default function pokemon(express) {
  const router = express.Router();

  // localhost:3000/pokemon
  router.get("/", getPokemon());

  // localhost:3000/pokemon/abbilities
  router.get("/abilities", getAbilities());

  // localhost:3000/pokemon/types
  router.get("/types", getTypes());
  
  // localhost:3000/pokemon/genders
  router.get("/genders", getGenders());
  
  // localhost:3000/pokemon/stats
  router.get("/stats", getStats());

  // localhost:3000/pokemon/characteristics
  router.get("/characteristics", getCharacteristics());

  // localhost:3000/pokemon/natures
  router.get("/natures", getNatures());

  // localhost:3000/pokemon/generations
  router.get("/generations", getGenerations());

  // localhost:3000/pokemon/versions
  router.get("/versions", getVersions());

  // localhost:3000/pokemon/items
  router.get("/items", getItems());

  // localhost:3000/pokemon/locations
  router.get("/locations", getLocations());
  
  return router;
}
