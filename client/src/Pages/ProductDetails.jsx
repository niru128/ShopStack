import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/CartSlice';

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [quantity,setquantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchProducts = async () => {

            try {
                const { data } = await axios.get(`/api/products/${id}`);
                setProduct(data.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setLoading(false);
            }

        }

        fetchProducts();
    }, [id])

    const handleCart = ()=>{
        if(product.stock > 0){
            dispatch(addToCart({product,quantity}))
            toast.success(`${product.name} added to cart`)
        }
    }


    if (loading) return <div className='text-center mt-10'>Loading...</div>;
    if (!product) return <p className='text-center mt-10'>Product not found</p>;



    return (
        <div>
            <Navbar />

            <div className='max-w-7xl mx-auto mt-10 flex flex-col md:flex-row p-6 gap-10'>
                <div className='md:w-1/2'>
                    <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-md shadow-md hover:scale-105 ease-in-out transition-transform hover:cursor-pointer duration-300" />
                </div>
                <div className='md:w-1/2 space-y-4 flex flex-col justify-start '>

                    <h1 className='text-4xl font-bold'>{product.name}</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-500 text-xl">
                            {'★'.repeat(Math.round(product.rating || 0))}
                            {'☆'.repeat(5 - Math.round(product.rating || 0))}
                        </span>
                        <span className="text-gray-600 text-sm">
                            {product.rating ? product.rating.toFixed(1) : 'No rating'}
                        </span>
                    </div>
                    <p className='text-gray-600'>{product.description}</p>
                    <p className='text-2xl text-indigo-600 font-bold'>₹{product.price}</p>
                    <p className='text-gray-800'><span className='font-semibold'>Category:</span> {product.category}</p>
                    <p className='text-gray-800'><span className='font-semibold'>Brand:</span> {product.brand}</p>
                    <p className='text-gray-800'><span className='font-semibold'>Stock:</span> {product.stock > 0 ? product.stock : "Out of Stock"}</p>
                    <div>
                        <span className='font-semibold'>Qty:</span>
                        <input type='number' min={1} max={product.stock}value={quantity} className='border w-16 text-center ml-2 p-1 rounded' onChange={e=>setquantity(Number(e.target.value))} />
                    </div>

                    <Button disabled={product.stock === 0} className='w-44 bg-yellow-400 hover:bg-amber-500 cursor-pointer text-black p-2' onClick={handleCart} >Add to Cart</Button>
                    
                </div>
            </div>

        </div>
    )
}
