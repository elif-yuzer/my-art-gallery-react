import React from 'react'
import { Outlet, Routes } from 'react-router-dom'
import MyNavbar from '../companents/MyNavbar'

const MainLayout = () => {
  return (
   <div>
    <MyNavbar/>
   <Outlet>
   </Outlet>
   </div>
  )
}

export default MainLayout