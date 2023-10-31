import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../service/axios_http";


export const getAllProduct = createAsyncThunk('product/getAllProduct', async (data, { rejectWithValue }) => {
    try {
        const reponse = await http.get('/product')
        return reponse
    } catch (error) {
        return rejectWithValue(error)
    }
    }
);

export const getProductByCategoryId = createAsyncThunk('product/getProductByCategoryId', async (data, { rejectWithValue }) => {
    const {id} = data
    try {
        const reponse = await http.get(`/product/category/${id}`)
        return reponse
    } catch (error) {
        return rejectWithValue(error)
    }
    }
);