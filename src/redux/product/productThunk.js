import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../service/axios_http'

export const getProductByName = createAsyncThunk(
  'product/search',
  async (data, { rejectWithValue }) => {
    try {
      const reponse = await http.get(`/product/search?name=${data}`)
      return reponse
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const getAllProduct = createAsyncThunk(
  'product/getAllProduct',
  async (data, { rejectWithValue }) => {
    try {
      const reponse = await http.get('/product')
      return reponse
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const getProductByCategoryId = createAsyncThunk(
  'product/getProductByCategoryId',
  async (data, { rejectWithValue }) => {
    const { id, minPrice, maxPrice } = data
    try {
      const reponse = await http.get(`/product/category/${id}?minPice=${minPrice}&maxPrice=${maxPrice}`)
      return reponse
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const onHandleCreateProduct = createAsyncThunk(
  'product/onHandleCreateProduct',
  async (data, { rejectWithValue }) => {
    try {
      const reponse = await http.post(`/product`, data)
      return reponse
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async (data, { rejectWithValue }) => {
    try {
      const reponse = await http.put(`/product/${data.id}`, data.product)
      return reponse
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (data, { rejectWithValue }) => {
    try {
      const reponse = await http.patch(`/product/${data}`)
      return reponse
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const uploadImages = createAsyncThunk(
  'product/uploadImages',
  async (data, { rejectWithValue }) => {
    try {
      const reponse = await http.post(`/file/multiple-file-upload`, data)
      return reponse
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const uploadImage = createAsyncThunk(
  'product/uploadImage',
  async (data, { rejectWithValue }) => {
    try {
      const reponse = await http.post(`/productImg`, data)
      return reponse
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const getDetailsProduct = createAsyncThunk(
  'product/getDetailsProduct',
  async (data, thunkApi) => {
    try {
      const reponse = await http.get(`/product/${data}`)
      return reponse
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)
