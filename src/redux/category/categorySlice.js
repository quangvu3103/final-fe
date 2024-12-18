import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from './categoryThunk'

const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  data: [],
  loading: false,
  error: [],
}

const categorySllice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload // dữ liệu được trả về từ BE gán vào data
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(createCategory.pending, (state, action) => {
        state.loading = true
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false
        state.data.push(action.payload)
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateCategory.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(deleteCategory.pending, (state, action) => {
        state.loading = true
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false
        const categoryIdToDelete = action.payload.id
        state.data = state.data.filter((cate) => cate.id !== categoryIdToDelete)
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default categorySllice.reducer
