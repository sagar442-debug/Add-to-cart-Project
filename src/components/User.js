import React, { useState } from 'react'
import useLocalStorage from '../customHooks/useLocalStorage'
import { Navigate, useNavigate } from 'react-router-dom';

const DEFAULT_EMAIL = "admin@gmail.com";
const DEFAULT_PASSWORD = "admin";


const User = () => {
  const {getLocalData, setLocalData} = useLocalStorage()
  const navigate = useNavigate();

  const[user, setUser] = useState ({
    email: '',
    password: ''
  })

  const handleChange=(e)=>{
    setUser((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const dataSubmit = (e)=>{
    if(user.email===DEFAULT_EMAIL && user.password===DEFAULT_PASSWORD){
      setLocalData('isLoggedIn', true)
      navigate("/userDetails")
    }


  }

  if(getLocalData('isLoggedIn')){
    return <Navigate to="/userDetails"/>
  }



  return (
    <div className='min-h-[80vh] flex justify-center mt-10'>
      <div className=" space-y-5  px-5">
        <input onChange={handleChange} className='outline-none p-2 border-gray-300 border-[1px]' placeholder='Enter your email here' type="text" name='email' />
        <br />
        <input onChange={handleChange} className='outline-none p-2 border-gray-300 border-[1px]' placeholder='Enter your password' type="password" name='password' />
        <br/>
        <button onClick={dataSubmit} className="bg-stone-700 p-2 rounded text-white hover:bg-stone-500 duration-75">Log In</button>
      </div>
    </div>
  )
}

export default User
