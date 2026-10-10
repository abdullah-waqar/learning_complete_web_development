import { useCart } from "../Context/CartContext"

const ProductCard = ({product}) => {
 const {addToCart} =  useCart()

  return (
    <div>
        <img src={product.image} alt="Product Image" />
        <h3>{product.title}</h3>
        <h3>{product.price}</h3>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard