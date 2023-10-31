import { createAsyncThunk } from "@reduxjs/toolkit";
import http  from "../../service/axios_http";


export const getAllCategory = createAsyncThunk('product/getAllCategory', async (data, { rejectWithValue }) => {
    try {
        const data = await http.get('/category')
        return data;
    } catch (error) {
        return rejectWithValue(error)
    }
    }
);