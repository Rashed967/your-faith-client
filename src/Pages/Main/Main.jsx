import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

export default function Main() {
  return (
    <>
    <NavBar></NavBar>
    <div>Main page</div>
    <Outlet></Outlet>
    </>
  )
}

