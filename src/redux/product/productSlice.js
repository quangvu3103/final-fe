import { getAllProduct, getProductByCategoryId } from "./productThunk";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    data: [],
    loading: false,
    error:[]
}

const productSllice = createSlice({
    name: 'product',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProduct.pending,(state, action)=>{
            state.loading = true;
        })
        .addCase(getAllProduct.fulfilled,(state, action)=>{
            state.loading = false;
            state.data = action.payload;
            
        })
        .addCase(getAllProduct.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.payload
        })


        .addCase(getProductByCategoryId.pending,(state, action)=>{
            state.loading = true;
        })
        .addCase(getProductByCategoryId.fulfilled,(state, action)=>{
            state.loading = false;
            state.data = action.payload;
            
        })
        .addCase(getProductByCategoryId.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default productSllice.reducer