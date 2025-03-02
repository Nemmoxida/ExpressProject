import getLogin from "../Controllers/getLogin.js";

/**
 * @param {import('express').Express} express
 */
export default function Login(express, jwt) {
  const router = express.Router();
  const auth = getLogin(jwt);

  router.post("/", auth);

  return router;
}
