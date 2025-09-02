import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './features/ProductSlice.js'
import AuthReducer from './features/auth/AuthSlice.js';
import cartReducer from './features/CartSlice.js'

export const store = configureStore({
    reducer : {
        products : ProductReducer,
        auth : AuthReducer,
        cart : cartReducer,
    },
});