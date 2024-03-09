import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Template from './Template'

const Layout = () => {
  return (
    <div>
        <Navbar/>
         <Outlet/>
         <div style={{ display: 'flex'}}>
        <Sidebar />
        <Template />
        </div>
        <Footer/>
    </div>
  )
}

export default Layout