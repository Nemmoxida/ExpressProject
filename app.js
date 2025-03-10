import express from "express";
import route from "./routes/index.js";
import server from "./server.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mysql from "mysql";
import errorHandling from "./Middleware/errorHandling.js";

dotenv.config();
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Routes
route(app, express, jwt, mysql);

// Error handling
app.use(errorHandling);

// Initiate server
server(app);

export default app;
