
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login'
import ProductPage from './Pages/ProductPage'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails.jsx'
import CartPage from './Pages/CartPage'
import About from './Pages/About'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element= {<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </Router>
  )
}

export default App
