import authSlice from './auth/authSlice'
import categorySlice from './category/categorySlice'
import commonSlice from './common/commonSlice'
const { configureStore } = require('@reduxjs/toolkit')
const { default: productSlice } = require('./product/productSlice')

const store = configureStore({
  reducer: {
    category: categorySlice,
    product: productSlice,
    common: commonSlice,
    auth: authSlice,
  },
})

export default store
