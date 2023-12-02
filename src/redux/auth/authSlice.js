import { login, register, resetPassword } from './authThunk'
import DecodeTokenAndCheck from '../../service/DecodeTokenAndCheck'
import { jwtDecode } from 'jwt-decode'
import { closeLogin } from '../common/commonThunk'

const { createSlice } = require('@reduxjs/toolkit')

let userSignedIn = ''
let isLoggedIn = ''

if (localStorage.getItem('token')) {
  const token = localStorage.getItem('token')
  isLoggedIn = DecodeTokenAndCheck(token)
  userSignedIn = jwtDecode(token)
}

const initialState = {
  isLoggedIn: isLoggedIn.isValid,
  userName: '',
  role: '',
  avartar: '',
  loading: false,
  error: [],
  message: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        localStorage.setItem('token', action.payload.accessToken)
        state.message = 'Login Suceess'
        window.location.href = '/'
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(register.pending, (state, action) => {
        state.loading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false
        localStorage.setItem('token', action.payload.accessToken)
        state.message = 'Login Suceess'
        window.location.href = '/'
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(resetPassword.pending, (state, action) => {
        state.loading = true
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default authSlice.reducer
