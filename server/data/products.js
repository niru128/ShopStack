const products = [
  {
    name: "Classic White T-Shirt",
    description: "Soft cotton t-shirt perfect for casual wear.",
    price: 499,
    image: "https://picsum.photos/seed/tshirt1/300/300",
    category: "Clothing",
    brand: "UrbanWear",
    stock: 50,
  },
  {
    name: "Slim Fit Jeans",
    description: "Blue slim fit denim jeans with stretch fabric.",
    price: 1499,
    image: "https://picsum.photos/seed/jeans1/300/300",
    category: "Clothing",
    brand: "DenimX",
    stock: 30,
  },
  {
    name: "Wireless Earbuds",
    description: "Noise-cancelling Bluetooth earbuds with charging case.",
    price: 2999,
    image: "https://picsum.photos/seed/earbuds/300/300",
    category: "Electronics",
    brand: "SoundBeat",
    stock: 70,
  },
  {
    name: "Gaming Laptop",
    description: "High-performance laptop with RTX graphics card.",
    price: 89999,
    image: "https://picsum.photos/seed/laptop1/300/300",
    category: "Electronics",
    brand: "GamePro",
    stock: 15,
  },
  {
    name: "Cooking for Beginners",
    description: "A complete guide for beginners in cooking.",
    price: 399,
    image: "https://picsum.photos/seed/book1/300/300",
    category: "Books",
    brand: "KitchenPress",
    stock: 100,
  },
];

// Generate 50–100 items by duplicating with slight variations
for (let i = 0; i < 50; i++) {
  products.push({
    name: `Casual Shirt ${i + 1}`,
    description: "Trendy casual shirt made from premium fabric.",
    price: 799 + i * 10,
    image: `https://picsum.photos/seed/shirt${i}/300/300`,
    category: "Clothing",
    brand: "UrbanWear",
    stock: 40,
  });

  products.push({
    name: `Smartphone Model ${i + 1}`,
    description: "Latest smartphone with high-speed performance.",
    price: 14999 + i * 100,
    image: `https://picsum.photos/seed/phone${i}/300/300`,
    category: "Electronics",
    brand: "TechZone",
    stock: 25,
  });

  products.push({
    name: `Novel Book ${i + 1}`,
    description: "A best-selling fiction novel.",
    price: 299 + i * 5,
    image: `https://picsum.photos/seed/book${i}/300/300`,
    category: "Books",
    brand: "ReadersHub",
    stock: 80,
  });
}

export default products;
