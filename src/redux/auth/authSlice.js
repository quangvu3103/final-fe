import {
  changePassword,
  login,
  loginGoogle,
  register,
  resetPassword,
  sendFeedback,
} from './authThunk'
import DecodeTokenAndCheck from '../../service/DecodeTokenAndCheck'
import { jwtDecode } from 'jwt-decode'

const { createSlice } = require('@reduxjs/toolkit')

let userSignedIn = ''
let isLoggedIn = ''

if (localStorage.getItem('token')) {
  const token = localStorage.getItem('token')
  isLoggedIn = DecodeTokenAndCheck(token) // để check xem hết hạn hay chưa
  userSignedIn = jwtDecode(token) // chứa thông tin của token
}
// khi chạy app sẽ check token để kiểm tra xem login chưa

const initialState = {
  isLoggedIn: isLoggedIn.isValid, // check xem đã login hay chưa
  userName: userSignedIn.email,
  userId: userSignedIn.id,
  role: userSignedIn.role,
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
      .addCase(loginGoogle.pending, (state, action) => {
        state.loading = true
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        localStorage.setItem('token', action.payload.accessToken)
        state.message = 'Login Suceess'
        window.location.href = '/'
      })
      .addCase(loginGoogle.rejected, (state, action) => {
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
        state.message = 'Please check your email'
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(changePassword.pending, (state, action) => {
        state.loading = true
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false
        state.error = []
        state.message = 'Change password successfully'
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(sendFeedback.pending, (state, action) => {
        state.loading = true
      })
      .addCase(sendFeedback.fulfilled, (state, action) => {
        state.loading = false
        state.error = []
        state.message = 'Change password successfully'
      })
      .addCase(sendFeedback.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default authSlice.reducer
