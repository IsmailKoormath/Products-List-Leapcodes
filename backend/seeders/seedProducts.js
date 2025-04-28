import db from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

// Real product data with images
const products = [
  [
    "iPhone 15 Pro Max",
    "Mobile",
    1299.99,
    "https://m.media-amazon.com/images/I/81dT7CUY6GL.jpg",
    "Apple",
    "The iPhone 15 Pro Max features a stunning Super Retina XDR display, powerful A17 chip, and an enhanced camera system for professional-grade photography.",
  ],
  [
    "Samsung Galaxy S24 Ultra",
    "Mobile",
    1199.99,
    "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzkqins-539573273?$684_547_PNG$",
    "Samsung",
    "The Samsung Galaxy S24 Ultra offers a beautiful AMOLED display, cutting-edge camera technology, and the new Snapdragon 8 Gen 3 processor.",
  ],
  [
    "MacBook Pro 14 M3",
    "Laptop",
    2399.0,
    "https://m.media-amazon.com/images/I/61RJn0ofUsL.jpg",
    "Apple",
    "With the M3 chip, this MacBook Pro delivers incredible performance and efficiency for professionals who need power and portability.",
  ],
  [
    "Dell XPS 15 (2024)",
    "Laptop",
    1999.99,
    "https://images-cdn.ubuy.co.in/660ce92ad14c010286188098-dell-2024-newest-xps-15-9530-business.jpg",
    "Dell",
    "The Dell XPS 15 is a premium laptop offering excellent performance with the latest Intel processors, a stunning 4K display, and top-tier build quality.",
  ],
  [
    "Sony WH-1000XM5 Headphones",
    "Headphone",
    399.99,
    "https://www.thesonyshop.ca/cdn/shop/products/WH1000XM5L_1.jpg?v=1680535042",
    "Sony",
    "These noise-canceling headphones are perfect for music lovers, featuring superb sound quality, up to 30 hours of battery life, and a comfortable design.",
  ],
  [
    "AirPods Pro 2 (USB-C)",
    "Headphone",
    249.99,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzMLe2losDwznrFJ1moFEXO7nnlGvqRl3Sw&s",
    "Apple",
    "The second-generation AirPods Pro features enhanced Active Noise Cancellation, a new H2 chip for better sound, and a longer-lasting battery.",
  ],
  [
    "Nike Air Force 1 '07",
    "Shoe",
    119.99,
    "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/cf803777-bca4-437c-b00e-6f8abe18bbb4/AIR+FORCE+1+%2707+LV8.png",
    "Nike",
    "An iconic basketball sneaker with a timeless design, combining leather with a cushioned midsole for comfort and style.",
  ],
  [
    "Adidas Ultraboost Light",
    "Shoe",
    149.99,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxKsRzXqVtf53oMK3zaFO-5ueklAKh8QKsw&s",
    "Adidas",
    "These shoes provide an ultra-comfortable fit with Adidas' signature Boost technology, making them perfect for both running and everyday wear.",
  ],
  [
    'Samsung 65" QN90C Neo QLED 4K TV',
    "Electronic",
    1799.99,
    "https://images.samsung.com/is/image/samsung/p6pim/in/qa65qn90caklxl/gallery/in-qled-qn90c-455012-qa65qn90caklxl-thumb-535909530?$UX_EXT1_PNG$",
    "Samsung",
    "This 65-inch 4K Neo QLED TV offers vibrant colors, deep blacks, and an immersive viewing experience with advanced AI upscaling technology.",
  ],
  [
    "Apple Watch Ultra 2",
    "Wearable",
    799.99,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTREE7BUL1Y6w8V6GyEbPt0OVicKM5ZYd_g&s",
    "Apple",
    "The Apple Watch Ultra 2 is built for extreme durability and performance, with a larger display, robust GPS features, and extended battery life for adventure seekers.",
  ],
];

async function seedProducts() {
  try {
    console.log("Seeding products...");

    // Optional: Clear existing products first
    await db.query("DELETE FROM products");

    for (const product of products) {
      await db.query(
        "INSERT INTO products (name, category, price, image, brand, description) VALUES (?, ?, ?, ?, ?, ?)",
        product
      );
    }

    console.log(" Products seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error(" Failed to seed products:", error.message);
    process.exit(1); 
  }
}

seedProducts();
