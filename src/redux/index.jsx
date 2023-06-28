// import { combineReducers } from "react-redux";
// import countReducer from "./reducer";
// export default combineReducers({countReducer})

import { configureStore } from "@reduxjs/toolkit";
import countSlice from './countSlice'

const store = configureStore({
    reducer: {
        count: countSlice
    }
})
export default store