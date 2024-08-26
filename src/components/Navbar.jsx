import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Navbar() {
  const items=useSelector((state)=>state.cart)
  return (
    <div className='w-full h-16 bg-slate-800'>
        <div className='w-full h-full p-4 flex justify-between'>
            <div>
                <h1 className='text-2xl text-white font-bold'>Shopiy</h1>
            </div>
            <div className='flex gap-3'>
             <Link to={"/"}>
             <p className='text-xl font-medium text-white'>Home</p>
             </Link>
             <Link to='/cart'>
             <p className='text-xl font-medium text-white cursor-pointer'>Cart:</p> 
             </Link>
             <p className='text-xl font-medium text-white cursor-pointer'>{items.length}</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar