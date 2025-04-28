import { getAllProducts } from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const filters = {
      category: req.query.category || null,
      brand: req.query.brand || null,
      sort: req.query.sort || null,
    };

    const products = await getAllProducts(filters);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
