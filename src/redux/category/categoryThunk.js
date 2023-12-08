import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../service/axios_http'
import { useDispatch } from 'react-redux'
import { openNotifi } from '../common/commonThunk'
import { openNotification } from '../common/commonSlice'

export const getAllCategory = createAsyncThunk(
  'category/getAllCategory',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.get('/category')
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const createCategory = createAsyncThunk(
  'category/createCategory',
  async (data, thunkApi) => {
    try {
      const response = await http.post('/category', data)
      thunkApi.dispatch(openNotification('Create Category Success'))
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)

export const updateCategory = createAsyncThunk(
  'category/updateCategory',
  async (data, thunkApi) => {
    try {
      const response = await http.patch('/category', data)
      thunkApi.dispatch(openNotification('Update Category Success'))
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)

export const deleteCategory = createAsyncThunk(
  'category/delete',
  async (data, thunkApi) => {
    try {
      const response = await http.delete(`/category/${data}`)
      thunkApi.dispatch(openNotification('Delete Category Success'))
      return response
    } catch (error) {
      return thunkApi.dispatch(
        openNotification(
          'Cannnot delete category cause category have products exist',
        ),
      )
    }
  },
)
