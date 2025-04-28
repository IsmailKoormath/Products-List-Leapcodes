import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "productlist",
});

const db = pool.promise();

const initializeDatabase = async () => {
  try {
    await db.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``);
    await db.query(`USE \`${process.env.DB_NAME}\``);

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        image VARCHAR(255) NOT NULL,
        brand VARCHAR(255) NOT NULL,
        description TEXT NOT NULL
      );
    `;
    await db.query(createTableQuery);
    console.log("Database and Table are ready!");
  } catch (error) {
    console.error("Error setting up database:", error.message);
  }
};

initializeDatabase();

export default db;
