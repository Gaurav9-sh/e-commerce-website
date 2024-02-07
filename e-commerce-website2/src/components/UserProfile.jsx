import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { jwtDecode } from "jwt-decode"
import axios from 'axios';

function UserProfile() {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken._id

  useEffect(() => {
    const fetchDetails = async () => {
      try{
      
        const response = await axios.get(`http://localhost:3000/api/userDetails/${userId}`)

        console.log(response);
        const userDetails = response.data
        setEmail(userDetails.email)
        setName(userDetails.name)
      }
      catch(err){
        console.log(err);
      }

    }
    fetchDetails();
  },[userId])
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div>
       <p>Username: <b>{name}</b></p>
      </div>
      <div>
        <p>Email: <b>{email}</b></p>
      </div>
    </div>
  );
}

export default UserProfile;
