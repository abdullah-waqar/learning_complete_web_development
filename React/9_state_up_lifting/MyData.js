import React from 'react'
import GlobalContext from './Global'
import { useContext } from 'react'

const MyData = () => {
    const name = useContext(GlobalContext)
  return (
    <div>

        <h1>My name is {name}</h1>
    </div>
  )
}

export default MyData