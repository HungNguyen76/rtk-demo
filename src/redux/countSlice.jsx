import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
    name: 'count',
    initialState: [
        {
            id: 0,
            name: 'Air Jordan',
            price: '1000'
        }
    ],
    reducers: {
        remove: (state, action) => {
            return state.filter(p => p.id !== action.payload)
        }
    }
})
const { actions, reducer } = countSlice
export const { remove } = actions
export default reducer