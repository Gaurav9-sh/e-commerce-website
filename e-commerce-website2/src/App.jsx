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
import Success from './components/Success'
import User from './components/UserProfile'
import Logout from './components/Logout'
import Checkout from './components/Checkout'
import PaymentSuccess from './components/PaymentSuccess'
import PaymentFail from './components/PaymentFail'
import Wishlist from './components/Wishlist'
import { ToastContainer } from 'react-toastify'


const App = () => {
  let [loading, setLoading] = useState(true);
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
          path:"/success",
          element:<Success/>
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
      path:"/more/:category",
      element:<Layout2/>,
    },
    {
      path:"search",
      element:<Layout3/>
    },
    {
      path:"PaymentSuccess",
      element:<PaymentSuccess/>
    },
    {
      path:"PaymentFail",
      element:<PaymentFail/>
    },
    
  ])
  
  return (
   <>
     <RouterProvider router={router}/>
   </>
  )
}

export default App