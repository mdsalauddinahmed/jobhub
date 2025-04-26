import React from 'react'
import Navber from '../Shared/Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer'

export const MainLayout = () => {
  return (
    <div>
   <Navber></Navber>
   <Outlet></Outlet>
   <Footer></Footer>

    </div>
  )
}
