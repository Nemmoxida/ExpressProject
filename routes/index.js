import Home from "./home.js";
import Login from "./login.js";
/**
 * @param {ExpressApp} app
 */
export default function routes(app, express) {
  app.use("/login", Login(express));
  app.use("/", Home(express));
}
