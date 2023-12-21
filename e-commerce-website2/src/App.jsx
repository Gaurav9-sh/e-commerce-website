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
          path:"/product",
          element:<Product/>
        }
      ]
    },
    
  ])
  
  return (
   <>
     <RouterProvider router={router}/>
   </>
  )
}

export default App