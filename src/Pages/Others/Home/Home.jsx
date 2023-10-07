import React from 'react'
import chain from '../../../assets/images/chain.png'

export default function Home() {
  return (
    <>

    {/* banner  */}
    <div className="md:flex justify-between items-center bg-[#EDEDE9] md:p-6">
       <div className='flex justify-center'> <h1 className='text-3xl md:text-5xl text-center'>FIND YOUR JOY</h1></div>
       <img src={chain} alt="" />
    </div>

    </>
  )
}

