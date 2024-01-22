import React, { useState } from 'react'
import axios from 'axios';
import login from '../images/login.png'

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: ""
    })



    const handleinput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUser({ ...user, [name]: value })
    }

    async function register() {
        const { name, email, password, confirmpassword } = user
        if (name && email && password && (password === confirmpassword)) {
            try {
                await axios.post("http://localhost:3000/register", user)
                    .then(res => console.log(res))
            }

            catch (e) {
                console.log(e);
            }
        }
        else {
            alert("Invalid input")
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

                        <input type="text" autoComplete='off' value={user.phone} onChange={handleinput} name='phone' id='phone' className='forminput' placeholder='Enter phone no.' />
                    </div>
                    <div>

                        <input type="text" autoComplete='off' value={user.password} onChange={handleinput} name='password' id='password' className='forminput' placeholder='Enter password' />
                    </div>
                    <div>

                        <input type="text" autoComplete='off' value={user.confirmpassword} onChange={handleinput} name='confirmpassword' id='confirmpassword' className='forminput' placeholder='Confirm Password' />
                    </div>
                    <button type='submit' className='formbtn'>Registration</button>
                </form>
            </div>
        </div>

    )
}

export default Signup