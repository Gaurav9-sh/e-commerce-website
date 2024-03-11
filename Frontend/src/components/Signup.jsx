import React, { useState } from 'react'
import axios from 'axios';
import login from '../../public/images/login.png'
import { useNavigate } from 'react-router';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })



    const handleinput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        

        setUser({ ...user, [name]: value })
    }

    async function register() {
        const { name, email, password, confirmpassword } = user
        if (name && email && password && (password === confirmpassword)) {
            try {
                await axios.post("https://e-commerce-backend-opis.onrender.com/register", user)
                    .then(res => console.log(res))  

                toast.success('Signup successfully', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                  });
                  setTimeout(()=>{
                    navigate('/login')
                   },500)
            }

            catch (e) {
                console.log(e);
                toast.error('Error in registration', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                  });
            }
        }
        else {
           toast.error('Invalid input', {
                    position: 'top-right',
                    autoClose: 2000, // Close the notification after 2000ms (2 seconds)
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                  });
        }

    }
    return (
        <div className="form">
            <div className="formimage">
                <img src={login} alt="" />
            </div>
            <div className="formcontent">
                <div>
                    <h1 className='formheading'>Signup To Exclusive</h1>
                </div>
                <form action="" onSubmit={(e) => { e.preventDefault(); register(); }} >
                    <div>

                        <input type="text" autoComplete='off' value={user.name} onChange={handleinput} name='name' id='name' className='forminput' placeholder='Enter your name' />
                    </div>
                    <div>

                        <input type="text" autoComplete='off' value={user.email} onChange={handleinput} name='email' id='email' className='forminput' placeholder='Enter your email' />
                    </div>
                    <div>

                        <input type="password" autoComplete='off' value={user.password} onChange={handleinput} name='password' id='password' className='forminput' placeholder='Enter password' />
                    </div>
                    <div>

                        <input type="password" autoComplete='off' value={user.confirmpassword} onChange={handleinput} name='confirmpassword' id='confirmpassword' className='forminput' placeholder='Confirm Password' />
                    </div>
                    <button type='submit' className='formbtn'>Signup</button>
                    
                </form>
            </div>
            <ToastContainer/>
        </div>

    )
}

export default Signup