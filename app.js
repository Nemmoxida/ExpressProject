import express from "express";
import route from "./routes/index.js";
import server from "./server.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import errorHandling from "./Middleware/errorHandling.js";
import { v4 as uuidv4 } from "uuid";
import mysql from "./Database/Connection.js";
import userRepository from "./Repository/userRepository.js";
import logger from "./log/logger.js";
import morgan from "morgan";

dotenv.config();
const app = express();
const uuid = uuidv4();
const userRepo = new userRepository(mysql);

// Middleware for logging requests
app.use(morgan("dev"));

// Middleware for parsing JSON
app.use(express.json());

// Routes
route(app, express, jwt, uuid, userRepo);

// Error handling
app.use(errorHandling);

// Initiate server
server(app, logger);

export default app;
