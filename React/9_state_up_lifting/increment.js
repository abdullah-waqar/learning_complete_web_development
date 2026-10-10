import { memo } from "react"
import React,  { useCallback, memo } from 'react'

const Increment =  ({count, setCount}) => {

    const increment = useCallback( ()=>{
        setCount((count) => count + 1)
    }, [])

  return (
    <div>
         {console.log("Increment Render")}
        <button onClick={increment}>Increment Count</button>
    </div>
  )
}

export default memo(Increment)