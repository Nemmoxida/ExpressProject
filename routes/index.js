import Home from "./home.js";
import account from "./account.js";
// import authenticateJWT from "../Token/authenticateJWT.js";
import Notes from "./notes.js";
import pokemon from "./pokemon.js";

export default function routes(app, express, jwt, uuid, userRepo) {
  app.use("/pokemon",  pokemon(express));
  app.use("/account", account(express, jwt, userRepo));
  app.use("/notes", Notes(express, userRepo, uuid));
  app.use("/", Home(express));
}
