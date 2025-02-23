import express from "express";
import route from "./routes/index.js";
import server from "./server.js";
const app = express();

app.use(express.json());
route(app, express);

server(app);

export default app;
