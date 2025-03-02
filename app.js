import express from "express";
import route from "./routes/index.js";
import server from "./server.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Routes
route(app, express, jwt);

// Initiate server
server(app);

export default app;
