import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
const store=configureStore({
    reducer:{
        cart:cartReducer
    },
    devTools:true,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
})

export default store