import Home from "./home.js";
/**
 * @param {ExpressApp} app
 */
export default function routes(app, express) {
  app.use("/", Home(express));
}
