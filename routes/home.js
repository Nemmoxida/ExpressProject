import getHome from "../Controllers/getHome.js";

/**
 * @param {ExpressApp} express
 */
export default function Home(express, jwt) {
  const router = express.Router();
  const home = getHome();

  router.get("/", home);

  return router;
}
