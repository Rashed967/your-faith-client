import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Register() {
    const createUser = async (e) => {
        e.preventDefault();
        try{
            const form = e.target.parentElement;
            console.log(form)
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
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={createUser}>Login</button>
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
