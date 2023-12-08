import {
  deleteProduct,
  getAllProduct,
  getDetailsProduct,
  getProductByCategoryId,
  onHandleCreateProduct,
  updateProduct,
  uploadImage,
  uploadImages,
} from './productThunk'

const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  data: [],
  loading: false,
  product: {},
  error: [],
  message: '',
}

const productSllice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(getProductByCategoryId.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getProductByCategoryId.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(getProductByCategoryId.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(onHandleCreateProduct.pending, (state, action) => {
        state.loading = true
      })
      .addCase(onHandleCreateProduct.fulfilled, (state, action) => {
        state.loading = false
        state.message = 'Create Product Success'
      })
      .addCase(onHandleCreateProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateProduct.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(uploadImages.pending, (state, action) => {
        state.loading = true
      })
      .addCase(uploadImages.fulfilled, (state, action) => {
        state.loading = false
      })
      .addCase(uploadImages.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(uploadImage.pending, (state, action) => {
        state.loading = true
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.loading = false
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(getDetailsProduct.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getDetailsProduct.fulfilled, (state, action) => {
        state.loading = false
        state.product = action.payload
      })
      .addCase(getDetailsProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(deleteProduct.pending, (state, action) => {
        state.loading = true
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default productSllice.reducer
