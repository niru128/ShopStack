import Layout from '@/components/Layout'
import { Search, Section, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Pages/Navbar.jsx'
import { motion } from 'framer-motion'
import { ShoppingBag, Truck, Star, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export default function Home() {
    return (
        <Layout>
            <div className='min-h-screen flex flex-col bg-gray-50'>
                {/* Navigationo bar */}
                <Navbar />

                <div className='w-full'>

                    {/* hero section */}
                    <section className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20 px-8 text-center'>
                        <motion.h1
                            className='text-4xl md:text-6xl font-bold mb-6'
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Welcome to ShopStack
                        </motion.h1>
                        <motion.p
                            className='text-lg md:text-2xl mb-8'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Your one-stop shop for everything trendy, affordable, and reliable. 🚀
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                        >
                            <Link to='/products' className='bg-white shadow-md text-indigo-500 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 hover:text-blue-600 transition'>Shop Now</Link>

                        </motion.div>

                    </section>

                    {/* feature section */}
                    <section className='py-16 px-6 grid md:grid-cols-4 gap-8 text-centern'>
                        {
                            [{ icon: <ShoppingBag className="w-10 h-10 mx-auto text-indigo-500" />, title: "Wide Range", desc: "Explore thousands of products" },
                            { icon: <Truck className="w-10 h-10 mx-auto text-indigo-500" />, title: "Fast Delivery", desc: "Quick and safe delivery to your door" },
                            { icon: <Star className="w-10 h-10 mx-auto text-indigo-500" />, title: "Top Rated", desc: "Handpicked and highly rated" },
                            { icon: <ShieldCheck className="w-10 h-10 mx-auto text-indigo-500" />, title: "Secure Payment", desc: "100% safe and reliable checkout" },].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className='bg-white p-6 rounded-lg shadow-md'
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.3 }}
                                >
                                    {feature.icon}
                                    <h3 className='text-xl font-semibold mt-4 mb-2'>{feature.title}</h3>
                                    <p className='text-gray-600'>{feature.desc}</p>
                                </motion.div>
                            ))
                        }
                    </section>

                    {/* featured product */}
                    <section className='py-16 px-6 text-center bg-white'>
                        <h2 className='text-3xl font-bold text-center mb-10'>Trending products</h2>
                        <div className='grid md:grid-cols-3 gap-8'>
                            {
                                [1, 2, 3].map((id) => (
                                    <motion.div
                                        key={id}
                                        className='bg-white rounded-2xl shadow hover:shadow-lg transition hover:cursor-pointer cursor-pointer'
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <img
                                            src={`https://picsum.photos/400/300?random=${id}`}
                                            alt="Product"
                                            className="rounded-xl mb-4">

                                        </img>
                                        <h3 className='font-semibold text-lg'>Product {id}</h3>
                                        <p className="text-gray-600 mt-1">$ {(id * 10).toFixed(2)}</p>
                                        <Button className='mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600'>
                                            Add to Cart
                                        </Button>
                                         


                                    </motion.div>
                                ))
                            }
                        </div>
                    </section>

                    {/* footer */}
                    <footer className='bg-gray-800 text-white text-center py-6 mt-auto'>
                        <p>© {new Date().getFullYear()} ShopStack. All Rights Reserved.</p>
                    </footer>
                </div>

            </div>

        </Layout>

    )
}
