import React, { useContext } from 'react'
import Navbar from './Shared/Navbar'
import { Outlet } from 'react-router'
import Swiper from './Shared/Swiper'
import { AuthContext } from './Context/AuthContext'
import Loading from './Shared/Loading'

export const User = () => {
    const {isLoading} =useContext(AuthContext);
    
    if(isLoading){
        return <Loading/>
    }
  return (
   <div>
    <Navbar/>
    <Outlet/>
   </div>
  )
}
