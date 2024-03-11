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




  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value })
  }

  async function handleLogin() {
    try {
      const response = await axios.post('http://localhost:3000/login', user);

      if (response.status === 200) {
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
        navigate('/')
       },500)
      } 
    } catch (err) {
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
          <button onClick={handleLogin} className='formbtn' >Login</button>
        </div>

      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login