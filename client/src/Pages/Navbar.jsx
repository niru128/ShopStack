import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingCart, User } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../features/auth/AuthSlice.js'

export default function Navbar({ onSearch, onEnter }) {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const { cartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    // const [openDialog, setOpenDialog] = useState(false);


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch && onSearch(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onEnter && onEnter(searchTerm);
        }
    };

   


    return (
        <nav className='bg-white shadow-md top-0 z-50 sticky '>
            <div className='flex max-w-7xl mx-auto px-1 py-4  items-center justify-between'>

                {/* logo */}
                <Link to='/' className='text-indigo-400 text-3xl font-bold'>ShopStack</Link>


                {/* search bar */}
                <div className='hidden md:flex items-center bg-gray-100 px-3 py-1 w-1/3 rounded-lg'>
                    <Search className='text-gray-500 w-5 h-5' />
                    <input type='text' placeholder='Search products...' className='bg-transparent outline-none  ml-2 w-full' value={searchTerm} onChange={handleSearch} onKeyDown={handleKeyPress} />
                </div>

                {/* nav links */}
                <div className='space-x-10 flex items-center'>
                    <Link to='/' className='text-gray-600 font-bold hover:text-indigo-400'>Home</Link>
                    <Link to='/products' className='text-gray-600 font-bold hover:text-indigo-400'>Products</Link>
                    <Link
                        to="/cart"
                        className="text-gray-600 font-bold hover:text-indigo-400 relative"
                    >
                        <ShoppingCart className="w-6 h-6" />

                        {/* Badge */}
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                        </span>
                    </Link>

                    <Link to='/about' className='text-gray-600 font-bold hover:text-indigo-400'>
                        About us
                    </Link>

                    <Link to='/profile' className='text-gray-600 hover:text-indigo-400 font-bold  flex items-center space-x-0.5' >
                        <User className='w-6 h-6'  />

                    </Link>
                </div>
            </div>

        </nav>
    )
}
