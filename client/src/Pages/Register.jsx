import { Card, CardContent } from '@/components/ui/card.jsx'
import { motion } from 'framer-motion'
import Layout from '../Components/Layout.jsx'
import React, { useEffect, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/features/auth/AuthSlice.js';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import { resetRegistered } from '@/features/auth/AuthSlice.js';


export default function Register() {

    const [formData, setFormData] = useState({name : '', email: '', password: '', confirmPassword: ''});
    const {loading, error, registered} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = async (e)=>{
         e.preventDefault();

        try{
            if(formData.password !== formData.confirmPassword){
                    toast.error("Passwords do not match");
                    return;
             }

             
             await dispatch(registerUser(formData)).unwrap();   
             toast.success("Registering your account...");

        }catch(error){
            toast.error("Registration Failed, Please try again");
            console.log(error);
        }
       

        
    }

    useEffect(()=>{

        if(registered){
            toast.success("registeration successful, Pleas Login to continue", autoClose=1000);
            navigate("/login");
            dispatch(resetRegistered());
        }
    },[registered, navigate, dispatch]);

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
                        <h1 className='text-4xl text-center font-bold text-amber-300 mb-6'>Welcome to ShopStack</h1>
                            <h2 className='text-2xl underline text-center font-bold text-white mb-6' >Create Account</h2>
                            <form onSubmit={handleSubmit} className='space-y-6 flex flex-col'>
                                <input type='text' value={formData.name} placeholder='Enter your full name' className='rounded-xl p-2 bg-transparent' onChange={(e)=> setFormData({...formData,name:e.target.value})} required />
                                <input type='email' value={formData.email} placeholder='Enter your email' className='rounded-xl p-2' onChange={(e)=>setFormData({...formData,email:e.target.value})} required />
                                <div className='relative'>
                                    <input value={formData.password} type={showPassword ? "text" : "password"} placeholder='Set Password' className='rounded-xl w-full p-2' onChange={(e)=>setFormData({...formData, password : e.target.value})} />
                                    <span className='absolute right-2 top-2.5 cursor-pointer text-black' onClick={() => setShowPassword(!showPassword)}> {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} </span>

                                </div>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="rounded-xl p-2"
                                    value={formData.confirmPassword}
                                    onChange={(e)=>setFormData({...formData, confirmPassword : e.target.value})}
                                    required
                                />
                                <Button className="cursor-pointer">Register</Button>
                            </form>
                            <p className='mt-1.5 text-sm text-center'>Already have an account? {" "}
                            <Link to="/login" className='underline'>Login</Link>
                            </p>
                        </CardContent>
                    </Card>

                </motion.div>

            </div>
        </Layout>

    )
}
