import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
dotenv.config();

const createConnection = () => {
  return mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10,
  });
};

const pool = createConnection();

// Test the connection
pool
  .getConnection()
  .then((connection) => {
    console.log("Connected to database");
    connection.release(); // Release the connection back to the pool
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

export default pool;
