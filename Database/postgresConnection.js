import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
dotenv.config();

const connection = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  // password: "123123123",
  database: process.env.DATABASE,
  // database: "asd",
  port: process.env.DB_PORT,
});

// test connection
connection.connect((err) => {
  if (err) {
    throw new Error("Failed to connect to database");
  }
  return console.log("connected to the database");
});

export default connection;
