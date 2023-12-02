import { closeLogin, openLogin, openRegister, closeRegister, openChangePassword, closeChangePassword, openResetPassword, closeResetPassword  } from './commonThunk'

const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  login: false,
  register: false,
  changePassword: false,
  resetPassword: false,
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(openLogin.fulfilled, (state, action) => {
        state.login = true
      })

      .addCase(closeLogin.fulfilled, (state, action) => {
        state.login = false
      })

      .addCase(openRegister.fulfilled, (state, action) => {
        state.register = true
      })

      .addCase(closeRegister.fulfilled, (state, action) => {
        state.register = false
      })
      .addCase(openChangePassword.fulfilled, (state, action) => {
        state.changePassword = true
      })

      .addCase(closeChangePassword.fulfilled, (state, action) => {
        state.changePassword = false
      })

      .addCase(openResetPassword.fulfilled, (state, action) => {
        state.resetPassword = true
      })

      .addCase(closeResetPassword.fulfilled, (state, action) => {
        state.resetPassword = false
      })
  },
})

export default commonSlice.reducer
