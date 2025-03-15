import Home from "./home.js";
import Login from "./login.js";
import authenticateJWT from "../Token/authenticateJWT.js";
import Notes from "./notes.js";
/**
 * @param {ExpressApp} app
 */
export default function routes(app, express, jwt, uuid, userRepo) {
  app.use("/login", Login(express, jwt));
  app.use("/notes", authenticateJWT(jwt), Notes(express, userRepo, uuid));
  app.use("/", authenticateJWT(jwt), Home(express));
}
