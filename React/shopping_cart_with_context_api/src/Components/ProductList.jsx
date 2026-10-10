import ProductCard from './ProductCard'
const ProductList = (props) => {
  return (
    <div>
        {
            props.products.map(
                (product)=> {
                        
                    return <ProductCard product={product} key={product.id}></ProductCard>
                }
            )
        }
    </div>
  )
}

export default ProductList