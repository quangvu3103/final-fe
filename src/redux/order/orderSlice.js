import { createOrder } from './orderThunk'
import DecodeTokenAndCheck from '../../service/DecodeTokenAndCheck'
import { jwtDecode } from 'jwt-decode'

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

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state, action) => {
        state.loading = true
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        localStorage.setItem('token', action.payload.accessToken)
        state.message = 'Login Suceess'
        window.location.href = '/'
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default orderSlice.reducer
