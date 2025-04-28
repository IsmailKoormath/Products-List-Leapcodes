
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// Create the pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "productlist",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Export the promise version
const db = pool.promise();

export default db;
