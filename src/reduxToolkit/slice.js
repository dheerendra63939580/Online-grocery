import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addItems: (state,action)=>{
            state.push(action.payload);
        },
        removeItem: (state,action)=>{
            let k = state.indexOf(action.payload);
            state.splice(k,1);
        }
    }
})
export default productSlice.reducer;
export const {addItems,removeItem} = productSlice.actions;