import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../service/axios_http'

export const openLogin = createAsyncThunk(
  'common/openLogin',
  async (data, { rejectWithValue }) => {},
)

export const closeLogin = createAsyncThunk(
  'common/closeLogin',
  async (data, { rejectWithValue }) => {},
)

export const openRegister = createAsyncThunk(
    'common/openRegister',
    async (data, { rejectWithValue }) => {},
  )
  
  export const closeRegister = createAsyncThunk(
    'common/closeRegister',
    async (data, { rejectWithValue }) => {},
  )

  export const openChangePassword = createAsyncThunk(
    'common/openChangePassword',
    async (data, { rejectWithValue }) => {},
  )
  
  export const closeChangePassword = createAsyncThunk(
    'common/closeChangePassword',
    async (data, { rejectWithValue }) => {},
  )

  export const openResetPassword = createAsyncThunk(
    'common/openResetPassword',
    async (data, { rejectWithValue }) => {},
  )
  
  export const closeResetPassword = createAsyncThunk(
    'common/closeResetPassword',
    async (data, { rejectWithValue }) => {},
  )