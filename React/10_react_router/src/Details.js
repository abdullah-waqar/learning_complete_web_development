import React from 'react'
import { Outlet } from 'react-router'
const Details = () => {
  return (
    <>
    <div>I am Details page</div>
    <Outlet />
    </>
  )
}

export default Details