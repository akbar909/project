import {configureStore} from "@reduxjs/toolkit"
import AppleReducer from "../features/appleSlice"
const store = configureStore({
    reducer: {
        apple:AppleReducer,
    }
})

export default store;