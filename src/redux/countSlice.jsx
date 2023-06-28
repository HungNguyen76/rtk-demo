import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        increase(state, action) {
            return state + 1
        },
        decrease(state, action) {
            return state - 1
        }   
    }
})
// const { actions, reducer } = countSlice
export const { increase, decrease } = countSlice.actions;
export default countSlice.reducer;