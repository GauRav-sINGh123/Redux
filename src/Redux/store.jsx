import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import productReducer from './ProductSlice'
const store=configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer
    },
    devTools:true,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
})

export default store