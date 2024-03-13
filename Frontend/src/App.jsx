import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import './App.css'
import Contact from './components/Contact'
import Layout from './components/Layout'
import About from './components/About'
import Product from './components/product'
import Layout2 from './components/Layout2'
import Login from './components/Login'
import Signup from './components/Signup'
import Layout3 from './components/Layout3'
import Cart from './components/Cart'
import User from './components/UserProfile'
import Logout from './components/Logout'
import Checkout from './components/Checkout'
import Wishlist from './components/Wishlist'



const App = () => {
  
  const router = createBrowserRouter([
   
    {
      path: "/",
      element:<Layout />,
      children:[
        {
          path:"",
          element:<HomePage/>
        },
        {
          path: "/login",
          element:<Login/>
        },

        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/About",
          element:<About/>
        },
        {
          path:"/Product/:id",
          element:<Product/>
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        {
          path:"/Cart",
          element:<Cart/>
        },
        {
          path:"/user",
          element:<User/>
        },
        {
          path:"/logout",
          element:<Logout/>
        },
        {
          path:"/checkout",
          element:<Checkout/>
        },
        {
          path:"/wishlist",
          element:<Wishlist/>
        }
      ]
    },
    {
      path:"/:category",
      element:<Layout2/>,
    },
    {
      path:"search",
      element:<Layout3/>
    },
    
  ])
  
  return (
   <>
     <RouterProvider router={router}/>
   </>
  )
}

export default App