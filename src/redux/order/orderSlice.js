import {
  checkoutOrder,
  createOrder,
  createOrderPaypal,
  deleteOrderDetails,
  getCart,
  getOrder,
  getOrderById,
  getOrderByUserId,
  getRevenueByMonth,
  getTotalCountByMonth,
  onApprove,
  onApproveOnPaypal,
  updateOrder,
  updateOrderDetails,
} from './orderThunk'
const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  cart: {},
  orders: [],
  order: {},
  loading: false,
  error: [],
  message: '',
  revenueByMonth: [],
  countByMonth: [],
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrder.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.orders = action.payload
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      
      .addCase(getRevenueByMonth.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getRevenueByMonth.fulfilled, (state, action) => {
        state.loading = false
        state.revenueByMonth = action.payload
      })
      .addCase(getRevenueByMonth.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(getTotalCountByMonth.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getTotalCountByMonth.fulfilled, (state, action) => {
        state.loading = false
        state.countByMonth = action.payload
      })
      .addCase(getTotalCountByMonth.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(getOrderByUserId.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getOrderByUserId.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.orders = action.payload
      })
      .addCase(getOrderByUserId.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(createOrder.pending, (state, action) => {
        state.loading = true
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.message = 'Login Suceess'
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getCart.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getCart.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.cart = action.payload
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(createOrderPaypal.pending, (state, action) => {
        state.loading = true
      })
      .addCase(createOrderPaypal.fulfilled, (state, action) => {
        state.loading = false
        // state.cart = action.payload
      })
      .addCase(createOrderPaypal.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(onApprove.pending, (state, action) => {
        state.loading = true
      })
      .addCase(onApprove.fulfilled, (state, action) => {
        state.loading = false
        // state.cart = action.payload
      })
      .addCase(onApprove.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(checkoutOrder.pending, (state, action) => {
        state.loading = true
      })
      .addCase(checkoutOrder.fulfilled, (state, action) => {
        state.loading = false
        // state.cart = action.payload
      })
      .addCase(checkoutOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getOrderById.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.loading = false
        state.order = action.payload
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateOrder.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.message = 'Login Suceess'
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(deleteOrderDetails.pending, (state, action) => {
        state.loading = true
      })
      .addCase(deleteOrderDetails.fulfilled, (state, action) => {
        state.loading = false
        state.cart = action.payload
      })
      .addCase(deleteOrderDetails.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateOrderDetails.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updateOrderDetails.fulfilled, (state, action) => {
        state.loading = false
        state.cart = action.payload
      })

      .addCase(updateOrderDetails.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default orderSlice.reducer
