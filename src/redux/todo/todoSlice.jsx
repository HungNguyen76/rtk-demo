import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todoList',
    initialState: [
        {
            id: 1,
            title: "Nhay Xe",
            completed: false
        }
    ],
    reducers: {
        addTodo: (state, action) => {
            return [...state, action.payload]
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    }
})
const { actions, reducer } = todoSlice
export const { addTodo, removeTodo } = actions
export default reducer