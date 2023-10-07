import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

export default function Main() {
  return (
    <div>
    <NavBar></NavBar>
    <Outlet></Outlet>

    </div>
  )
}

