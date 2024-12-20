import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../service/axios_http'
import { openNotification } from '../common/commonSlice'

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

export const onUpdateProfile = createAsyncThunk(
  'profile/onUpdateProfile',
  async (data, thunkApi) => {
    try {
      const response = await http.patch('/profile', data)
      thunkApi.dispatch(openNotification('Update Profile Success'))
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error)
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
