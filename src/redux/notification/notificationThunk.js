import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../service/axios_http'

export const getNotification = createAsyncThunk(
  'notification/getNotification',
  async (data, thunkAPI) => {
    try {
      const response = await http.get('/notification')
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)
