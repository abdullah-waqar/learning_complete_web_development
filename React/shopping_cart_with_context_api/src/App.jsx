import { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import ProductList from './Components/ProductList'
import Cart from './Components/Cart'
const App = () => {

  const [products , setProducts] = useState([])
  const [showCart , setShowCart] = useState(false)

  useEffect( () => {
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())            
            .then(json=>{
              setProducts((json))
            })
            
            
          } , [] )


          console.log(products)
          return (
            <>
                <NavBar onCartclick = {() => setShowCart(!showCart)}/>
                {showCart ?<Cart></Cart> : <ProductList products={products}/>}
                
                

           </>
  )
}

export default App