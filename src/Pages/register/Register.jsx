import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
// import { auth } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import  {auth} from '../../firebase/firebase'

export default function Register() {
  const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createUser = async (e) => {
        e.preventDefault();
        try{

            const form = e.target;
             setName(form.name.value)
             setEmail(form.email.value)
             setPassword(form.password.value)
            
            //  firebase signup 
            await createUserWithEmailAndPassword( auth, email, password)
            .then((userInfo) => {
                const user = userInfo.user
                console.log(user)
                navigate("/")
            })

            

            
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Create an account</h1>
       
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={createUser}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="name" className="input input-bordered" required onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" >Login</button>
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
