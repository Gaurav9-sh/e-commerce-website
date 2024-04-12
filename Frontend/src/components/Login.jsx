import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import login from '../../public/images/login.png'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  // window.scrollTo(0,0);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  })
  const [clicked,setClicked] = useState(false);
  console.log(clicked)
  

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value })
  }

  async function handleLogin() {
    setClicked(true)
    console.log(clicked)
    try {
      const response = await axios.post('https://e-commerce-backend-opis.onrender.com/login', user);
      console.log(response)
      if (response.status === 200) {
       if(response.status.specialCode)
       {
        console.log("code is received")
       }
       localStorage.setItem('token', response.data.token)
       toast.success('login successfully', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
       setTimeout(()=>{
        setClicked(false)
        navigate('/')
       },500)
      } 
     
    } catch (err) {
      setClicked(false)
      toast.error('Wrong credentials', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className='form'>
      <div className="formimage">
        <img src={login} alt="" />
      </div>
      <div className="formcontent">
        <div>
          <h1 className='formheading'>Login To Exclusive</h1>
        </div>
        <div className='formInputCont'>
          <input type="text" name='name' value={user.name} onChange={handleinput} placeholder='Enter Name' className='forminput' />
          <input type="password" name='password' value={user.password} onChange={handleinput} placeholder='Enter Password' className='forminput' />
        </div>
        <div className='formbtncont'>
          <button onClick={handleLogin} className='formbtn' disabled = {clicked} >Login</button>
        </div>

      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login