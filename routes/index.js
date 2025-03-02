import Home from "./home.js";
import Login from "./login.js";
import authenticateJWT from "../Token/authenticateJWT.js";
/**
 * @param {ExpressApp} app
 */
export default function routes(app, express, jwt) {
  app.use("/login", Login(express, jwt));
  app.use("/", authenticateJWT(), Home(express, jwt));
}
