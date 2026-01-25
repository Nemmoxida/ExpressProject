import getAccount from "../Controllers/accounts/getAccout.js";
import getAllAccounts from "../Controllers/accounts/getAllAccounts.js";
import getLogin from "../Controllers/accounts/getLogin.js";
import signUp from "../Controllers/accounts/signup.js";

export default function Login(express, jwt, userRepo) {
  const router = express.Router();
  const auth = getLogin(jwt, userRepo);
  const signup = signUp(userRepo);

  router.post("/getAccouts", getAccount(userRepo));
  router.get("/getAllAccouts", getAllAccounts(userRepo));
  router.post("/login", auth);
  router.post("/signup", signup);

  return router;
}
