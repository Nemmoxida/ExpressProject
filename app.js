import express from "express";
import route from "./routes/index.js";
import server from "./server.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import errorHandling from "./Middleware/errorHandling.js";
import { v4 as uuidv4 } from "uuid";
// import mysql from "./Database/mysqlConnection.js";
import postgres from "./Database/postgresConnection.js";
// import mysqlRepository from "./Repository/mysqlRepository.js";
import pgRepository from "./Repository/pgRepository.js";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import fs from "fs";
const swaggerSpec = JSON.parse(fs.readFileSync("./swagger.json", "utf-8"));

dotenv.config();
const app = express();
const uuid = uuidv4();

// Change the database to you spesific use either mysql or postgres
// const userRepo = new mysqlRepository(mysql);
// const userRepo = new pgRepository(postgres);
const userRepo = "asd";

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Middleware for logging requests
app.use(morgan("dev"));

// Middleware for parsing JSON
app.use(express.json());

// Routes
route(app, express, jwt, uuid, userRepo);

// Error handling
app.use(errorHandling);

// Initiate server
server(app);

export default app;
