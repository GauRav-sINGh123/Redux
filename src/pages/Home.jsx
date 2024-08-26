import { useEffect, useState } from "react"
import Card from '../components/Card'
 

function Home() {
  
  const [products,setProducts]=useState([])
  const [error,setError]=useState()
  useEffect(()=>{
    const fetchProducts=async()=>{
      try {
         await fetch("https://fakestoreapi.com/products").
        then((res)=>res.json()).then((data)=>setProducts(data))
       
      } catch (error) {
        setError(error.message)
      }
    }
    fetchProducts()
  },[])
 
  if(error){
    return <div>{error}</div>
  }
  
  return (
   <div>
    <div className='text-3xl text-center mt-4 font-bold'>Products</div>
    <Card products={products}/>
   </div>
  )
}

export default Home