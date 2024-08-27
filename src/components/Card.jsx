import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/CartSlice'
import { fetchProducts } from '../Redux/ProductSlice'
import { Status } from '../Redux/ProductSlice'

function Card() {
  const dispatch=useDispatch()
  const {data:products,status}=useSelector((state)=>state.product)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  
  if(status===Status.LOADING){
    return(
      <div className=" mt-40 text-center">
  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto" />
  <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
  <p className="text-zinc-600 dark:text-zinc-400">
    Your adventure is about to begin
  </p>
</div>

    )
    
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 place-content-center mt-10 ml-10'  >
      {
        products.map((product)=>(
          <div key={product.id} className="max-w-sm p-5 bg-white border border-gray-400 rounded-lg shadow  ">
           <div className='flex items-center justify-center'> 
           <img className="rounded-t-lg h-[200px] w-[200px]" src={product.image} alt="" />
           </div>
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">
                {product.title}
              </h5>
          </div>
          <div className='flex justify-between'>
            <p className="text-black font-bold ml-3">${product.price}</p>
            <button onClick={()=>dispatch(addToCart(product))} className='bg-blue-500 text-white p-2 rounded-lg'>Add to cart</button>
          </div>
        </div>
        
        ))
      }
    </div>
  )
}

export default Card