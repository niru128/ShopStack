import express from 'express';
import { createProduct, getProductById , getProducts , deleteProduct, updateProduct, searchProducts } from '../controller/ProductController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

//Public Routes

router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/search",searchProducts);

//Protected Routes
router.post("/" , protect,admin , createProduct)
router.put("/:id", protect,admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

export default router;