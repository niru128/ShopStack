import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../features/ProductSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar.jsx';
import { useNavigate } from 'react-router-dom';

export default function ProductPage() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Real-time search filtering
  useEffect(() => {
    if (products && products.length > 0) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setSingleProduct(null); // reset single product view while typing
    }
  }, [searchTerm, products]);

  // Handle search enter
  const handleSearchEnter = (term) => {
    const exactMatch = products.find(
      (product) => product.name.toLowerCase() === term.toLowerCase()
    );
    if (exactMatch) {
      setSingleProduct(exactMatch); // show single product
      setFilteredProducts([]); // hide list
    } else {
      setSingleProduct(null);
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

  if (loading) return <div className='text-center mt-10'>Loading...</div>;
  if (error) return <div className='text-center text-red-500 mt-10'>Error: {error}</div>;
  if (!products || products.length === 0) return <p className='text-center mt-10'>No products found</p>;

  return (
    <div>
      <Navbar
        onSearch={(term) => setSearchTerm(term)}
        onEnter={handleSearchEnter}
      />

      {singleProduct ? (
        <div className="max-w-md mx-auto mt-10 border p-6 rounded shadow hover:cursor-pointer cursor-pointer hover:shadow-lg transition" onClick={()=>navigate(`/product/${singleProduct._id}`)}>
          <img
            src={singleProduct.image}
            alt={singleProduct.name}
            className="w-full h-80 object-cover rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4">{singleProduct.name}</h2>
          <p className="text-gray-600 mt-2">{singleProduct.description}</p>
          <p className="text-blue-600 font-bold mt-4 text-xl">₹{singleProduct.price}</p>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-4 mt-4 text-indigo-500 text-center">
            Find What You Love
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 hover:cursor-pointer cursor-pointer hover:shadow-4xl transition ">
            {filteredProducts.map((product) => (
              <li
                key={product._id}
                className="border p-4 rounded-lg shadow hover:shadow-lg transition"
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
