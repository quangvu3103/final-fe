import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../service/axios_http'

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.post('/auth/login', data)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.post('/auth/register', data)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.post('/auth/reset', data)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
