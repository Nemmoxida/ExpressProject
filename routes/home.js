import getController from "../Controllers/getController.js";
/**
 * @param {ExpressApp} express
 */
export default function Home(express) {
  const controller = getController();

  return controller;
}
