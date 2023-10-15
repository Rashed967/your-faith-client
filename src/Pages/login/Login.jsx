import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import {signInWithEmailAndPassword} from 'firebase/auth'
import  {auth} from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'


export default function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // login logic here 
  const handleLogin = async (e) => {
    e.preventDefault()
    const form = e.target;
     setEmail(form.email.value)
     setPassword(form.password.value)
    
    //  sign in logic 
    await signInWithEmailAndPassword(auth, email, password)
    .then((userInfo) => {
      const user = userInfo.user
      console.log(user)

      navigate("/")

    })
    .catch(error => {
      console.log(error)
    })
  }


  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

      </form>
    <div className='flex justify-center my-2 space-x-2'>
        <a className='text-2xl' href="#"><FontAwesomeIcon icon={faGoogle} /></a>
    </div>
    </div>

  </div>
</div>
  )
}
