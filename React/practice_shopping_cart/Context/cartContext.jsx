import { createContext, useState , useContext } from "react";

const cartContext = createContext()


export function ContextProvider({children})
{

    const [cart, setCart] = useState([])

    function addToCart(product)
    {
        setCart( (prev) => {
            const exist = prev.find( (item) => item.id === product.id )

            if(exist)
            {
                return prev.map( (item) => item.id === product.id ? {...item, quantity: item.quantity + 1}: item )
            }
            else {
                return [...prev, {...product , quantity: 1}]
            }
        } )
    }

    function removeFromCart(id)
    {
        setCart( (prev) => {
            return prev.filter( (item) => item.id !== id )
        } )
    }

    function totalItems()
    {
        return  cart.reduce( (sum, item) => {
            return sum +  item.quantity
        },0 )
    }

    function totalBill()
    {
        return cart.reduce( (sum, item) => {
            return sum + item.price * item.quantity
        },0 )
    }
    function incrementItem(id)
    {
        setCart( prev => prev.map( (item) => {
            return item.id === id ? {...item , quantity: item.quantity + 1} : item
        } ) )
    }

    function decrementItem(id)
    {
       setCart( prev => prev.map( (item) => {
            return item.id === id && item.quantity > 1 ? {...item , quantity: item.quantity - 1} : item
        } ) )
    }

    return (
        <cartContext.Provider value={{cart, addToCart, removeFromCart, totalBill, totalItems, incrementItem, decrementItem}}>
            {children}
        </cartContext.Provider>
    )

  
}

export function useCart()
{
    return useContext(cartContext)
}