import getLogin from "../Controllers/getLogin.js";

/**
 * @param {import('express').Express} express
 */
export default function Login(express) {
  const router = express.Router();
  const auth = getLogin();

  router.get("/", auth);

  return router;
}
