import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kermit",
  database: "test",
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to database", err);
    return;
  }
  console.log("Connected to database");
});
