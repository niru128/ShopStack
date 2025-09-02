import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',

    async (_, thunkAPI)=>{
        try{

            const {data} = await axios.get('/api/products');
            return data;
            
        }catch(error){
            return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch products');
        }
    }
)

const productSlice = createSlice({

    name : 'products',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers : (builder) => {

        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

    }
});

export default productSlice.reducer;   // This exports the reducer to be used in the store