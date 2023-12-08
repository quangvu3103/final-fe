import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../service/axios_http'

export const getNotification = createAsyncThunk(
  'notification/getNotification',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.get('/notification')
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
