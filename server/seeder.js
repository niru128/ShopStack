import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import products from "./data/products.js";
import connectDB from "./config/db.js";

dotenv.config();

const importData = async () => {
  try {
    await connectDB();
    await Product.deleteMany(); // Clear old products
    const createdProducts = await Product.insertMany(products);
    console.log(`✅ Inserted ${createdProducts.length} products`);
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
