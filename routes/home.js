import getHome from "../Controllers/getHome.js";

export default function Home(express) {
  const router = express.Router();
  const home = getHome();

  router.get("/", home);

  return router;
}
