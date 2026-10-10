import React, { useState } from 'react'
import "../style.css"
import Button from './Button'
import { useCart } from '../Context/cartContext'
const ProductCard = ({ product }) => {
  
  const {addToCart} = useCart()


return (
  <div className='border margin'>
    <img src={product.image} alt="Product Image" width={100} height={100} />
    <div className='flex'>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
    </div>
    <p>{product.description}</p>
    <Button handler={() => addToCart(product)} text="Add to Cart"></Button>
  </div>
)
}

export default ProductCard