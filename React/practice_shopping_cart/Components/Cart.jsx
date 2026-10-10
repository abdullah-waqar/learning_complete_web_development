import React from 'react'
import { useCart } from '../Context/cartContext'
import Button from './Button'
import "../style.css"

const Cart = () => {

  const {cart, removeFromCart,totalBill, incrementItem, decrementItem } = useCart()
  return (
    <div>
        {
            cart.map( (product) => {
                return (
                    <div key={product.id}>
                <img src={product.image} alt="Product Image" width={100} height={100} />
                    <div className='flex'>
                    <h1>{product.title}</h1>
                    <h2>{product.price}</h2>
                    </div>
                    <p>{product.description}</p>
                    <div>
                    <h1>{product.quantity}</h1>
                    <div>
                        <Button text="+" handler={()=> incrementItem(product.id)}></Button>
                        <Button text="-" handler={()=>decrementItem(product.id)}></Button>
                    </div>
                    </div>

                    <Button handler={() => removeFromCart(product.id)} text="Remove From Cart"></Button>

                    </div>
                )
            } )
        }

        <h1>Total Bill: {totalBill().toFixed(2)}</h1>
    </div>
  )
}

export default Cart