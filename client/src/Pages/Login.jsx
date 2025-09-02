import { Card, CardContent } from '@/components/ui/card.jsx'
import { motion } from 'framer-motion'
import Layout from '../Components/Layout.jsx'
import React, { useEffect, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { loginUser } from '@/features/auth/AuthSlice.js';


export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({email: '', password: ''});
    const {user,laoding, error} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            await dispatch(loginUser(formData)).unwrap();
            toast.success("Login Successful, Welcome back!", autoClose=1000);

        }catch(error){
            toast.error("Login Failed, Please check your credentials");
        }
        
    }
    
    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[user, navigate]);
    
    return (
        <Layout>
            <div className='h-screen flex items-center justify-center bg-gradient-to-tr from-teal-400 via-blue-500 to-indigo-600'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Card className="w-[450px] shadow-2xl rounded-2xl backdrop-blur bg-white/20" >
                        <CardContent className="p-6">
                        <h1 className='text-4xl text-center font-bold text-amber-300 mb-6'> Welcome Back 👋</h1>
                            {/* <h2 className='text-2xl underline text-center font-bold text-white mb-6' >Create Account</h2> */}
                            <form onSubmit={handleSubmit} className='space-y-6 flex flex-col'>
                                {/* <input type='text' placeholder='Enter your full name' className='rounded-xl p-2 bg-transparent' required /> */}
                                <input type='email' placeholder='Enter your email' value={formData.email} className='rounded-xl p-2' onChange={(e)=>setFormData({...formData,email:e.target.value})} required />
                                <div className='relative'>
                                    <input type={showPassword ? "text" : "password"} placeholder='Set Password' value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} className='rounded-xl w-full p-2' />
                                    <span className='absolute right-2 top-2.5 cursor-pointer text-black' onClick={() => setShowPassword(!showPassword)}> {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} </span>

                                </div>
                               
                                <Button className="cursor-pointer">Login</Button>
                            </form>
                            <p className='mt-1.5 text-sm text-center'>Don't have an account? {" "}
                            <Link to="/register" className='underline'>Register</Link>
                            </p>
                        </CardContent>
                    </Card>

                </motion.div>

            </div>
        </Layout>

    )
}
