import { useCart } from "../Context/CartContext"

const NavBar = ({onCartclick}) => {
    const {getCartCount} = useCart()
  return (
    <nav>
        <h1>My Store</h1>
        <button onClick={onCartclick}>Cart {getCartCount()}</button>
    </nav>
  )
}

export default NavBar