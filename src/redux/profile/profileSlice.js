import DecodeTokenAndCheck from '../../service/DecodeTokenAndCheck'
import { jwtDecode } from 'jwt-decode'
import { getProfile, updateAvatar, onUpdateProfile } from './profileThunk'

const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  profile: {},
  loading: false,
  error: [],
  message: '',
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.profile = action.payload
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(onUpdateProfile.pending, (state, action) => {
        state.loading = true
      })
      .addCase(onUpdateProfile.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
      })
      .addCase(onUpdateProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateAvatar.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        console.log(action.payload)
        // window.location.href = '/profile'
        state.loading = false
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default profileSlice.reducer
