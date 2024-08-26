import { useDispatch, useSelector } from "react-redux"
import {removeFromCart} from "../Redux/CartSlice"

function Cart() {
  const items=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-5 mb-3">Cart</h1>
      <div className="flex flex-col w-full justify-center items-center gap-8">
         {
           items.map((item)=>(
            <div className="max-w-md mx-auto hover:scale-105 transition-all ease-in-out cursor-pointer bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img
        className="h-44 w-full object-fit  md:w-48"
        src={item.image}
      />
    </div>
    <div className="p-8">
      <p
        href="#"
        className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
      >
       {item.title.slice(0,36)}
      </p>
       <p className="text-gray-500 mt-2">${item.price}</p>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4" onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  </div>
</div>

           ))
         }
      </div>
    </div>
  )
}

export default Cart