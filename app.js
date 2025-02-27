import express from "express";
import route from "./routes/index.js";
import server from "./server.js";
// import Database from "./Database/Connection.js";
const app = express();

app.use(express.json());
route(app, express);

server(app);

export default app;
