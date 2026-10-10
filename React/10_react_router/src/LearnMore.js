import React from 'react'
import { Outlet } from "react-router";

const LearnMore = () => {
  return (
    <>
    <div>I am Learn more default page of Details</div>
    <Outlet />
    </>
  )
}

export default LearnMore