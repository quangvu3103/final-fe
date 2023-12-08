import { getNotification } from './notificationThunk'

const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  notification: [],
  loading: false,
  error: [],
  message: '',
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notification = [action.payload, ...state.notification]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotification.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getNotification.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.notification = action.payload
      })
      .addCase(getNotification.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})
export const { addNotification } = notificationSlice.actions
export default notificationSlice.reducer
