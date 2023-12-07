import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../service/axios_http'

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.post('/order', data)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
