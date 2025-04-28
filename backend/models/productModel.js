import db from "../config/db.js";

export const getAllProducts = async (filters) => {
  let query = "SELECT * FROM products";
  const values = [];

  if (filters.category || filters.brand) {
    query += " WHERE";
    if (filters.category) {
      query += " category = ?";
      values.push(filters.category);
    }
    if (filters.brand) {
      if (filters.category) query += " AND";
      query += " brand = ?";
      values.push(filters.brand);
    }
  }

  if (filters.sort === "low-to-high") {
    query += " ORDER BY price ASC";
  } else if (filters.sort === "high-to-low") {
    query += " ORDER BY price DESC";
  }

  const [rows] = await db.query(query, values);
  return rows;
};
