import React from 'react'
import Button from './Button'
import "../style.css"
import { useCart } from '../Context/cartContext'
import ToggleButton from './ToggleButton'
const Navbar = ({cartOpen, setCartOpen}) => {

  const {totalItems} = useCart()
  return (
    <div className='flex'>
        <h1>MyStore</h1>
        <ToggleButton></ToggleButton>
        <div>
        <h2>Cart</h2>
        <Button text={`Cart ${totalItems()}`} handler={() => {setCartOpen(!cartOpen)}}  />
        </div>

    </div>
  )
}

export default Navbar