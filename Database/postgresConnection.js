import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
dotenv.config();

const connection = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

// test connection
connection.connect((err) => {
  if (err) {
    return console.log(err);
  }
  return console.log("connected to the database");
});

export default connection;
