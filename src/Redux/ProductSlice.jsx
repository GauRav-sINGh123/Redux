import { createSlice } from "@reduxjs/toolkit";
 
export const Status=Object.freeze({
    SUCCESS:"Success",
    ERROR:"Error",
    LOADING:"Loading"
})
const productSlice=createSlice({
    name:"Products",
    initialState:{
        data:[],
        status:Status.SUCCESS,
    },
    reducers:{
        setProducts(state,action){
           state.data=action.payload 
        },
        setStatus(state,action){
            state.status=action.payload
        }
    }
})

export const {setProducts,setStatus}=productSlice.actions;
export default productSlice.reducer;

// MiddleWare

export const fetchProducts=()=>{
   return async function fetchProductsThunk(dispatch) {
    dispatch(setStatus(Status.LOADING))
    try {
        const response=await fetch("https://fakestoreapi.com/products")
        const data=await response.json()
        dispatch(setProducts(data))
        dispatch(setStatus(Status.SUCCESS))
    } catch (error) {
        dispatch(setStatus(Status.ERROR))
    }
   }
}