import React from 'react'
import MyData from './MyData'
const Decrement = ({setCount}) => {

    const decrement = () =>{
        setCount( count => count - 1 )
    }
  return (
    <div>
        {console.log("Decrement rerender")}
        <button onClick={decrement}>Decrement</button>
        <MyData></MyData>
    </div>
  )
}

export default React.memo(Decrement)