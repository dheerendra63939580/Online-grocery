import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slice';
const store = configureStore({
    reducer: {
        product: productSlice
    }
})
export {store};