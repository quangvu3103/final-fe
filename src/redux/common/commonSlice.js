const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  login: false,
  register: false,
  changePassword: false,
  resetPassword: false,
  notifi: { open: false, message: '' },

}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    openNotification: (state, action) => {
      state.notifi.open = true
      state.notifi.message = action.payload
    },
    closeNotification: (state, action) => {
      state.notifi.open = false
      state.notifi.message = ''
    },
    openChangePassword: (state, action) => {
      state.changePassword = true
    },
    closeChangePassword: (state, action) => {
      state.changePassword = false
    },
    openLogin: (state, action) => {
      state.login = true
    },
    closeLogin: (state, action) => {
      state.login = false
    },
    openRegister: (state, action) => {
      state.register = true
    },
    closeRegister: (state, action) => {
      state.register = false
    },
    openResetPassword: (state, action) => {
      state.resetPassword = true
    },
    closeResetPassword: (state, action) => {
      state.resetPassword = false
    },
  },
  extraReducers: (builder) => {},
})
export const {
  openNotification,
  closeNotification,
  openLogin,
  closeLogin,
  openRegister,
  closeRegister,
  openChangePassword,
  closeChangePassword,
  openResetPassword,
  closeResetPassword,
} = commonSlice.actions
export default commonSlice.reducer
