import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Template3 from './Template3'

const Layout = () => {
  return (
    <div>
        <Navbar/>
         <Outlet/>
         <div style={{ display: 'flex'}}>
        <Sidebar />
        <Template3 />
        </div>
        <Footer/>
    </div>
  )
}

export default Layout