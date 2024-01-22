import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Layout from './components/Layout'
import About from './components/About'
import Product from './components/product'
import Template from './components/Template'
import Layout2 from './components/Layout2'
import Login from './components/Login'
import Signup from './components/Signup'
import Layout3 from './components/Layout3'
import Cart from './cartComponents/Cart'

const App = () => {
   
  const router = createBrowserRouter([
   
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<HomePage/>
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
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        {
          path:"/cart",
          element:<Cart/>
        }

      ]
    },
    {
      path:"/more/:category",
      element:<Layout2/>
    },
    {
      path:"search",
      element:<Layout3/>
    }

   
    
  ])
  
  return (
   <>
     <RouterProvider router={router}/>
  {/* <Cart/> */}
   </>
  )
}

export default App