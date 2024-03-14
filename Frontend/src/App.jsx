import React, { useEffect, useState } from 'react'
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
import { Grid } from 'react-loader-spinner';


const App = () => {
  const[loading,setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])
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
     {
      loading ? (
        <div style={{ position: 'relative', height: '100vh' }}>
        <Grid visible={true}
          height="80"
          width="80"
          color="#DB4444"
          ariaLabel="grid-loading"
          radius="12.5"
     wrapperStyle={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
          wrapperClass="grid-wrapper" /></div>
      ) : (<RouterProvider router={router}/>)
     }
   </>
  )
}

export default App
