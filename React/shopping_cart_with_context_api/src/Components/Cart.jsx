import { useCart } from "../Context/CartContext"

const Cart = () => {
    const {cart, removeFromCart, getCartTotal} = useCart()

    if(cart.length === 0) return <p>Your Cart is Empty</p>

    return (
        <div>
            <h2>Your Cart</h2>
            {
                cart.map(
                    item => {
                        return <div key={item.id}>
                            <img src={item.image} alt="Cart Item Product Image" width={60} />
                            <p>{item.title}</p>
                            <p>Qty: {item.quantity}</p>
                            <p>${item.price * item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            <h1>Quantity: {item.quantity}</h1>

                        </div>
                    }
                )
            }
            <h1>Total: ${getCartTotal()}</h1>
        </div>
    )
}

export default Cart