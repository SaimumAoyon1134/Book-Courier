import React from 'react'
import Navbar from './Shared/Navbar'
import { Outlet } from 'react-router'

export const User = () => {
  return (
   <div>
    <Navbar/>
    <Outlet/>
   </div>
  )
}
