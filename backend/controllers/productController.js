import db from "../models/db.js";

export const getAllProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, sort } = req.query;
    let query = "SELECT * FROM products WHERE 1";
    let params = [];

    if (category) {
      query += " AND category = ?";
      params.push(category);
    }
    if (minPrice) {
      query += " AND price >= ?";
      params.push(minPrice);
    }
    if (maxPrice) {
      query += " AND price <= ?";
      params.push(maxPrice);
    }
    if (sort) {
      if (sort === "low-to-high") {
        query += " ORDER BY price ASC";
      } else if (sort === "high-to-low") {
        query += " ORDER BY price DESC";
      }
    }

    const [products] = await db.query(query, params);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
