import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../service/axios_http'

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.get('/profile')
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

// export const getProfileById = createAsyncThunk(
//   'profile/getProfileById',
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await http.post('/profile', data)
//       return response
//     } catch (error) {
//       return rejectWithValue(error)
//     }
//   },
// )

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.patch('/profile', data)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const updateAvatar = createAsyncThunk(
  'profile/updateAvatar',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.post('/file/file-upload', data)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
