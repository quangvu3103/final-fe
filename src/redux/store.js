import categorySlice from "./category/categorySlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: productSlice } = require("./product/productSlice");



const store = configureStore({
    reducer:{
        category: categorySlice,
        product: productSlice,
    }
})

export default store;