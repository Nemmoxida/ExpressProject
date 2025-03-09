import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD1,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to database", err);
    return;
  }
  console.log("Connected to database");
});
