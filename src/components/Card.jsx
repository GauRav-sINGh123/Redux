import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/CartSlice'

function Card({products}) {
  const dispatch=useDispatch()
   
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