import authSlice from './auth/authSlice'
import categorySlice from './category/categorySlice'
import commonSlice from './common/commonSlice'
import profileSlice from './profile/profileSlice'
import productSlice from './product/productSlice'
import orderSlice from './order/orderSlice'
import notificationSlice from './notification/notificationSlice'
const { configureStore } = require('@reduxjs/toolkit')

const store = configureStore({
  reducer: {
    category: categorySlice,
    product: productSlice,
    common: commonSlice,
    auth: authSlice,
    profile: profileSlice,
    order: orderSlice,
    notification: notificationSlice,
  },
})

export default store
