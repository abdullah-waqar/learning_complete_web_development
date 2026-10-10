import ReactDOM from "react-dom/client"
import Navbar from "./Components/Navbar"
import { useEffect, useState } from "react"
import ProductList from "./Components/ProductList"
import { ContextProvider } from "./Context/cartContext"
import { ThemeProvider } from "./Context/ThemeContext"
import "./style.css"
import Cart from "./Components/Cart"
import { useDark } from "./Context/ThemeContext"
function App()
{   

    const [products, setProducts] = useState([])
    const [cartOpen, setCartOpen] = useState(false)

    useEffect( ()=>{
       try {fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())            
            .then(products=>setProducts(products))
    } catch(err){
        console.log(err)
    } }  , [] )
    
    const {isDark} = useDark()
    return (
        <div className={isDark ? "darkTheme": "lightTheme"}>
           <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen}/>

           {cartOpen ? <Cart></Cart> :  <ProductList products={products}></ProductList>}
        </div>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<ContextProvider>
    <ThemeProvider>
    <App></App>
    </ThemeProvider>
</ContextProvider>)
