import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import login from '../images/login.png'
import './Login.css'

const Login = () => {
    const [user, setUser] = useState({
        name: "",
        password: "",
    })
    
    

    const handleinput = (e) =>{
         const name = e.target.name;
         const value = e.target.value;
         console.log(name,value);

         setUser({ ...user, [name] : value})
    }

    async function Login() {
        axios.post("http://localhost:3000/login",user)
        .then( res => alert(res.data.message))
    }
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
          <input type="text" name='password' value={user.password} onChange={handleinput} placeholder='Enter Password' className='forminput' />
        </div>
       <div className='formbtncont'>
       <button onClick={Login} className='formbtn' >Login</button>
       </div>
    
      </div>
        
    </div>
  )
}

export default Login