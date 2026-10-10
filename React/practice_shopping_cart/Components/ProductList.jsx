import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  return (
    <>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <h1>No products</h1>
      )}
    </>
  )
}

export default ProductList