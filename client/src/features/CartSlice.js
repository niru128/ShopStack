import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find(ci => ci.product._id === item.product._id);

            if (existItem) {
                existItem.quantity += item.quantity;
            } else {
                state.cartItems.push(item);
            }
        },

        removeCartItem: (state, action) => {
            // ✅ correct key: cartItems
            state.cartItems = state.cartItems.filter(
                (item) => item.product._id !== action.payload
            );
        },

        clearItem: (state) => {
            state.cartItems = [];
        }
    }
});

export const { addToCart, removeCartItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
