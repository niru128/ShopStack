import Product from "../models/Product.js";

// Create Product
export const createProduct = async (req, res) => {
    const { name, description, price, image, category, brand, stock } = req.body;

    try {
        const product = new Product({
            name,
            description,
            price,
            image,
            category,
            brand,
            stock,
            user: req.user._id // From protect middleware
        });

        const createdProduct = await product.save();
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: createdProduct
        });

    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ success: false, message: error.message || "Server error" });
    }
};

// Get All Products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: error.message || "Server error" });
    }
};

// Get Single Product
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, data: product });

    } catch (error) {
        console.error("Error fetching product by ID:", error);
        res.status(500).json({ success: false, message: error.message || "Server error" });
    }
};

// Update Product
export const updateProduct = async (req, res) => {
    const { name, description, price, image, category, brand, stock } = req.body;

    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        product.name = name ?? product.name;
        product.description = description ?? product.description;
        product.price = price ?? product.price;
        product.image = image ?? product.image;
        product.category = category ?? product.category;
        product.brand = brand ?? product.brand;
        product.stock = stock ?? product.stock;

        const updatedProduct = await product.save();
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct
        });

    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ success: false, message: error.message || "Server error" });
    }
};

// Delete Product
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        await product.deleteOne();
        res.status(200).json({ success: true, message: "Product deleted successfully" });

    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ success: false, message: error.message || "Server error" });
    }
};

export const searchProducts = async( req, res)=>{
    try{

        const searchTerm = req.query.search || "";
        const products = await Product.find({
            name: { $regex: searchTerm, $options: "i" }
        })
        res.json(products);
    }catch(error){
        console.error("Error searching products:", error);
        res.status(500).json({ success: false, message: error.message || "Server error" });
    }
}
