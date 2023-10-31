import { getAllCategory } from "./categoryThunk";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    data: [],
    loading: false,
    error:[]
}

const categorySllice = createSlice({
    name: 'category',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllCategory.pending,(state, action)=>{
            state.loading = true;
        })
        .addCase(getAllCategory.fulfilled,(state, action)=>{
            state.loading = false;
            state.data = action.payload;
            
        })
        .addCase(getAllCategory.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default categorySllice.reducer